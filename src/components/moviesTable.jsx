import React from "react";
import Like from "./common/Like";

const MoviesTable = (props) => {
  const { movies, onDelete, onLike } = props;

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
          <th>Title</th>
          <th>Genre</th>
          <th>Stock</th>
          <th>Rate</th>
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
