import create from 'zustand';
import { themes } from '../data';
import { populateStyles, getThemeFields } from '../functions';

const initialThemeIndex = localStorage.getItem('themeIndex') || 0;

const useThemeStore = create((set, get) => ({
  themeFields: getThemeFields(themes),

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
      localStorage.setItem('themeIndex', String(newThemeIndex));
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

  applyTheme: (themeRequest: Object) => {
    const themedStyles: Object = Object.keys(themeRequest).reduce(
      (acc: { [key: string]: string }, val: string) => {
        const themeField = themeRequest[val];
        let result: { [key: string]: string } = acc;
        result[val] = get().theme[themeField];
        return result;
      },
      {}
    );
    return themedStyles;
  },
}));

enum themeableCssProperties {
  color,
  backgroundColor,
  borderColor,
  borderColorLeft,
  borderColorRight,
  borderColorTop,
  borderColorBottom,
}
enum themeColors {
  accent,
  primary,
  background,
  backgroundDark,
}
type themeRequest = {
  [key: string]: themeColors;
};

const applyTheme = (
  themeRequest: { themeRequest },
  theme
): { [key: string]: string } => {
  return { '': '' };
};

export default useThemeStore;
