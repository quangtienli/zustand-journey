import { StoreSlice } from '.';

export interface PandaSlice {
  pandas: number;
  addPanda: () => void;
}

export const createPandaSlice: StoreSlice<PandaSlice> = (set, get) => ({
  pandas: 0,
  addPanda: () => set((state) => ({ pandas: state.pandas + 1 })),
});
