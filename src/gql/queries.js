import { gql } from "@apollo/client";

export const TODOS = gql`
  query GetTodos($skip: Int!) {
    todosConnection {
      aggregate {
        count
      }
    }
    todos(first: 2, skip: $skip) {
      id
      description
    }
  }
`;
