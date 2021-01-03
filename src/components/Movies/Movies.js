import React from "react";
import { Link } from "react-router-dom";
import { Button } from "react-bootstrap";

const Movies = () => {
  return (
    <div>
      <h1>Movies</h1>
      <Link to="/add-movie">
        <Button>+ Add a movie</Button>
      </Link>
    </div>
  );
};

export default Movies;
