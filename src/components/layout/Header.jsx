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
import { useState } from "react";

export const Header = () => {
  const { user, setUser } = useUser();
  const [showMenu, setShowMenu] = useState(false);
  // 1. On logout click delete accessJWT token from the local state
  const handleOnLogout = () => {
    // 2. Reset user object in the state
    localStorage.removeItem("accessJWT");
    setUser({});
    // 3. Redirect iser to login page
  };

  return (
    <Navbar
      expand="lg"
      variant="dark"
      className="bg-body-dark navbar"
      expanded={showMenu}
    >
      <Container>
        <Navbar.Brand href="#home">
          <RiMoneyDollarBoxFill className="fs-1 text-warning" />
          MONEY
        </Navbar.Brand>
        {user?.name && <div>Welcome {user.name}</div>}

        <Navbar.Toggle
          aria-controls="basic-navbar-nav"
          onClick={() => setShowMenu(true)}
        />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ms-auto">
            {user?._id ? (
              <>
                <Link
                  className="nav-link"
                  to="/dashboard"
                  onClick={() => setShowMenu(false)}
                >
                  <RiDashboard3Fill /> Dashboard
                </Link>
                <Link
                  className="nav-link"
                  to="/transaction"
                  onClick={() => setShowMenu(false)}
                >
                  <GrTransaction /> Transaction
                </Link>
                <Link onClick={handleOnLogout} className="nav-link" to="/">
                  <IoLogOutOutline /> Logout
                </Link>
              </>
            ) : (
              <>
                <Link
                  className="nav-link"
                  to="/signup"
                  onClick={() => setShowMenu(false)}
                >
                  <IoCreateOutline /> SignUp
                </Link>
                <Link
                  className="nav-link"
                  to="/"
                  onClick={() => setShowMenu(false)}
                >
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
