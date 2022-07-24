import { toHaveFocus } from "@testing-library/jest-dom/dist/matchers";
import React, { Component } from "react";
import { getMovies, deleteMovie } from "../services/fakeMovieService";
import { Link } from "react-router-dom";
import Pagination from "./common/pagination";
import { paginate } from "../utils/paginate";
import ListGroup from "./common/listGroup";
import { getGenres } from "../services/fakeGenreService";
import MoviesTable from "./moviesTable";
import _ from "lodash";

class Movies extends Component {
  state = {
    movies: getMovies(),
    pageSize: 4,
    currentPage: 1,
    genres: [],
    sortColumn: { path: "title", order: "asc" },
  };

  componentDidMount() {
    const genres = [{ _id: "", name: "All Genres" }, ...getGenres()];
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

  handleSort = (sortColumn) => {
    this.setState({ sortColumn });
  };

  getPageData() {
    const {
      pageSize,
      currentPage,
      movies: allMovies,
      selectedGenre,
      sortColumn,
    } = this.state;

    const filtered =
      selectedGenre && selectedGenre._id
        ? allMovies.filter((movie) => movie.genre._id === selectedGenre._id)
        : allMovies;

    const sorted = _.orderBy(filtered, [sortColumn.path], [sortColumn.order]);
    const movies = paginate(sorted, currentPage, pageSize);

    return { totalCount: filtered.length, data: movies };
  }

  render() {
    // refactoring
    const { length: count } = this.state.movies;
    const { pageSize, currentPage, sortColumn } = this.state;

    if (count === 0)
      return (
        <p
          style={{
            color: "#495057",
            textAlign: "center",
            fontSize: 22,
            fontWeight: 600,
          }}
        >
          {" "}
          There are no movies in the database.{" "}
        </p>
      );
    const { totalCount, data: movies } = this.getPageData();
    return (
      <div className="row align-items-center">
        <div className="col-12">
          <ListGroup
            selectedItem={this.state.selectedGenre}
            items={this.state.genres}
            onItemSelect={this.handleGenreSelect}
            itemsCount={totalCount}
          />
        </div>

        <div style={{ marginTop: 30, overflow: "hidden" }} className="col">
          <p
            style={{
              color: "#495057",
              textAlign: "center",
              fontSize: 22,
              fontWeight: 600,
            }}
          >
            Showing {totalCount} movies in the database.
          </p>
          <Link
            to="/movies/new"
            style={{
              padding: "0.5rem 1.5em",

              borderRadius: 30,
              fontWeight: "bold",
              marginBottom: 5,
              marginTop: 20,
            }}
            className="btn btn-danger btn-sm"
          >
            Add movie
          </Link>
          <MoviesTable
            movies={movies}
            sortColumn={sortColumn}
            onDelete={this.handleDelete}
            onLike={this.handleLike}
            onSort={this.handleSort}
          />
          <Pagination
            itemsCount={totalCount}
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
