import create from "zustand";
import {
  createPairsOfColors,
  getAAAResults,
  getAAResults,
  getResults,
  onlyUnique,
  prepareArrayOfColors,
} from "../utils/contrastFunctions";

const useContrastStore = create<any>((set: any) => ({
  isLoading: false,
  results: [],
  filteredResults: [],
  criteria: "AA",
  colors: [],
  setResults: (input: string) =>
    set(() => {
      const colors = prepareArrayOfColors(input);
      const pairs = createPairsOfColors(colors);
      return {
        results: getResults(pairs),
      };
    }),
  setFilteredResults: (results: any[]) =>
    set((state: any) => ({
      filteredResults:
        state.criteria === "AA"
          ? getAAResults(results)
          : getAAAResults(results),
    })),
  setColors: () =>
    set((state: any) => ({ colors: state.filteredResults.filter(onlyUnique) })),
  changeCriteriaFilter: () =>
    set((state: any) => ({ criteria: state.criteria === "AA" ? "AAA" : "AA" })),
  loading: () => set((state: any) => ({ isLoading: !state.isLoading })),
}));

export default useContrastStore;
