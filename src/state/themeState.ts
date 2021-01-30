import create from 'zustand';
import { themes } from '../data';

const initialThemeIndex = localStorage.getItem('themeIndex') || 0;

const useThemeStore = create((set, get) => ({
  theme: {
    ...themes[initialThemeIndex],
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
        theme: theme,
        themeIndex: newThemeIndex,
        localAccent: accent,
      };
    }),

  applyTheme: (themeRequest: Object) => {
    const themeRequestKeys = Object.keys(themeRequest);
    const themedStyles = themeRequestKeys.reduce((acc, requestKey) => {
      const themeField = themeRequest[requestKey];
      const themeProperty = get().theme[themeField];
      if (themeProperty) {
        acc[requestKey] = get().theme[themeField];
      } else {
        acc[requestKey] = themeRequest[requestKey];
      }
      return acc;
    }, {});
    return themedStyles;
  },
}));

const useTheme = (themeRequest) => {
  return useThemeStore((state) => state.applyTheme(themeRequest));
};

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

export default useThemeStore;
export { useTheme };
