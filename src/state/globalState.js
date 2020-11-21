import create from 'zustand';
// import produce from 'immer';

import { skillLevels, occupationTimeLine, themes } from '../data';

//const immer = config => (set, get) => config(fn => set(produce(fn), get));

const useGlobalStore = create((set) => ({
  language: 'de',
  previousPageIndex: 0,
  setPreviousPageIndex: (index) =>
    set((state) => {
      if (state.previousPageIndex != index) {
        return {
          previousPageIndex: index,
        };
      } else {
        return;
      }
    }),
}));
export { useGlobalStore };
