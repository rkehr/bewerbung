import create from 'zustand';
import produce from 'immer';

import { skillLevels, occupationTimeLine, themes } from '../data';
import { populateStyles } from '../functions';

const immer = config => (set, get) => config(fn => set(produce(fn), get));

const initialThemeIndex = localStorage.getItem('themeIndex') || 0;
const useGlobalStore = create(set => ({
  theme: {
    ...themes[initialThemeIndex],
    ...populateStyles(themes[initialThemeIndex]),
  },
  themeIndex: initialThemeIndex,
  language: 'de',
  skillLevels: skillLevels,
  occupationTimeLine: occupationTimeLine.map(occupation => {
    return { ...occupation, isInFocus: false };
  }),
  cycleTheme: () =>
    set(state => {
      const nextThemeIndex = (state.themeIndex + 1) % themes.length;
      localStorage.setItem('themeIndex', nextThemeIndex);
      const theme = themes[nextThemeIndex];
      return {
        theme: {
          ...theme,
          ...populateStyles(theme),
        },
        themeIndex: nextThemeIndex,
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
