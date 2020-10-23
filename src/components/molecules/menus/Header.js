import React, { memo } from 'react';
import { Navbar, Nav } from 'react-bootstrap';

const Header = memo(() => (
  <Navbar bg="dark" variant="dark">
    <Navbar.Brand href="/">{process.env.REACT_APP_NAME}</Navbar.Brand>
    <Navbar.Toggle aria-controls="basic-navbar-nav" />
    <Navbar.Collapse id="basic-navbar-nav">
      <Nav className="mr-auto">
        <Nav.Link href="/about">About</Nav.Link>
      </Nav>
    </Navbar.Collapse>
  </Navbar>
));
export default Header;
