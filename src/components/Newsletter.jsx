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
`;

const InputContainer = styled.div`
  position: relative;
  margin-right: 20px;
  z-index: 1000;
  & input {
    height: 100%;
    margin-right: 20px;
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
    background: hsl(0, 94%, 66%);
    left: -3px;
    top: -3px;
    width: 242px;
    border-radius: 5px;
    bottom: -25px;
    right: -2px;
    display: flex;
    align-items: flex-end;
    z-index: -10;
    color: white;
    font-weight: 600;
    font-size: 1.3rem;
    padding: 0 0 2px 8px;
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
      <Container>
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
