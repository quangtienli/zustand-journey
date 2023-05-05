import { create, StoreApi } from 'zustand';
import { persist, devtools } from 'zustand/middleware';
import { createPandaSlice, PandaSlice } from './panda-slice';
import { createFishSlice, FishSlice } from './fish-slice';
import { BearSlice, createBearSlice } from './bear-slice';

export type StoreState = BearSlice & PandaSlice & FishSlice;

export type StoreSlice<T> = (
  set: StoreApi<StoreState>['setState'],
  get: StoreApi<StoreState>['getState']
) => T;

const applyMiddlewares = (f: StoreSlice<StoreState>) =>
devtools(
    persist(f, {
      name: 'store',
      partialize: (state: StoreState) => ({
        bears: state.bears,
      }),
    })
)

const useStore = create<StoreState>()(
  applyMiddlewares((set, get) => ({
    ...createBearSlice(set, get),
    ...createPandaSlice(set, get),
    ...createFishSlice(set, get),
  }))
);

export default useStore;
