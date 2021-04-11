import styled from "styled-components";

export const TodoContainerStyled = styled.div`
  display: flex;
  align-item: center;
  justify-content: space-between;
  padding: 0.5rem 1rem;
  background-color: #fff;
  box-shadow: 0px 3px 6px rgb(33 38 44 / 11%), 0px 3px 6px rgb(33 38 44 / 8%);
  border-radius: 20px;
  &:not(:last-child) {
    margin-bottom: 1rem;
  }
`;
