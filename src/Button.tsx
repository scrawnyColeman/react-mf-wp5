import React, { FunctionComponent } from "react";
import styled from "styled-components";

const Button: FunctionComponent = () => {
  const [count, setCount] = React.useState(0);

  return (
    <StyledButton onClick={() => setCount((prevState) => prevState + 1)}>
      Click count: {count}
    </StyledButton>
  );
};

const StyledButton = styled.button`
  padding: 0.5rem;
  border-radius: 0.375rem;
  background-color: #b1ddec;
  color: #034955;
  font-weight: 600;
  cursor: pointer;

  &:hover {
    opacity: 75%;
  }
`;

export default Button;
