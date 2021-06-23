import React, { Component } from "react";
import {
  Form,
  Button,
  FormGroup,
  FormControl,
  ControlLabel,
} from "react-bootstrap";
const axios = require('axios');
class PlaceGrid extends React.Component {
  constructor(props) {
    super(props);
    this.state = { value: "" };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.state = {
      loaded: false,
      query: "war",
      movies: [],
    };
  }

  componentDidMount() {
    console.log("Output", "componentdidmount");
    // const movieAPI =
    //   "https://www.omdbapi.com/?apikey=45f0782a&s=" + this.state.query;
    // console.log(movieAPI);
    // fetch(movieAPI)
    //   .then((res) => res.json())
    //   .then((fetchData) => {
    //     this.setState({
    //       movieAPI: fetchData["Search"],
    //       loaded: true,
    //     });
    //     console.log(this.state.movieAPI);
    //     return fetchData["Search"];
    //   });
  }

  compomentDidUpdate() {
    console.log("compomentDidUpdate");
  }

  MovieCard = (Title, Poster, Year) => {
    return (
        <div className="d-inline-block card">
              <div className="details">
                <h3 >{Title}</h3>
              </div>
              <div className="img">
                <img src={Poster} />
              </div>
              <div className="details">
                <h3 >{Year}</h3>
              </div>
            </div>
    );
  };

  handleChange(event) {
    this.setState({ query: event.target.value });
  }

  handleSubmit(event) {
    console.log("handleSubmit", this.state.query);
    const movieAPI =
      "https://www.omdbapi.com/?apikey=45f0782a&s=" + this.state.query;
    console.log(movieAPI);

    fetch(movieAPI)
      .then((res) => res.json())
      .then((fetchData) => {
        this.setState({
          movieAPI: fetchData["Search"],
          loaded: true,
        });
        console.log(this.state.movieAPI);
        return fetchData["Search"];
      });
    event.preventDefault();
  }

  render() {
    return (
      <div className="Movie-Section">
        <form onSubmit={this.handleSubmit}>
          <label>
            Keyword:
            <input
              type="text"
              value={this.state.query}
              onChange={this.handleChange}
            />
          </label>
          {/* <input type="submit" value="Submit" /> */}
        </form>

        <h1>Search Result of {this.state.query}</h1>

        <div className="Moview-Row">
        {this.state.loaded ? (
          this.state.movieAPI.map(({ Title, Year, Poster }) => {
            return this.MovieCard(Title, Poster, Year);
          })
        ) : (
          <h1>Data is not loaded</h1>
        )}

        </div>
      </div>
    );
  }
}

export default PlaceGrid;
