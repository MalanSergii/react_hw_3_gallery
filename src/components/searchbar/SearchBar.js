import { Component } from 'react';

class SearchBar extends Component {
  state = {
    query: '',
  };

  onInputChange = e => {
    this.setState({
      [e.target.name]: e.target.value,
    });
  };

  onFormSubmit = async e => {
    e.preventDefault();
    this.props.getDataFromForm(this.state.query, 1);
  };

  render() {
    return (
      <form className="SearchForm" onSubmit={this.onFormSubmit}>
        <button type="submit" className="SearchForm-button">
          <span className="Button-label">Search</span>
        </button>

        <input
          className="SearchForm-input"
          type="text"
          autoComplete="off"
          autoFocus
          placeholder="Search images and photos"
          name="query"
          value={this.state.query}
          onChange={this.onInputChange}
        />
      </form>
    );
  }
}

export default SearchBar;
