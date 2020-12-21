import { createStore } from 'redux'
import TodoReducer from './todoReducer'
const store = createStore(TodoReducer);
export default store