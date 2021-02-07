import React, { useState, useRef } from "react";
import styled from "styled-components";

const Wrapper = styled.section`
  padding: 70px 0;
  background: #5266df;
  display: flex;
  align-items: center;
`;

const Container = styled.div`
  max-width: 600px;
  margin: 0 auto;
  text-align: center;

  & p {
    margin: 0;
    color: white;
    text-transform: uppercase;
    letter-spacing: 7px;
    font-weight: 600;
    font-size: 1.4rem;
  }

  & h2 {
    margin: 30px 0;
    color: white;
    font-weight: 600;
    font-size: 2.6rem;
  }
`;

const Form = styled.form`
  display: flex;
  justify-content: center;
  & button {
    height: 100%;
    &:hover {
      background: white !important;
    }
  }
  @media screen and (max-width: 769px) {
    & {
      flex-direction: column;
      align-items: center;
    }

    & button {
      width: 100%;
    }
  }
`;

const InputContainer = styled.div`
  margin-right: 20px;
  z-index: 1000;
  position: relative;
  max-width: 256px;
  & input {
    height: 100%;
    width: 95%;
    margin: 0 auto;
    border: none;
    font-size: 1.4rem;
    outline: none;
    padding: 8px 20px;
    border-radius: 5px;
    font-weight: 600;
    z-index: 10000;
    &::placeholder {
      font-weight: 400;
      color: #c2c2c2;
    }
  }

  & .error-message {
    position: absolute;
    padding: 0 0 2px 8px;
    width: 100%;
    top: -5px;
    bottom: -25px;
    display: flex;
    align-items: flex-end;
    border-radius: 5px;
    background: hsl(0, 94%, 66%);
    color: white;
    font-weight: 600;
    font-size: 1.3rem;
    z-index: -10;
  }

  @media screen and (max-width: 769px) {
    & {
      max-width: 100%;
      width: 100%;
      margin: 0 0 40px 0;
    }

    & input {
      width: 98%;
    }
  }
`;

const Newsletter = () => {
  const [isError, setIsError] = useState(false);
  const emailInput = useRef(null);

  const handleSubmit = (e) => {
    e.preventDefault();
    const isValid = validateEmail(emailInput.current.value);

    if (!isValid) {
      setIsError(true);
    } else {
      setIsError(false);
      alert("Verificación de email pasada.");
    }
  };

  function validateEmail(email) {
    const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(String(email).toLowerCase());
  }

  return (
    <Wrapper>
      <Container className="px-5 px-md-0">
        <p>35.000+ already joined</p>
        <h2>Stay up-to-date with what we're doing</h2>
        <Form onSubmit={handleSubmit}>
          <InputContainer>
            <input
              placeholder="Enter your email address"
              name="email"
              tpye="text"
              ref={emailInput}
            />
            {isError ? (
              <div className="error-message">
                <i>Please, enter a valid email.</i>
              </div>
            ) : null}
          </InputContainer>
          <button type="submit" className="btn red">
            Contact Us
          </button>
        </Form>
      </Container>
    </Wrapper>
  );
};

export default Newsletter;
