import React from "react";
import styled from "styled-components";

const Result = styled.p`
  margin-left: 50px;
  min-width: 100px;
  border-bottom: 1px solid #444;
  font-size: 18px;
`;

const OutputResult = props => {
  return <Result>{props.text}</Result>;
};

export default OutputResult;
