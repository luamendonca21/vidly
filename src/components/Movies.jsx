import { toHaveFocus } from "@testing-library/jest-dom/dist/matchers";
import React, { Component } from "react";
import { getMovies, deleteMovie } from "../services/fakeMovieService";
import Like from "./Like";
class Movies extends Component {
  state = {
    movies: getMovies(),
  };

  handleDelete = (movie) => {
    const movies = this.state.movies.filter((m) => m._id !== movie._id);
    this.setState({ movies: movies });
  };

  handleLike = (movie) => {
    const movies = [...this.state.movies];
    const index = movies.indexOf(movie);
    movies[index] = { ...movie };
    movies[index].liked = !movies[index].liked;
    this.setState({ movies });
  };

  renderMovies() {
    // refactoring
    const { length: count } = this.state.movies;

    return count !== 0 ? (
      <React.Fragment>
        <p style={{ fontSize: 22, fontWeight: "bold" }}>
          Showing {count} movies in the database.
        </p>
        <table className="table table-dark table-hover table-striped">
          <thead>
            <tr>
              <th>Title</th>
              <th>Genre</th>
              <th>Stock</th>
              <th>Rate</th>
              <th></th>
              <th></th>
            </tr>
          </thead>
          <tbody>
            {this.state.movies.map((movie) => (
              <tr key={movie._id}>
                <td>{movie.title}</td>
                <td>{movie.genre.name}</td>
                <td>{movie.numberInStock}</td>
                <td>{movie.dailyRentalRate}</td>
                <td>
                  <Like
                    liked={movie.liked}
                    onClick={() => this.handleLike(movie)}
                  />
                </td>
                <td>
                  <button
                    onClick={() => this.handleDelete(movie)}
                    className="btn btn-outline-warning btn-sm"
                    style={{ fontWeight: "bold" }}
                  >
                    Delete
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </React.Fragment>
    ) : (
      <p style={{ fontSize: 22, fontWeight: "bold" }}>
        There are no movies in the database.
      </p>
    );
  }

  render() {
    return <React.Fragment>{this.renderMovies()}</React.Fragment>;
  }
}

export default Movies;
