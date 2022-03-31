import React from "react";
import styled from "styled-components";

export default function WorkerCard(props) {
  return (
    <CardContainer>
      <div>
        <p>{props.fullName}</p>
        <p>{props.workCategory}</p>
      </div>
      <div className="recentWork-btn">
        <button>Recent Work</button>
      </div>

      <div className="viewProfile-btn">
        <button id="viewProfile">View Profile</button>
      </div>
    </CardContainer>
  );
}

const CardContainer = styled.article`
  flex: 1 1 10em;
  padding: 1.5em 1em;
  display: flex;
  flex-direction: column;
  row-gap: 2em;
  border-radius: 5px;
  max-width: 15vw;
  height: 35vh;
  background-color: #cddaf4;

  p {
    font-size: 1.5rem;
    &:last-of-type {
      font-size: 1.25rem;
    }
  }
  .recentWork-btn,
  .viewProfile-btn {
    flex: 1 1 40%;
    display: flex;
    justify-content: center;
    align-items: center;
  }

  .recentWork-btn {
    background: none;
    border: none;
    font-size: 1.2rem;
    text-decoration: underline;
  }
  .viewProfile-btn {
    width: 100%;
    flex-basis: 15%;

    color: white;
    background-color: #1ec1cb;
  }

  button {
    border: none;
    background-color: transparent;
    cursor: pointer;
  }

  #viewProfile {
    color: white;
  }
`;