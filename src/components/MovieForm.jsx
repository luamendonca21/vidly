import React from "react";

const MovieForm = ({ match, history }) => {
  return (
    <div>
      <h1>Movie Form - {match.params.id}</h1>
      <button
        onClick={() => history.replace("/movies")}
        className="btn btn-outline-danger btn-sm"
        style={{ fontWeight: "bold" }}
      >
        Save
      </button>
    </div>
  );
};

export default MovieForm;
