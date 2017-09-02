import { createStore } from 'redux';
import todos from './state/reducers/todos'
export default createStore(todos)
