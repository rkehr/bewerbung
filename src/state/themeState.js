import create from 'zustand';
import { themes } from '../data';
import { populateStyles } from '../functions';

const initialThemeIndex = localStorage.getItem('themeIndex') || 0;

const useThemeStore = create((set) => ({
  theme: {
    ...themes[initialThemeIndex],
    ...populateStyles(themes[initialThemeIndex]),
  },
  localAccent: '',
  themeIndex: initialThemeIndex,
  setTheme: (themeIndexManipulator, localAccentColor) =>
    set((state) => {
      const newThemeIndex =
        themeIndexManipulator(state.themeIndex) % themes.length;
      localStorage.setItem('themeIndex', newThemeIndex);
      const accent = localAccentColor
        ? localAccentColor
        : themes[newThemeIndex].accent;
      const theme = { ...themes[newThemeIndex], accent: accent };
      return {
        theme: {
          ...theme,
          ...populateStyles(theme),
        },
        themeIndex: newThemeIndex,
        localAccent: accent,
      };
    }),
}));

export default useThemeStore;
