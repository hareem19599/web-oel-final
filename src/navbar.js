import React from "react";
import Container from 'react-bootstrap/Container';
import Button from 'react-bootstrap/Button';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import Form from 'react-bootstrap/Form';
import FormControl from 'react-bootstrap/FormControl';

const Navigationbar = () => (
<Navbar bg="dark" expand="lg" variant="dark">
  <Container fluid>
    <Navbar.Brand href="#">Home</Navbar.Brand>
    <Navbar.Toggle aria-controls="navbarScroll" />
    <Navbar.Collapse id="navbarScroll">
      <Nav
        className="me-auto my-2 my-lg-0"
        style={{ maxHeight: '100px' }}
        navbarScroll
      >
        <Nav.Link href="#action2">Contact Us</Nav.Link>
        <NavDropdown title="Sections" id="navbarScrollingDropdown">
          <NavDropdown.Item href="#Vogues">Vogues</NavDropdown.Item>
          <NavDropdown.Item href="#Flowers">Flowers</NavDropdown.Item>
          <NavDropdown.Item href="#Vintage">Vintage</NavDropdown.Item>  
        </NavDropdown>
      </Nav>
      <Form className="d-flex">
        <FormControl
          type="search"
          placeholder="Search"
          className="me-2"
          aria-label="Search"
        />
        <Button variant="outline-success">Search</Button>
      </Form>
    </Navbar.Collapse>
  </Container>
</Navbar>
);
export default Navigationbar;