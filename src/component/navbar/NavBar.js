import React, { useState } from "react";
import { Container, Nav } from "react-bootstrap";
import Navbar from "react-bootstrap/Navbar";
import { Link } from "react-scroll";
import logo from "../../Assets/mylogo.png";
import "./navbar.scss";
import {
  AiOutlineContacts,
  AiOutlineFundProjectionScreen,
  AiOutlineHome,
  AiOutlineUser,
} from "react-icons/ai";
import { BiOutline } from "react-icons/bi";

function NavBar() {
  const [expand, updateExpanded] = useState(false);

  const [navColour, updateNavbar] = useState(false);

  function scrollHandler() {
    if (window.scrollY >= 40) {
      updateNavbar(true);
    } else {
      updateNavbar(false);
    }
  }
  return (
    <>
      <Navbar
        expanded={expand}
        fixed="top"
        expand="xs"
        className={navColour ? "sticky" : "navbar"}
      >
        <Container>
          <Navbar.Brand href="/" className="d-flex">
            <img src={logo} className="navbar-logo" alt="brand" />
          </Navbar.Brand>
          <Navbar.Toggle
            aria-controls="responsive-navbar-nav"
            onClick={() => {
              updateExpanded(expand ? false : "expanded");
            }}
          >
            <span></span>
            <span className="navbar-menu"></span>
            <span></span>
          </Navbar.Toggle>
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="ms-auto" defaultActiveKey="#home">
              <Nav.Item>
                <Link
                  className="nav-link"
                  activeClass="active"
                  to="home"
                  spy={true}
                  smooth={true}
                  duration={0}
                  onClick={() => updateExpanded(false)}
                >
                  <AiOutlineHome style={{ marginBottom: "2px" }} /> Home
                </Link>
              </Nav.Item>
              <Nav.Item>
                <Link
                  className="nav-link"
                  to="bio"
                  spy={true}
                  smooth={true}
                  offset={-80}
                  duration={0}
                  onClick={() => updateExpanded(false)}
                >
                  <BiOutline style={{ marginBottom: "2px" }} /> Bio
                </Link>
              </Nav.Item>
              <Nav.Item>
                <Link
                  className="nav-link"
                  to="about"
                  spy={true}
                  smooth={true}
                  offset={-80}
                  duration={0}
                  onClick={() => updateExpanded(false)}
                >
                  <AiOutlineUser style={{ marginBottom: "2px" }} /> About
                </Link>
              </Nav.Item>
              <Nav.Item>
                <Link
                  className="nav-link"
                  to="about"
                  spy={true}
                  smooth={true}
                  offset={0}
                  duration={0}
                  onClick={() => updateExpanded(false)}
                >
                  <AiOutlineFundProjectionScreen
                    style={{ marginBottom: "2px" }}
                  />{" "}
                  Projects
                </Link>
              </Nav.Item>
              <Nav.Item>
                <Link
                  className="nav-link"
                  to="about"
                  spy={true}
                  smooth={true}
                  offset={0}
                  duration={0}
                  onClick={() => updateExpanded(false)}
                >
                  <AiOutlineContacts style={{ marginBottom: "2px" }} /> Contact
                </Link>
              </Nav.Item>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </>
  );
}

export default NavBar;
