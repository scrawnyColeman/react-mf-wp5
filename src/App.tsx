import React, { FunctionComponent, useRef } from "react";
import styled from "styled-components";
import Button from "./Button";

// import vanillaMFE from "vanilla-mfe/Component";
// import { useLoadMFE } from "./hooks/useLoadMFE";

const App: FunctionComponent = () => {
  // const vanillaRef = useRef<HTMLDivElement>(null);
  // useLoadMFE(vanillaMFE, vanillaRef);

  return (
    <>
      <StyledContainer>
        <StyledH4>A microfrontend built with React</StyledH4>
        <Button />
      </StyledContainer>
      {/* <div ref={vanillaRef} /> */}
    </>
  );
};

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
