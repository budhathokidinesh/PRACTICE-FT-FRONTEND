import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import { Link } from "react-router-dom";
import { IoLogIn } from "react-icons/io5";
import { IoLogOutOutline } from "react-icons/io5";
import { IoCreateOutline } from "react-icons/io5";
import { RiMoneyDollarBoxFill } from "react-icons/ri";

export const Header = () => {
  return (
    <Navbar expand="lg" variant="dark" className="bg-body-dark">
      <Container>
        <Navbar.Brand href="#home">
          <RiMoneyDollarBoxFill className="fs-1 text-warning" />
          MONEY
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ms-auto">
            <Link className="nav-link" to="/signup">
              <IoCreateOutline /> SignUp
            </Link>
            <Link className="nav-link" to="/">
              <IoLogIn /> Login
            </Link>
            <Link className="nav-link" to="/">
              <IoLogOutOutline /> Logout
            </Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};
