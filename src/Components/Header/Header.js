import React from 'react';
import { Container, Nav, Navbar, NavDropdown } from 'react-bootstrap';
import logo from '../../img/logo.png'
import { Link, useNavigate } from "react-router-dom";
import { useAuthState } from 'react-firebase-hooks/auth';
import auth from '../../firebase.init';
import {  signOut } from 'firebase/auth';

const Header = () => {
  const logOut=()=>{
    signOut(auth);
  }
 
  const [user] = useAuthState(auth);
    return (
        <div>
            <Navbar  collapseOnSelect expand="lg" bg="primary" variant="dark"  sticky="top">
  <Container>
  <Navbar.Brand as={Link} to="/home"><img height={50} src={logo} alt="" /></Navbar.Brand>
  <Navbar.Toggle aria-controls="responsive-navbar-nav" />
  <Navbar.Collapse id="responsive-navbar-nav">
    <Nav className="me-auto">
      <Nav.Link as={Link} to="/burgers">BurgerHut</Nav.Link>
      <Nav.Link as={Link} to="/addBurger">Add Burger</Nav.Link>
      
    </Nav>
    <Nav>{
      user?<button onClick={logOut} className='btn  btn-danger'>Sign Out</button>:<Nav.Link as ={Link}  to="/login">Login</Nav.Link>
      
      
      }
      
      <Nav.Link as={Link} to="/manageBurger">
        Manage Burger
      </Nav.Link>
    </Nav>
  </Navbar.Collapse>
  </Container>
</Navbar>
            



        </div>
        
        
    );
};

export default Header;