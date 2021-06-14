import styled from "styled-components";

export const Input = styled.input`
  border: none;
  background-color: ${({ theme }) =>
    theme === "light" ? "#fafafa" : "#25273c"};
  color: ${({ theme }) => (theme === "light" ? "#484b6a" : "#cacde8")};
  border-radius: 0.5rem;
  padding: 1.5rem 0;
  padding-left: 2rem;
  font-size: 2rem;
  font-weight: 540;
  outline: none;
  width: 50%;
  box-shadow: 0.2rem 0.2rem 0.5rem rgba(0, 0, 0, 0.5);
  @media (max-width: 768px) {
    width: 60%;
  }

  @media (max-width: 450px) {
    width: 80%;
  }

  @media (max-width: 375px) {
    width: 90%;
  }
`;

export const Form = styled.form`
  text-align: center;
  position: relative;
  top: -8rem;
`;
