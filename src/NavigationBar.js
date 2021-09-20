import React from 'react';
import {Navbar, Container, Nav, NavDropdown, Row, Col, Button} from 'react-bootstrap';

function NavigationBar() {


  return (
  <Navbar expand="lg" variant="dark" bg="dark">
      <Container>
          <Navbar.Brand href="#">Navbar</Navbar.Brand>
      </Container>
  </Navbar>
  );
}

export default NavigationBar;