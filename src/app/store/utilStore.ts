import { create } from "zustand";

export interface TMutant {
  _id: string;
  name: string;
}
export interface ICategory extends TMutant {
  subCategory: TMutant[];
}

export interface ICountry extends TMutant {
  states: TMutant[];
}
const UTILS = {
  country: [] as ICountry[],
  category: [] as ICategory[],
};

type IUtils = typeof UTILS;

interface IUtilStore {
  utils: IUtils;
  setCountry: (data: ICountry[]) => void;
  setCategory: (data: ICategory[]) => void;
}

const useUtilStore = create<IUtilStore>((set) => ({
  utils: UTILS,
  setCategory(data) {
    set((state) => ({ ...state, category: data }));
  },
  setCountry(data) {
    set((state) => ({ ...state, country: data }));
  },
}));

export default useUtilStore;
