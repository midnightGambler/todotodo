import React from "react";
import GlobalStyles from "./styles";

import TodoList from "../TodoList";
import Pagination from "../Pagination";

const App = () => {
  return (
    <>
      <GlobalStyles />
      <TodoList />
      <Pagination />
    </>
  );
};

export default App;
