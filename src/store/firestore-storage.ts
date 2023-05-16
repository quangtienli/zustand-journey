import { PersistStorage, StorageValue } from 'zustand/middleware';

const createFirestoreStorage = <S>(): PersistStorage<S> | undefined => {
  const persistStorage: PersistStorage<S> = {
    getItem: async (name: string) => {
      return null;
    },
    setItem: async (name: string, value: StorageValue<S>) => {
      return;
    },
    removeItem: async (name: string) => {
      return;
    },
  };

  return persistStorage;
};

export default createFirestoreStorage;
