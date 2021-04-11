import {
  ADD_TODO_TYPE,
  DELETE_TODO_TYPE,
  GET_TODOS_TYPE,
  NEXT_PAGE_TYPE,
  PREV_PAGE_TYPE,
} from "../actionTypes/todos";

const initialState = {
  list: [],
  count: 0,
  currentPage: 0,
};

const todosReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_TODO_TYPE: {
      const newCount = state.count + 1;

      return { ...state, count: newCount };
    }

    case DELETE_TODO_TYPE: {
      const { payload: id } = action;

      const newList = state.list.filter((todo) => todo.id !== id);
      const newCount = state.count - 1;

      return { ...state, list: newList, count: newCount };
    }

    case GET_TODOS_TYPE: {
      const { payload } = action;

      return { ...state, ...payload };
    }

    case NEXT_PAGE_TYPE: {
      return { ...state, currentPage: state.currentPage + 1 };
    }

    case PREV_PAGE_TYPE: {
      return { ...state, currentPage: state.currentPage - 1 };
    }

    default:
      return state;
  }
};

export default todosReducer;
