import {
  ADD_TODO_TYPE,
  GET_TODOS_TYPE,
  DELETE_TODO_TYPE,
  NEXT_PAGE_TYPE,
  PREV_PAGE_TYPE,
} from "../actionTypes/todos";

export const addTodo = () => ({ type: ADD_TODO_TYPE });
export const getTodos = (payload) => ({ type: GET_TODOS_TYPE, payload });
export const deleteTodo = (payload) => ({ type: DELETE_TODO_TYPE, payload });
export const nextPage = () => ({ type: NEXT_PAGE_TYPE });
export const prevPage = () => ({ type: PREV_PAGE_TYPE });
