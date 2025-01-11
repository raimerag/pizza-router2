import { useContext, useMemo } from "react";
import Button from "react-bootstrap/Button";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import "./NavBar.css";
import { NavLink } from "react-router-dom";
import { Contexts } from "../../Context/MyContext";
import { ContextUser } from "../../Context/UserContext";

const NavBar = () => {
  const { cartTotal } = useContext(Contexts);
  let CompraTotal = cartTotal;
  CompraTotal = CompraTotal.toLocaleString();

  const { user, logout } = useContext(ContextUser);
  const token = user;

  return (
    <>
      <Navbar expand="lg" bg="dark" data-bs-theme="dark">
        <Container fluid>
          <NavLink className="nav-link" to="/">
            <Navbar.Brand>¡Pizzería Mamma Mia!</Navbar.Brand>
          </NavLink>
          <Navbar.Toggle aria-controls="navbarScroll" />
          <Navbar.Collapse id="navbarScroll">
            <Nav
              className="me-auto my-2 my-lg-0"
              style={{ maxHeight: "100px" }}
              navbarScroll
            >
              <NavLink className="nav-link" to="/home">
                🍕Home
              </NavLink>

              <NavLink
                to="/profile"
                className={token === false ? "nologin nav-link" : "nav-link"}
              >
                🔓Profile
              </NavLink>
              <NavLink
                className={token === false ? "nologin nav-link" : "nav-link"}
                onClick={() => logout()}
              >
                🔒Logout
              </NavLink>
              <NavLink
                to="login"
                className={token ? "nologin nav-link" : "nav-link"}
                href="#action2"
              >
                🔐Login
              </NavLink>
              <NavLink
                to="register"
                className={token ? "nologin nav-link" : "nav-link"}
                href="#action2"
              >
                🔐Register
              </NavLink>
            </Nav>
          </Navbar.Collapse>
          <NavLink to="cart">
            <Button variant="outline-light">🛒Total : {CompraTotal}</Button>
          </NavLink>
        </Container>
      </Navbar>
    </>
  );
};
export default NavBar;
