import React, { useState, useEffect } from "react";
import { useForm } from "react-hook-form";
import "./AddMovie.css";

const AddMovie = () => {
  // FORM HOOKS
  const { register, handleSubmit, errors } = useForm();

  // MOVIES HOOKS
  const [dataMovies, setdataMovies] = useState({});

  useEffect(() => {
    postMovie();
  }, []);
  // POST MOVIE
  const postMovie = async (body) => {
    try {
      const response = await fetch("/movies/upload", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(),
      });
      const data = await response.json(body);

      if (response.ok) {
        setdataMovies(data);
      }
    } catch (error) {
      console.log(error);
    }
  };

  //
  const onSubmit = (data, e) => {
    // e.preventDefault();
    postMovie(data);
  };
  //
  return (
    <div id="add-movie">
      {/* wrapping onSubmit function in handleSubmit then passing it as callback, and i get all data from the form */}
      <form id="form" onSubmit={handleSubmit(onSubmit)}>
        <h1>Add a new Movie!</h1>
        <input
          ref={register({ required: true })}
          type="text"
          name="title"
          className="form-input"
          placeholder="Name of the movie"
        />
        {errors.title && (
          <span style={{ color: "red" }}>Title is required</span>
        )}
        <input
          ref={register({ required: true, min: 4 })}
          type="number"
          name="year"
          className="form-input"
          placeholder="Year of release"
        />
        {errors.year && <span style={{ color: "red" }}>Year is required</span>}

        <input
          ref={register({ required: true })}
          type="text"
          name="type"
          className="form-input"
          placeholder="exampe: movie, tv show, ...."
        />
        {errors.type && <span style={{ color: "red" }}>Type is required</span>}
        <input ref={register({ required: true })} type="file" name="image" />
        {errors.image && (
          <span style={{ color: "red" }}>Image is required</span>
        )}
        <input type="submit" />
      </form>
    </div>
  );
};

export default AddMovie;
