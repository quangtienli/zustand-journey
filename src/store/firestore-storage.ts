import { PersistStorage } from 'zustand/middleware';

const createFirestoreStorage = <S>(): PersistStorage<S> | undefined => {
  const persistStorage: PersistStorage<S> = {
    getItem: async () => {
      return null;
    },
    setItem: async () => {
      return;
    },
    removeItem: async () => {
      return;
    },
  };

  return persistStorage;
};

export default createFirestoreStorage;
