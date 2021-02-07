import React from "react";
import styled from "styled-components";

import BrowserCard from "./BrowserCard";

const Wrapper = styled.section`
  margin-top: 130px;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
`;

const TextContainer = styled.div`
  max-width: 600px;
`;

const BrowserList = styled.div`
  display: flex;
  @media screen and (max-width: 769px) {
    flex-direction: column;
    & > article {
      margin-top: 10px !important;
    }
  }
`;

const Extension = () => {
  return (
    <Wrapper>
      <TextContainer>
        <h2 className="subtitulo text-center px-4 px-md-0">
          Download the extension
        </h2>
        <p className="parrafo text-center mt-4 px-4 px-md-0">
          We've got more browsers in the pipeline. Please do let us know if
          you've got a favourite you'd like us to prioritize.
        </p>
      </TextContainer>
      <BrowserList className="mt-5">
        <BrowserCard mt="0" browserName="Chrome" version="62" />
        <BrowserCard mt="30" browserName="Firefox" version="55" />
        <BrowserCard mt="70" browserName="Opera" version="46" />
      </BrowserList>
    </Wrapper>
  );
};

export default Extension;
