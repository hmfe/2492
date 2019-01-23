import React from "react";

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
    this.setState(() => ({
      text: value,
      suggestions: []
    }));
    this.props.updateSearch(value);
  }

  renderSuggestions() {
    const { suggestions } = this.state;
    if (suggestions.length === 0) {
      return null;
    }
    return (
      <ul>
        {suggestions.map(item => (
          <li key={item} onClick={() => this.suggestionSelected(item)}>
            {item}
          </li>
        ))}
      </ul>
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
      <div>
        <input
          onChange={e => {
            this.onTextChanged(e);
          }}
          placeholder="search"
          type="text"
          value={text}
          onClick={this.removeText.bind(this)}
        />
        {this.renderSuggestions()}
      </div>
    );
  }
}

export default AutoCompleteText;
