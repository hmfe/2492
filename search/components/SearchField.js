import React from "react";
import styled from "styled-components";
import OutputResult from "./OutputResult";
import HistoryItem from "./HistoryItem";
import AutoCompleteText from "./AutoCompleteText";

const Wrapper = styled.div`
  width: 70%;
  height: 100vh;
  overflow: scroll;
  display: flex;
  flex-direction: column;
  background-color: #ddd;
  margin: 0 auto;
  justify-content: center;
  @media (max-width: 950px) {
    width: 100%;
  }
`;
const ListWrapper = styled.div`
  width: 50%;
  display: flex;
  flex-direction: column;
  margin: 1% auto;
  @media (max-width: 950px) {
    min-width: 70%;
  }
`;
const List = styled.ul`
  width: 100%;
  list-style-type: none;
  padding: 0;
  border: {this.state.seatchList ? 1px solid #ccc || none;
`;

const HistoryTitle = styled.div`
  font-size: 18px;
  color: rgba(0, 0, 0, 0.8);
  margin: 10px auto;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  font-family: Arial, Helvetica, sans-serif;
  font-weight: bold;
  width: 50%;
  @media (max-width: 950px) {
    width: 70%;
  }
`;

class SearchField extends React.Component {
  constructor() {
    super();
    this.state = {
      searchText: "",
      searchList: [],
      countries: [],
      isLoaded: false
    };
  }

  componentDidMount() {
    fetch("https://restcountries.eu/rest/v2/all")
      .then(res => res.json())
      .then(json => {
        this.setState({
          isLoaded: true,
          countries: json
        });
      });
  }

  addSearch(value) {
    const { searchList } = this.state;
    const newSearch = value;
    const newDate = new Date().toLocaleString();
    const newId = this.state.searchList.length + 1;

    this.setState(() => ({
      searchList: [
        ...this.state.searchList,
        { id: newId, text: newSearch, date: newDate }
      ],
      searchText: newSearch
    }));
  }

  removeHistory() {
    this.setState(() => ({
      searchList: []
    }));
  }

  removeSearch(index, e) {
    const searches = Object.assign([], this.state.searchList);
    searches.splice(index, 1);
    this.setState({
      searchList: searches
    });
  }

  render() {
    const { searchList, searchText, countries } = this.state;
    const countryNames = countries.map(c => c.name);
    return (
      <Wrapper>
        <AutoCompleteText
          items={countryNames}
          updateSearch={this.addSearch.bind(this)}
        />
        <OutputResult text={searchText} />
        <HistoryTitle>
          Search history
          <button onClick={this.removeHistory.bind(this)}>Delete</button>
        </HistoryTitle>
        <ListWrapper>
          <List>
            {this.state.searchList.map((searched, index) => {
              return (
                <HistoryItem
                  key={searched.id}
                  text={searched.text}
                  date={searched.date}
                  deleteSearch={this.removeSearch.bind(this, index)}
                />
              );
            })}
          </List>
        </ListWrapper>
      </Wrapper>
    );
  }
}

export default SearchField;
