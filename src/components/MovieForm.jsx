import React from "react";
import Joi from "joi-browser";
import Form from "./common/form";
class MovieForm extends Form {
  state = {
    data: {
      title: "",
      genreId: "",
      numberInStock: "",
      dailyRentalRate: "",
    },
    errors: {},
  };

  schema = {
    title: Joi.string().required().label("Title"),
    genreId: Joi.string().required().label("Genre"),
    numberInStock: Joi.number().required().min(0).max(100).label("Stock"),
    dailyRentalRate: Joi.number().required().min(0).max(10).label("Rate"),
  };
  doSubmit = () => {
    console.log("Saved");
  };
  render() {
    return (
      <div>
        <h2 style={{ textAlign: "center", color: "#495057" }}>Movie Form</h2>
        <div>
          <form
            onSubmit={this.handleSubmit}
            className="col"
            style={{ marginTop: 30 }}
          >
            {this.renderInput("title", "Title")}
            {this.renderInput("genreId", "Genre")}

            {this.renderInput("numberInStock", "Number in Stock")}

            {this.renderInput("dailyRentalRate", "Rate", "password")}
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
    );
  }
}

export default MovieForm;
