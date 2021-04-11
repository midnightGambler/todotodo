import React, { useCallback } from "react";
import { useMutation, useQuery } from "@apollo/client";
import { useDispatch, useSelector } from "react-redux";

import Todo from "../Todo";

import {
  getTodos,
  deleteTodo as deleteTodoAction,
} from "../../store/actions/todos";

import { TODOS } from "../../gql/queries";
import { DELETE_TODO } from "../../gql/mutations";

import {
  todosListSelector,
  todosPageSelector,
} from "../../store/selectors/todos";

import { TodosContainerStyled } from "./styles";

const TodoList = () => {
  const dispatch = useDispatch();
  const todos = useSelector(todosListSelector);
  const currentPage = useSelector(todosPageSelector);

  const { loading, error } = useQuery(TODOS, {
    onCompleted: ({ todos, todosConnection }) => {
      const payload = { list: todos, count: todosConnection.aggregate.count };
      dispatch(getTodos(payload));
    },
    variables: {
      skip: currentPage * 2,
    },
    partialRefetch: true,
  });

  const [deleteTodo] = useMutation(DELETE_TODO, {
    onCompleted: ({ deleteTodo }) => dispatch(deleteTodoAction(deleteTodo.id)),
  });

  const handleDelete = useCallback((e) => {
    deleteTodo({ variables: { where: { id: e.target.dataset.id } } });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error :(</p>;

  if (todos)
    return (
      <TodosContainerStyled>
        {todos.map((todo) => (
          <Todo key={todo.id} onDelete={handleDelete} {...todo} />
        ))}
      </TodosContainerStyled>
    );
};

export default TodoList;
