import React from "react";
import styled from "styled-components";

const LatestSearch = styled.li`
  border: 1px solid #555;
  width: 100%;
  background-color: #eee;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
`;

const SearchedText = styled.p`
  color: #000;
`;

const DateHolder = styled.div`
  color: #000;
`;

const HistoryItem = props => {
  return (
    <LatestSearch>
      <SearchedText>{props.text} </SearchedText>
      <DateHolder>{props.date}</DateHolder>
      <button onClick={props.deleteSearch} />
    </LatestSearch>
  );
};

export default HistoryItem;
