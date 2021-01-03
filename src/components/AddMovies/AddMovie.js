import React from "react";
import useForm from "../../useForm";
import validate from "../../validateForm";
import "./AddMovie.css";

const AddMovie = () => {
  const { handleChange, handleSubmit, values, errors } = useForm(validate);
  //
  return (
    <div id="add-movie">
      {/* wrapping onSubmit function in handleSubmit then passing it as callback, and i get all data from the form */}
      <form id="form" onSubmit={handleSubmit}>
        <h1>Add a new Movie!</h1>
        <input
          value={values.title}
          onChange={handleChange}
          type="text"
          name="title"
          className="form-input"
          placeholder="Name of the movie"
        />
        {errors.title && <p style={{ color: "red" }}>{errors.title}</p>}
        <input
          value={values.year}
          onChange={handleChange}
          type="text"
          name="year"
          className="form-input"
          placeholder="Year of release"
        />
        {errors.year && <p style={{ color: "red" }}>{errors.year}</p>}
        <input
          value={values.type}
          onChange={handleChange}
          type="text"
          name="type"
          className="form-input"
          placeholder="exampe: movie, tv show, ...."
        />
        {errors.type && <p style={{ color: "red" }}>{errors.type}</p>}
        <input
          value={values.image}
          onChange={handleChange}
          type="file"
          name="image"
        />
        {errors.image && <p style={{ color: "red" }}>{errors.image}</p>}
        <input type="submit" />
      </form>
    </div>
  );
};

export default AddMovie;
