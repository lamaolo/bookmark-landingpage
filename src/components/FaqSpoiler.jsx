import React, { useState, useRef } from "react";
import styled from "styled-components";

import arrow from "../static/images/icon-arrow.svg";

const Wrapper = styled.article`
  border-top: 1px solid #e5e5e5;
  border-bottom: 1px solid #e5e5e5;
  @media screen and (max-width: 769px) {
    margin: 0 25px;
  }
`;

const Title = styled.h3`
  color: #1c2039;
  margin: 0;
  transition: all 0.15s ease-in-out;
  font-weight: 500;
  &.active {
    color: #fa5757;
  }
`;

const Button = styled.button`
  width: 100%;
  height: 100%;
  padding: 30px 0;
  display: flex;
  justify-content: space-between;
  align-items: center;
  background: none;
  outline: none;
  border: none;

  &:hover h3 {
    color: hsl(0, 94%, 66%);
  }

  &:focus {
    outline: none;
  }
`;

const ArrowIcon = styled.img`
  transform: rotate(0);
  transition: all 0.35s ease-in-out;
  &.active {
    transform: rotate(180deg);
    // Filtros usados para cambiar el color de la imagen solo usando CSS.
    // Visitar: https://codepen.io/sosuke/pen/Pjoqqp
    filter: invert(51%) sepia(42%) saturate(4227%) hue-rotate(327deg)
      brightness(97%) contrast(101%);
  }
`;

const Spoiler = styled.div`
  max-width: 550px;
  padding-bottom: 30px;
  & p {
    color: #84838e;
  }
`;

const FaqSpoiler = ({ title, description }) => {
  const [showSpoiler, setShowSpoiler] = useState(false);
  const arrowIcon = useRef(null);
  const titleText = useRef(null);

  const handleClick = () => {
    if (!showSpoiler) {
      setShowSpoiler(true);
      arrowIcon.current.classList.add("active");
      titleText.current.classList.add("active");
    } else {
      setShowSpoiler(false);
      arrowIcon.current.classList.remove("active");
      titleText.current.classList.remove("active");
    }
  };

  return (
    <Wrapper>
      <div className="d-flex justify-content-between align-items-center">
        <Button onClick={handleClick}>
          <Title ref={titleText}>{title || "Titulo por defecto"}</Title>
          <ArrowIcon ref={arrowIcon} src={arrow} alt="Open/Close icon" />
        </Button>
      </div>
      {showSpoiler && (
        <Spoiler>
          <p className="parrafo mb-0">
            {/* Si no le paso la descripción, por defecto pone un Lorem Ipsum */}
            {description
              ? description
              : "Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestias id necessitatibus accusamus itaque nulla accusantium dicta doloribus, optio nam culpa quam possimus qui tempora, hic eaque nostrum tenetur vel aliquam."}
          </p>
        </Spoiler>
      )}
    </Wrapper>
  );
};

export default FaqSpoiler;
