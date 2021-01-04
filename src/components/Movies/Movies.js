import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { Button, Card } from "react-bootstrap";

const Movies = () => {
  // HOOKS
  const [movies, setMovies] = useState([]);

  // URL
  const URL = "http://localhost:4004/movies/";

  // FETCH MOVIES
  useEffect(() => {
    async function fetchMovies() {
      const data = await fetch(URL);
      const response = await data.json();

      setMovies(response);
    }
    fetchMovies();
  }, []); // EMPTY ARRAY MEANS THAT THIS CODE WILL RUN ONLY ONCE, ONLOAD AND NOT EVERYTIME VAR MOVIES CHANGES

  return (
    <div>
      <h1>Movies</h1>
      <Link to="/add-movie">
        <Button>+ Add a movie</Button>
      </Link>
      <div>
        {movies.map((movie, key) => (
          <Card key={key} style={{ width: "18rem" }}>
            <Card.Img variant="top" src={movie.image} />
            <Card.Body>
              <Card.Title>{movie.title}</Card.Title>
              <Card.Text>{movie.type}</Card.Text>
              <Card.Text>{movie.year}</Card.Text>
              <Button variant="primary">Go somewhere</Button>
            </Card.Body>
          </Card>
        ))}
      </div>
    </div>
  );
};

export default Movies;
