import React from "react";
import styled from "styled-components";

const Result = styled.p`
  margin-left: 50px;
  width: 50%;
  border-bottom: 1px solid #444;
  font-size: 18px;
  margin: 2% auto;
  color: rgba(0, 0, 0, 0.5);
  font-family: Arial, Helvetica, sans-serif;
  font-weight: bold;
  @media (max-width: 950px) {
    width: 70%;
  }
`;

const OutputResult = (props: { text: string }) => {
  return <Result>Latest search: {props.text}</Result>;
};

export default OutputResult;
