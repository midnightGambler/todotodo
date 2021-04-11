import { gql } from "@apollo/client";

export const ADD_TODO = gql`
  mutation AddTodo($data: TodoCreateInput!) {
    createTodo(data: $data) {
      id
      description
    }
  }
`;

export const DELETE_TODO = gql`
  mutation DeleteTodo($where: TodoWhereUniqueInput!) {
    deleteTodo(where: $where) {
      id
    }
  }
`;
