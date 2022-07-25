import React from "react";
import Joi from "joi-browser";
import Form from "./common/form";
import AnimatedPage from "./animations/AnimatedPage";
import { getGenres } from "../services/fakeGenreService";

import { getMovie, saveMovie } from "../services/fakeMovieService";

class MovieForm extends Form {
  state = {
    data: {
      title: "",
      genreId: "",
      numberInStock: "",
      dailyRentalRate: "",
    },
    genres: [],
    errors: {},
  };

  schema = {
    _id: Joi.string(),
    title: Joi.string().required().label("Title"),
    genreId: Joi.string().required().label("Genre"),
    numberInStock: Joi.number()
      .required()
      .min(0)
      .max(100)
      .label("Number in Stock"),
    dailyRentalRate: Joi.number()
      .required()
      .min(0)
      .max(10)
      .label("Daily Rental Rate"),
  };

  componentDidMount() {
    const genres = getGenres();
    this.setState({ genres });
    const movieId = this.props.match.params.id;

    if (movieId === "new") return;

    const movie = getMovie(movieId);
    if (!movie) return this.props.history.replace("/not-found");
    this.setState({
      data: this.mapMovieToForm(movie),
    });
  }

  mapMovieToForm(movie) {
    return {
      _id: movie._id,
      title: movie.title,
      genreId: movie.genre._id,
      numberInStock: movie.numberInStock,
      dailyRentalRate: movie.dailyRentalRate,
    };
  }

  doSubmit = () => {
    saveMovie(this.state.data);

    this.props.history.push("/movies");
  };
  render() {
    return (
      <AnimatedPage>
        <div>
          <h2 style={{ textAlign: "center", color: "#495057" }}>Movie Form</h2>
          <div>
            <form
              onSubmit={this.handleSubmit}
              className="col"
              style={{ marginTop: 30 }}
            >
              {this.renderInput("title", "Title")}
              {this.renderSelect("genreId", "Genre", this.state.genres)}
              {this.renderInput(
                "numberInStock",
                "Number in Stock",
                "Must be a number"
              )}

              {this.renderInput("dailyRentalRate", "Rate", "Must be a number")}
              <div
                className="col"
                style={{
                  marginTop: 40,
                  display: "flex",
                  justifyContent: "center",
                }}
              >
                {this.renderButton("Save")}
              </div>
            </form>
          </div>
        </div>
      </AnimatedPage>
    );
  }
}

export default MovieForm;
