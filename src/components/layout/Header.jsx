import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import { Link } from "react-router-dom";
import { IoLogIn } from "react-icons/io5";
import { IoLogOutOutline } from "react-icons/io5";
import { IoCreateOutline } from "react-icons/io5";
import { RiMoneyDollarBoxFill } from "react-icons/ri";
import { RiDashboard3Fill } from "react-icons/ri";
import { GrTransaction } from "react-icons/gr";
import { useUser } from "../../context/UserContext";

export const Header = () => {
  const { user, setUser } = useUser();
  // 1. On logout click delete accessJWT token from the local state
  const handleOnLogout = () => {
    // 2. Reset user object in the state
    localStorage.removeItem("accessJWT");
    setUser({});
    // 3. Redirect iser to login page
  };

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
            {user?._id ? (
              <>
                <Link className="nav-link" to="/dashboard">
                  <RiDashboard3Fill /> Dashboard
                </Link>
                <Link className="nav-link" to="/transaction">
                  <GrTransaction /> Transaction
                </Link>
                <Link onClick={handleOnLogout} className="nav-link" to="/">
                  <IoLogOutOutline /> Logout
                </Link>
              </>
            ) : (
              <>
                <Link className="nav-link" to="/signup">
                  <IoCreateOutline /> SignUp
                </Link>
                <Link className="nav-link" to="/">
                  <IoLogIn /> Login
                </Link>
              </>
            )}
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};
