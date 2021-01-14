import create from 'zustand';
// import produce from 'immer';

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
  pageDirection: 1,
  setPageDirection: (direction) => {
    set(() => {
      return { pageDirection: direction };
    });
  },
  categoryFilters: ['Alle'],
  setCategoryFilters: (newCategoryFilters) =>
    set((state) => {
      return { categoryFilters: newCategoryFilters };
    }),
}));
export default useGlobalStore;
