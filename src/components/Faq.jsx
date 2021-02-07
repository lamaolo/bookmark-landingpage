import React from "react";
import styled from "styled-components";

import FaqSpoiler from "./FaqSpoiler";

const TextWrapper = styled.div`
  margin: 70px auto 0;
  max-width: 500px;
  text-align: center;
`;

const SpoilersWrapper = styled.div`
  margin: 40px auto;
  max-width: 550px;
`;

const Faq = () => {
  return (
    <section>
      <TextWrapper>
        <div className="Faq-text px-5 px-md-0">
          <h2 className="subtitulo">Frequently Asked Questions</h2>
          <p className="parrafo mt-4">
            Here are some of our FAQs. If you have any other questions you'd
            like answered please feel free to email us.
          </p>
        </div>
      </TextWrapper>
      <SpoilersWrapper>
        <FaqSpoiler
          title="What is Bookmark?"
          description="La descripción también es intercambiable y reutilizable. Por defecto se usa un Lorem Ipsum"
        />
        <FaqSpoiler title="How can I request a new browser?" />
        <FaqSpoiler title="Is there a mobile app?" />
        <FaqSpoiler title="What about other Chromium browsers?" />
      </SpoilersWrapper>
      <div
        style={{ marginBottom: "100px" }}
        className="call-to-action d-flex justify-content-center"
      >
        <button className="btn blue">More Info</button>
      </div>
    </section>
  );
};

export default Faq;
