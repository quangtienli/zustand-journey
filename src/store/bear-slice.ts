import { StoreSlice } from '.';
import { Bear } from '../types';

export interface BearSlice {
  bears: Bear[];
  insert: (bear: Bear) => void;
  increaseAge: (name: Bear['name']) => void;
  decreaseAge: (name: Bear['name']) => void;
}

export const createBearSlice: StoreSlice<BearSlice> = (set, get) => ({
  bears: [
    {
      name: 'Koala',
      age: 2,
      dateOfBirth: new Date(2022, 8, 17),
      origin: 'China',
    },
  ],
  insert: (bear: Bear) => set((state) => ({ bears: [...state.bears, bear] })),
  increaseAge: (name: Bear['name']) =>
    set((state) => {
      return {
        bears: state.bears.map((bear) =>
          bear.name !== name ? bear : { ...bear, age: bear.age + 1 }
        ),
      };
    }),
  decreaseAge: (name: Bear['name']) =>
    set((state) => ({
      bears: state.bears.map((bear) =>
        bear.name !== name ? bear : { ...bear, age: bear.age - 1 }
      ),
    })),
});
