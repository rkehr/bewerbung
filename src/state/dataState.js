import create from 'zustand';

import { skillLevels, occupationTimeLine } from '../data';

const useDataStore = create((set) => ({
  skillLevels: skillLevels,
  occupationTimeLine: occupationTimeLine.map((occupation) => {
    return { ...occupation, isInFocus: false };
  }),
  toggleFocus: (indexToSet) =>
    set((state) => ({
      occupationTimeLine: state.occupationTimeLine.map((occupation, index) => {
        occupation.isInFocus = index == indexToSet && !occupation.isInFocus;
        return { ...occupation };
      }),
    })),
}));

export default useDataStore;
