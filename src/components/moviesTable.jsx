import React from "react";
import Like from "./common/Like";

const MoviesTable = (props) => {
  const { movies, onDelete, onLike, onSort } = props;

  return (
    <table
      style={{
        alignItems: "center",
        justifyContent: "center",
        alignContent: "center",
        alignSelf: "center",
      }}
      className="table table-dark table-hover table-striped"
    >
      <thead>
        <tr>
          <th onClick={() => onSort("title")}>Title</th>
          <th onClick={() => onSort("genre.name")}>Genre</th>
          <th onClick={() => onSort("numberInStock")}>Stock</th>
          <th onClick={() => onSort("dailyRent")}>Rate</th>
          <th></th>
          <th></th>
        </tr>
      </thead>
      <tbody>
        {movies.map((movie) => (
          <tr key={movie._id}>
            <td>{movie.title}</td>
            <td>{movie.genre.name}</td>
            <td>{movie.numberInStock}</td>
            <td>{movie.dailyRentalRate}</td>
            <td>
              <Like liked={movie.liked} onClick={() => onLike(movie)} />
            </td>
            <td>
              <button
                onClick={() => this.onDelete(movie)}
                className="btn btn-outline-danger btn-sm"
                style={{ fontWeight: "bold" }}
              >
                Delete
              </button>
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default MoviesTable;
