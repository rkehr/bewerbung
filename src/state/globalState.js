import create from 'zustand';
import { skillLevels, occupationTimeLine, themes } from '../data';

const useGlobalStore = create((set) => ({
  theme: themes.dark,
  language: 'de',
  skillLevels: skillLevels,
  occupationTimeLine: occupationTimeLine.map((occupation) => {
    return { ...occupation, isInFocus: false };
  }),
  toggleTheme: () =>
    set((state) => ({
      theme: state.theme === themes.dark ? themes.light : themes.dark,
    })),
  setFocus: (indexToSet) =>
    set((state) => {
      state.occupationTimeLine.forEach((occupation) => {
        occupation.isInFocus = false;
      });
      state.occupationTimeLine[indexToSet].isInFocus = true;
    }),
}));

export { useGlobalStore };
