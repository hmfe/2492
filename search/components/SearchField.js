import React from "react";
import styled from "styled-components";
import OutputResult from "./OutputResult";
import HistoryItem from "./HistoryItem";
import AutoCompleteText from "./AutoCompleteText";
import countries from "./countries";

const Field = styled.input`
  text-align: left;
  color: rgba(0, 0, 0, 1);
`;

const Wrapper = styled.form`
  width: 100%;
  display: flex;
  flex-direction: row;
`;

const List = styled.ul`
  width: 300px;
  display: flex;
  flex-direction: column;
  border: 2px solid #000;
`;

class SearchField extends React.Component {
  constructor() {
    super();
    this.state = {
      searchText: "search",
      searchList: []
    };
  }

  addSearch(value) {
    //e.preventDefault();
    const { searchList } = this.state.searchList;
    const newSearch = value; //ta värdet från AutoCompleteText
    const newDate = new Date().toLocaleString();
    const newId = this.state.searchList.length + 1;

    this.setState({
      searchList: [
        ...this.state.searchList,
        { id: newId, text: newSearch, date: newDate }
      ],
      searchText: newSearch
    });
  }

  removeSearch(index, e) {
    const searches = Object.assign([], this.state.searchList);
    searches.splice(index, 1);
    this.setState({ searchList: searches });
  }

  render() {
    const { searchList, searchText } = this.state;
    return (
      <Wrapper
        ref={input => (this.addForm = input)}
        onSubmit={value => {
          this.addSearch(value);
        }}
      >
        <AutoCompleteText
          items={countries}
          ref={input => {
            this.newSearch = input;
          }}
          updateSearch={this.addSearch.bind(this)}
        />
        <button type="submit" />
        <OutputResult text={searchText} />
        <ul>
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
        </ul>
      </Wrapper>
    );
  }
}

export default SearchField;
