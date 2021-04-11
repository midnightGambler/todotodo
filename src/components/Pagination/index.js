import React, { useCallback } from "react";
import { useDispatch, useSelector } from "react-redux";

import Button from "../UI/Button";
import TodoForm from "../TodoForm";

import {
  todosCountSelector,
  todosPageSelector,
} from "../../store/selectors/todos";

import arrowLeft from "../../icons/left-arrow.svg";
import arrowRight from "../../icons/right-arrow.svg";

import { FlexContainerStyled, IconStyled } from "./styles";
import {
  nextPage as nextPageAction,
  prevPage as prevPageAction,
} from "../../store/actions/todos";

const Pagination = () => {
  const dispatch = useDispatch();

  const count = useSelector(todosCountSelector);
  const currentPage = useSelector(todosPageSelector);

  const handleNextPage = useCallback(() => {
    dispatch(nextPageAction());
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  const handlePrevPage = useCallback(() => {
    dispatch(prevPageAction());
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <FlexContainerStyled>
      <TodoForm />
      <FlexContainerStyled>
        <Button disabled={currentPage === 0} onClick={handlePrevPage}>
          <IconStyled src={arrowLeft} alt="left icon" />
        </Button>
        <span>Total: {count}</span>
        <Button
          disabled={count - (currentPage + 1) * 2 <= 0}
          onClick={handleNextPage}
        >
          <IconStyled src={arrowRight} alt="right icon" />
        </Button>
      </FlexContainerStyled>
    </FlexContainerStyled>
  );
};

export default Pagination;
