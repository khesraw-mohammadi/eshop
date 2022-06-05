import React from 'react';
import { Container, Navbar, Nav } from 'react-bootstrap';
import { LinkContainer } from 'react-router-bootstrap';
function Header() {
  return (
  
        <Navbar bg="dark" variant='dark' expand="lg">
          <Container>
            <LinkContainer to="/">
              <Navbar.Brand >E-Shop</Navbar.Brand>
            </LinkContainer>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
              <Nav className="me-auto">
                <LinkContainer to="/cart">
                  <Nav.Link ><i className="fas fa-cart-arrow-down"></i> Cart</Nav.Link>
                </LinkContainer>
                <LinkContainer to="#link">
                  <Nav.Link className="fas fa-user"> Login</Nav.Link>
                </LinkContainer>
                
              </Nav>
            </Navbar.Collapse>
          </Container>
        </Navbar>
    
  )
}

export default Header
