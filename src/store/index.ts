import { create } from 'zustand';

export interface Bear {
  name: string;
  age: number;
  dateOfBirth: Date;
  origin: string;
}

interface BearState {
  bears: Bear[];
}

interface BearAction {
  insert: (bear: Bear) => void;
  increaseAge: (name: Bear['name']) => void;
  decreaseAge: (name: Bear['name']) => void;
}

const useStore = create<BearState & BearAction>((set) => ({
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
}));

export default useStore;
