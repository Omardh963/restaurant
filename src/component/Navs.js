import React from 'react';
import { Nav,Navbar } from 'react-bootstrap';
import './Navs.css';
function Navs() {
  return (
    <div >
    <Navbar expand="lg">
  <Navbar.Brand href="#home" className='best'>Best Food</Navbar.Brand>
  <Navbar.Toggle aria-controls="basic-navbar-nav" />
  <Navbar.Collapse id="basic-navbar-nav">
    <Nav className="ml-auto">
      <Nav.Link href="#home" className='home'>Home</Nav.Link>
      <Nav.Link href="#fast food">Fast Food</Nav.Link>
      <Nav.Link href="#sweets">Sweets</Nav.Link>
      <Nav.Link href="#about">About</Nav.Link>
      <Nav.Link href="#services">Services</Nav.Link>
      <Nav.Link href="#contact">Contact</Nav.Link>
    </Nav>
  </Navbar.Collapse>
</Navbar>
    </div>
  )
}

export default Navs
