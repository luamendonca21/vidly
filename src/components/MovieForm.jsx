import React from "react";

const MovieForm = ({ match, history }) => {
  return (
    <div>
      <h1>Movie Form - {match.params.id}</h1>
      <button
        onClick={() => history.replace("/movies")}
        style={{
          padding: "0.5rem 1.5em",

          borderRadius: 30,
          fontWeight: "bold",
        }}
        className="btn btn-danger btn-sm"
      >
        Save
      </button>
    </div>
  );
};

export default MovieForm;
