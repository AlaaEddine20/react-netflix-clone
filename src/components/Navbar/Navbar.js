import React from "react";
import { Navbar, Nav, Image } from "react-bootstrap";
import logo from "../../images/Netflix-Logo.png";
import avatar from "../../images/Netflix-avatar.png";
import SearchIcon from "@material-ui/icons/Search";
import NotificationsIcon from "@material-ui/icons/Notifications";
import "bootstrap/dist/css/bootstrap.min.css";
import "./Navbar.css";

function NavBar() {
  return (
    <div id="navbar-wrapper">
      <Navbar expand="lg">
        <Navbar.Brand>
          <Image id="logo" src={logo} />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <div className="links-icons">
            <div className="nav-links-left">
              {/* <Nav className="nav-links mr-auto"> */}
              <Nav.Link className="nav-link" href="#home">
                Home
              </Nav.Link>
              <Nav.Link className="nav-link" href="#tv-shows">
                TV Shows
              </Nav.Link>
              <Nav.Link className="nav-link" href="#movies">
                movies
              </Nav.Link>
              <Nav.Link className="nav-link" href="#recently-added">
                Recently Added
              </Nav.Link>
              <Nav.Link className="nav-link" href="#my-list">
                My List
              </Nav.Link>
              {/* </Nav> */}
            </div>
            <div className="nav-icons-right mx-2">
              <SearchIcon className="nav-right-item mr-3" />
              <h2 className="nav-right-item mr-3">KIDS</h2>
              <h2 className="nav-right-item mr-3">DVD</h2>
              <NotificationsIcon className="nav-right-item mr-3" />
              <Image id="avatar" src={avatar} />
            </div>
          </div>
        </Navbar.Collapse>
      </Navbar>
    </div>
  );
}

export default NavBar;
