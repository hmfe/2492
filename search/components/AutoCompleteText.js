import React from "react";
import styled from "styled-components";

const InputWrapper = styled.div`
  margin: 0 auto;
  width: 50%;
  font-family: Arial, Helvetica, sans-serif;
  font-weight: bold;
  font-size: 3vw;
  @media (max-width: 950px) {
    width: 70%;
  }
`;

const SearchInput = styled.input`
  width: 100%;
  background-color: #aaa;
  border: 1px solid #888;
  font-size: 1vw;
`;

const SuggestionList = styled.ul`
  width: 100%;
  list-style-type: none;
  padding: 0;
`;

const SuggenstionItem = styled.li`
  width: 100%;
  border: 1px solid #eee;
  text-align: left;
  cursor: pointer;
  margin: 1% auto;
  font-size: 1vw;
`;

class AutoCompleteText extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      suggestions: [],
      text: ""
    };
  }

  onTextChanged(e) {
    const { items } = this.props;
    const value = e.target.value;
    let suggestions = [];
    if (value.length > 0) {
      const regex = new RegExp(`^${value}`, "i");
      suggestions = items.sort().filter(v => regex.test(v));
    }
    this.setState(() => ({ suggestions: suggestions, text: value }));
  }

  suggestionSelected(value) {
    const newValue = value;
    this.setState(() => ({
      text: newValue,
      suggestions: []
    }));
    this.props.updateSearch(newValue);
  }

  renderSuggestions() {
    const { suggestions } = this.state;
    if (suggestions.length === 0) {
      return null;
    }
    return (
      <SuggestionList>
        {suggestions.map(item => (
          <SuggenstionItem
            key={item}
            onClick={() => this.suggestionSelected(item)}
          >
            {item}
          </SuggenstionItem>
        ))}
      </SuggestionList>
    );
  }

  removeText() {
    this.setState(() => ({
      text: ""
    }));
  }

  render() {
    const { text } = this.state;
    return (
      <InputWrapper>
        <form
          onSubmit={e => {
            this.selectText.bind(e);
          }}
        >
          Search for a country:
          <SearchInput
            onChange={e => {
              this.onTextChanged(e);
            }}
            ref={input => (this.newValue = input)}
            placeholder="search"
            type="text"
            value={text}
            onClick={this.removeText.bind(this)}
          />
          {this.renderSuggestions()}
        </form>
      </InputWrapper>
    );
  }
}

export default AutoCompleteText;
