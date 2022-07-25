import { toHaveFocus } from "@testing-library/jest-dom/dist/matchers";
import React, { Component } from "react";
import { getMovies, deleteMovie } from "../services/fakeMovieService";
import { Link } from "react-router-dom";
import Pagination from "./common/pagination";
import { paginate } from "../utils/paginate";
import ListGroup from "./common/listGroup";
import { getGenres } from "../services/fakeGenreService";
import MoviesTable from "./moviesTable";
import Search from "./Search";
import _ from "lodash";
import AnimatedPage from "./animations/AnimatedPage";

class Movies extends Component {
  state = {
    movies: getMovies(),
    pageSize: 4,
    currentPage: 1,
    genres: [],
    sortColumn: { path: "title", order: "asc" },
    searchQuery: "",
    selectedGenre: null,
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
    this.setState({ selectedGenre: genre, searchQuery: "", currentPage: 1 });
  };

  handleSort = (sortColumn) => {
    this.setState({ sortColumn });
  };

  handleSearch = (query) => {
    this.setState({ searchQuery: query, selectedGenre: null, currentPage: 1 });
  };
  getPageData() {
    const {
      pageSize,
      currentPage,
      movies: allMovies,
      selectedGenre,
      sortColumn,
      searchQuery,
    } = this.state;

    let filtered = allMovies;

    if (searchQuery)
      filtered = allMovies.filter((m) =>
        m.title.toLowerCase().startsWith(searchQuery.toLowerCase())
      );
    else if (selectedGenre && selectedGenre._id)
      filtered = allMovies.filter(
        (movie) => movie.genre._id === selectedGenre._id
      );

    const sorted = _.orderBy(filtered, [sortColumn.path], [sortColumn.order]);
    const movies = paginate(sorted, currentPage, pageSize);

    return { totalCount: filtered.length, data: movies };
  }

  render() {
    // refactoring
    const { length: count } = this.state.movies;
    const { pageSize, currentPage, sortColumn, searchQuery } = this.state;

    if (count === 0)
      return (
        <AnimatedPage>
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
        </AnimatedPage>
      );
    const { totalCount, data: movies } = this.getPageData();
    return (
      <AnimatedPage>
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
            <Link
              to="/movies/new"
              style={{
                padding: "0.5rem 1.5em",

                borderRadius: 30,
                fontWeight: "bold",
                marginTop: 20,
                marginBottom: 5,
              }}
              className="btn btn-danger btn-sm"
            >
              Add movie
            </Link>
            <Search value={searchQuery} onChange={this.handleSearch} />
            <p
              style={{
                marginTop: 20,
                color: "#495057",
                fontSize: 20,
                fontWeight: 600,
              }}
            >
              Showing {totalCount} movies in the database.
            </p>
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
      </AnimatedPage>
    );
  }
}

export default Movies;
