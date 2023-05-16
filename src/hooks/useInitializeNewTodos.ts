import { v4 as uuidv4 } from 'uuid';

import useStore from '../store';
import { Todo } from '../store/user-slice';

const generateDefaultTodos = (): Todo[] => [
  {
    key: uuidv4(),
    label: 'Default label',
    content: 'Default content',
    done: false,
    createdAt: new Date(),
    updatedAt: new Date(),
  },
];

const useInitializeNewTodos = () => {
  const setTodos = useStore((state) => state.setTodos);

  const initializeNewTodos = () => {
    setTodos(generateDefaultTodos());
  };

  return initializeNewTodos;
};

export default useInitializeNewTodos;
