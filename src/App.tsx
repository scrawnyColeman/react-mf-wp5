import React, { FunctionComponent } from "react";
import styled from "styled-components";
import Button from "./Button";

const App: FunctionComponent = () => (
  <StyledContainer>
    <StyledH4>A microfrontend built with React</StyledH4>
    <Button />
  </StyledContainer>
);

const StyledContainer = styled.div`
  background-color: skyblue;
  width: 100%;
  height: 250px;

  border-radius: 20px;

  padding: 20px;

  box-sizing: border-box;
`;

const StyledH4 = styled.h4`
  margin: 0 0 1rem 0;
`;

export default App;
