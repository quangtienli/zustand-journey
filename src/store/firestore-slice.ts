import { StoreSlice } from '.';
import { SyncStatus } from '../types';

export interface FirestoreSlice {
  syncStatus: SyncStatus;
  setSyncStatus: (syncStatus: SyncStatus) => void;
}

const createFirestoreSlice: StoreSlice<FirestoreSlice> = (set) => ({
  syncStatus: 'synced',
  setSyncStatus: (syncStatus: SyncStatus) => set(() => ({ syncStatus })),
});

export default createFirestoreSlice;
