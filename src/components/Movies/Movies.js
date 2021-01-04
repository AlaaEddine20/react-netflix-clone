import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { Button, Card } from "react-bootstrap";

const Movies = () => {
  // HOOKS
  const [movies, setMovies] = useState([]);
  const [loading, setLoading] = useState(true);
  // USEEFFECT

  useEffect(() => {
    getMovies();
  }, []);
  // FETCH MOVIES
  const getMovies = async () => {
    try {
      const response = await fetch("/movies", {
        method: "GET",
      });

      const data = await response.json();

      if (response.ok) {
        setMovies(data);
        setLoading(false);
      }
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <>
      <h1>Movies</h1>
      <Link to="/add-movie">
        <Button>+ Add a movie</Button>
      </Link>
      {loading ? (
        <div>loading...</div>
      ) : (
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
      )}
    </>
  );
};

export default Movies;
