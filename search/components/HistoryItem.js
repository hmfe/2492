import React from "react";
import styled from "styled-components";

const LatestSearch = styled.li`
  border: 1px solid #555;
  width: 100%;
  background-color: #eee;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  margin: 1% auto;
`;

const SearchedText = styled.p`
  color: #000;
  margin: 1% 2%;
  font-family: Arial, Helvetica, sans-serif;
  font-weight: bold;
  font-size: 1vw;
`;

const DateHolder = styled.p`
  color: #000;
  font-family: Arial, Helvetica, sans-serif;
  font-weight: bold;
  font-size: 1vw;

  margin: auto 2% auto auto;
`;

const DeleteButton = styled.button`
  width: 10%;
  height: 90%;
  cursor: pointer;
  font-size: 1vw;
  font-weight: bold;
  position: relative;
  margin: auto 1%;
  @media (max-width: 950px) {
    margin: auto 5px;
  }
`;

const HistoryItem = props => {
  return (
    <LatestSearch>
      <SearchedText>{props.text} </SearchedText>
      <DateHolder>{props.date}</DateHolder>
      <DeleteButton onClick={props.deleteSearch}>x</DeleteButton>
    </LatestSearch>
  );
};

export default HistoryItem;
