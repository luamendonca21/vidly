import { toHaveFocus } from "@testing-library/jest-dom/dist/matchers";
import React, { Component } from "react";
import { getMovies, deleteMovie } from "../services/fakeMovieService";
import Pagination from "./common/pagination";
import { paginate } from "../utils/paginate";
import ListGroup from "./common/listGroup";
import { getGenres } from "../services/fakeGenreService";
import MoviesTable from "./moviesTable";

class Movies extends Component {
  state = {
    movies: getMovies(),
    pageSize: 4,
    currentPage: 1,
    genres: [],
  };

  componentDidMount() {
    const genres = [{ name: "All Genres" }, ...getGenres()];
    this.setState({ movies: getMovies(), genres });
  }

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

  handlePageChange = (page) => {
    this.setState({ currentPage: page });
  };

  handleGenreSelect = (genre) => {
    this.setState({ selectedGenre: genre, currentPage: 1 });
  };
  render() {
    // refactoring
    const { length: count } = this.state.movies;
    const {
      pageSize,
      currentPage,
      movies: allMovies,
      selectedGenre,
    } = this.state;

    const filtered =
      selectedGenre && selectedGenre._id
        ? allMovies.filter((movie) => movie.genre._id === selectedGenre._id)
        : allMovies;

    if (count === 0)
      return (
        <p style={{ textAlign: "center", fontSize: 22, fontWeight: "bold" }}>
          {" "}
          There are no movies in the database.{" "}
        </p>
      );
    const movies = paginate(filtered, currentPage, pageSize);
    return (
      <div className="col">
        <div className="col-lg-3 col-md-3 col-sm-3">
          <ListGroup
            selectedItem={this.state.selectedGenre}
            items={this.state.genres}
            onItemSelect={this.handleGenreSelect}
            itemsCount={filtered.length}
          />
        </div>

        <div className="col">
          <p style={{ textAlign: "center", fontSize: 22, fontWeight: "bold" }}>
            Showing {filtered.length} movies in the database.
          </p>
          <MoviesTable
            movies={this.state.movies}
            onDelete={this.handleDelete}
            onLike={this.handleLike}
          />
          <Pagination
            itemsCount={filtered.length}
            pageSize={pageSize}
            currentPage={currentPage}
            onPageChange={this.handlePageChange}
          />
        </div>
      </div>
    );
  }
}

export default Movies;
