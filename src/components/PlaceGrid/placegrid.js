import React, { Component } from "react";
class PlaceGrid extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      loaded: false,
      query: "war",
      movies: [],
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  componentDidMount() {
    const movieAPI =
      "https://www.omdbapi.com/?apikey=45f0782a&s=" + this.state.query;
    fetch(movieAPI)
      .then((res) => res.json())
      .then((fetchData) => {
        this.setState({
          movies: fetchData["Search"],
          loaded: true,
        });
        return fetchData["Search"];
      });
  }

  handleChange(event) {
    this.setState({ query: event.target.value });
  }

  handleSubmit(event) {
    const movieAPI =
      "https://www.omdbapi.com/?apikey=45f0782a&s=" + this.state.query;

    fetch(movieAPI)
      .then((res) => res.json())
      .then((fetchData) => {
        this.setState({
          movies: fetchData["Search"],
          loaded: true,
        });
        return fetchData["Search"];
      });
    event.preventDefault();
  }

  searchComponent = () => {
    return (
      <form onSubmit={this.handleSubmit}>
        <label>
          <input
            type="text"
            value={this.state.query}
            onChange={this.handleChange}
          />
          <input type="Submit" />
        </label>
      </form>
    );
  };

  moviesCompoment = () =>{
    return (
      this.state.movies.map(({ Title, Year, Poster }, index) => {
        return this.MovieCard(Title, Poster, Year);
      })
    )
  }

  MovieCard = (Title, Poster, Year) => {
    return (
      <div className="card">
        <div className="title" >
          <h3>{Title}</h3>
        </div>
        <div className="img">
          <img src={Poster} />
        </div>
      </div>
    );
  };

  render() {
    return (
      <div className="Movie-Section">
        {/* search section */}
        <h1>Seach Movies with Keywords</h1>
        {this.searchComponent()}

        {/* Display movie section */}
        <div className="Moview-Row">
          {/* handle case of failure use cases */}
          {this.state.loaded & (this.state.movies != null) ? (
            this.moviesCompoment()
          ) : (
            <h4>No Data Found. Try Again with different KEYWORD</h4>
          )}
        </div>
      </div>
    );
  }
}

export default PlaceGrid;
