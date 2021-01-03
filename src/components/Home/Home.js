import React from "react";
import NavBar from "../Navbar/Navbar";
import Movies from "../Movies/Movies";
import Footer from "../Footer/Footer";
import "bootstrap/dist/css/bootstrap.min.css";
import "./Home.css";

const Home = () => {
  return (
    <div id="home-wrapper">
      <NavBar />
      <Movies />
      <Footer />
    </div>
  );
};

export default Home;
