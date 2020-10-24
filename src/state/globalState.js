import create from 'zustand';
import produce from 'immer';

import { skillLevels, occupationTimeLine, themes, pages } from '../data';
import { populateStyles } from '../functions';

const immer = config => (set, get) => config(fn => set(produce(fn), get));

const initialThemeIndex = localStorage.getItem('themeIndex') || 0;
const useGlobalStore = create(set => ({
  theme: {
    ...themes[initialThemeIndex],
    ...populateStyles(themes[initialThemeIndex]),
  },
  localAccent: '',
  themeIndex: initialThemeIndex,
  language: 'de',
  skillLevels: skillLevels,
  occupationTimeLine: occupationTimeLine.map(occupation => {
    return { ...occupation, isInFocus: false };
  }),
  setTheme: (themeIndexManipulator, localAccentColor) =>
    set(state => {
      const nextThemeIndex =
        themeIndexManipulator(state.themeIndex) % themes.length;
      localStorage.setItem('themeIndex', nextThemeIndex);
      const accent = localAccentColor
        ? localAccentColor
        : themes[nextThemeIndex].accent;
      const theme = { ...themes[nextThemeIndex], accent: accent };
      return {
        theme: {
          ...theme,
          ...populateStyles(theme),
        },
        themeIndex: nextThemeIndex,
        localAccent: accent,
      };
    }),
  toggleFocus: indexToSet =>
    set(state => ({
      occupationTimeLine: state.occupationTimeLine.map((occupation, index) => {
        occupation.isInFocus =
          index == indexToSet && !occupation.isInFocus ? true : false;
        return { ...occupation };
      }),
    })),
}));
export { useGlobalStore };
