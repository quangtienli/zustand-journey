import { create, StoreApi } from 'zustand';
import { createPandaSlice, PandaSlice } from './panda-slice';
import { createFishSlice, FishSlice } from './fish-slice';
import { BearSlice, createBearSlice } from './bear-slice';

export type StoreState = BearSlice & PandaSlice & FishSlice;

export type StoreSlice<T> = (
  set: StoreApi<StoreState>['setState'],
  get: StoreApi<StoreState>['getState']
) => T;

const useStore = create<StoreState>((set, get) => ({
  ...createBearSlice(set, get),
  ...createPandaSlice(set, get),
  ...createFishSlice(set, get),
}));

export default useStore;
