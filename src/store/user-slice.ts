import { StoreSlice } from '.';

export type Todo = {
  key: string;
  label: string;
  content: string;
  done: boolean;
  createdAt?: Date;
  updatedAt?: Date;
};

export interface UserSlice {
  todos: Todo[];
  setTodos: (todos: Todo[]) => void;
  addTodo: (todo: Todo) => void;
  removeTodo: (key: string) => void;
  completeTodo: (key: string) => void;
}

const createUserSlice: StoreSlice<UserSlice> = (set) => ({
  todos: [],
  setTodos: (todos: Todo[]) => set(() => ({ todos })),
  addTodo: (todo: Todo) => set((state) => ({ todos: [...state.todos, todo] })),
  removeTodo: (key: string) =>
    set((state) => ({ todos: state.todos.filter((todo) => todo.key !== key) })),
  completeTodo: (key: string) =>
    set((state) => ({
      todos: state.todos.filter((todo) =>
        todo.key !== key ? { ...todo, done: true } : todo
      ),
    })),
});

export default createUserSlice;
