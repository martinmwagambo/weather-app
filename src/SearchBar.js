import React, { Component } from "react";
import { Search } from "react-feather"; // Import the Search icon from Feather Icons

class SearchBar extends Component {
  constructor(props) {
    super(props);
    this.state = {
      city: "",
    };
  }

  handleSubmit = (e) => {
    e.preventDefault();
    this.props.onSearch(this.state.city);
  };

  render() {
    return (
      <form
        onSubmit={this.handleSubmit}
        className="flex items-center mb-4"
      >
        <div className="flex items-center">
          <Search className="text-black mr-2" size={20} />
          <input
            type="text"
            placeholder="Enter city name"
            className="flex-1 appearance-none border rounded-l py-2 px-4 leading-tight focus:outline-none focus:shadow-outline"
            value={this.state.city}
            onChange={(e) => this.setState({ city: e.target.value })}
          />
        </div>
        <button
          type="submit"
          className="bg-blue-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded-r focus:outline-none focus:shadow-outline"
        >
          Search
        </button>
      </form>
    );
  }
}

export default SearchBar;
