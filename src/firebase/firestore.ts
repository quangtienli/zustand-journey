import {
  collection,
  CollectionReference,
  DocumentData,
  getFirestore,
} from 'firebase/firestore';
import { COLLECTIONS } from '../constants/firestore';
import { Todo } from '../store/user-slice';
import app from './app';

const firestore = getFirestore(app);

const createCollection = <T = DocumentData>(
  name: string
): CollectionReference<T> => {
  return collection(firestore, name) as CollectionReference<T>;
};

const todosCollection = createCollection<Todo>(COLLECTIONS.todos);

export { todosCollection };

export default firestore;
