import create from 'zustand';
import { skillLevels, occupationTimeLine, themes } from '../data';
import produce from 'immer';

const immer = (config) => (set, get) => config((fn) => set(produce(fn), get));

const useGlobalStore = create((set) => ({
  theme: themes.dark,
  language: 'de',
  skillLevels: skillLevels,
  occupationTimeLine: occupationTimeLine.map((occupation) => {
    return { ...occupation, isInFocus: false};
  }),
  toggleTheme: () =>
    set((state) => ({
      theme: state.theme === themes.dark ? themes.light : themes.dark,
    })),
  toggleFocus: (indexToSet) =>
    set((state) => ({
      occupationTimeLine: state.occupationTimeLine.map((occupation, index) => {
        occupation.isInFocus =
          index == indexToSet && !occupation.isInFocus ? true : false;
        return { ...occupation };
      }),
    })),
}));

export { useGlobalStore };
