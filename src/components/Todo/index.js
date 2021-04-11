import React, { memo } from "react";
import Button from "../UI/Button";
import { TodoContainerStyled } from "./styles";

const Todo = ({ id, description, onDelete }) => {
  return (
    <TodoContainerStyled>
      <div>
        <div>ID: {id}</div>
        <div>Description: {description}</div>
      </div>
      <Button data-id={id} onClick={onDelete}>
        Delete
      </Button>
    </TodoContainerStyled>
  );
};

export default memo(Todo);
