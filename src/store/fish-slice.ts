import { StoreSlice } from '.';

export interface FishSlice {
  fishes: number;
  addFish: () => void;
}

export const createFishSlice: StoreSlice<FishSlice> = (set, get) => ({
  fishes: 1,
  addFish: () => set((state) => ({ fishes: state.fishes + 1 })),
});
