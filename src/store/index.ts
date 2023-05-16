import { create, StoreApi } from 'zustand';
import { persist, devtools } from 'zustand/middleware';
import createFirestoreSlice, { FirestoreSlice } from './firestore-slice';
import createUserSlice, { UserSlice } from './user-slice';

export type StoreState = FirestoreSlice & UserSlice;

export type StoreSlice<T> = (
  set: StoreApi<StoreState>['setState'],
  get: StoreApi<StoreState>['getState']
) => T;

const applyMiddlewares = (f: StoreSlice<StoreState>) =>
  devtools(
    persist(f, {
      name: 'store',
      version: 0,
    })
  );

const useStore = create<StoreState>()(
  applyMiddlewares((set, get) => ({
    ...createUserSlice(set, get),
    ...createFirestoreSlice(set, get),
  }))
);

export default useStore;
