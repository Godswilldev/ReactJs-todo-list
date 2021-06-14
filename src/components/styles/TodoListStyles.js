import styled from "styled-components";

export const TodosList = styled.div`
  background-color: ${({ theme }) =>
    theme === "light" ? "#fafafa" : "#25273c"};
  color: ${({ theme }) => (theme === "light" ? "#484b6a" : "#cacde8")};
  border-radius: 0.5rem;
  width: 50%;
  margin: 0 auto;
  position: relative;
  top: -3.5rem;
  box-shadow: 0.2rem 0.2rem 0.5rem rgba(0, 0, 0, 0.5);
  @media (max-width: 768px) {
    width: 60%;
  }

  @media (max-width: 425px) {
    width: 80%;
  }

  @media (max-width: 375px) {
    width: 90%;
  }
`;

export const Todos = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 2rem;
  &:not(:last-child) {
    border-bottom: 1px solid
      ${({ theme }) => (theme === "light" ? "#d2d3db" : "#4d5066")};
  }
`;

export const Task = styled.p`
  font-size: 2rem;
  margin-left: 2rem;
`;
export const Button = styled.button`
  border: none;
  outline: none;
  background-color: transparent;
  cursor: pointer;
`;
export const Check = styled.div`
  display: flex;
  align-items: center;
`;
