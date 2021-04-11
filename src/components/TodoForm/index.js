import React, { useState } from "react";
import { useMutation } from "@apollo/client";
import { useDispatch } from "react-redux";

import Button from "../UI/Button";
import Input from "../UI/Input";

import { addTodo as addTodoAction } from "../../store/actions/todos";
import { ADD_TODO } from "../../gql/mutations";

const TodoForm = () => {
  const [description, setDescription] = useState("");
  const [addTodo] = useMutation(ADD_TODO, {
    onCompleted: () => dispatch(addTodoAction()),
  });

  const dispatch = useDispatch();

  const handleSubmit = (e) => {
    e.preventDefault();
    addTodo({ variables: { data: { description } } });
    setDescription("");
  };

  const handleChange = (e) => setDescription(e.target.value);

  return (
    <form onSubmit={handleSubmit}>
      <Input value={description} onChange={handleChange} />
      <Button disabled={!description} type="submit">
        Add Todo
      </Button>
    </form>
  );
};

export default TodoForm;
