import React, { useEffect } from 'react';
import { Navbar, Nav, Jumbotron, Container, Form, Button } from 'react-bootstrap'
import image from '../../assets/Full Stack Logo White.png';

function Header(props) {
  const tabs = ['About', 'Portfolio'];
  return (
    <>
      <header>
        <Navbar sticky="top" variant="dark" expand="lg" className="nav-background p-5">
          <Navbar.Brand href="#about">
            <img
              src={image}
              width="60"
              height="60"
              className="d-inline-block align-top"
              alt="React Bootstrap logo"
            />
          </Navbar.Brand>
          <Container className="px-3 text-name">
          <Navbar.Brand href="#about">John Sparling</Navbar.Brand>
          </Container>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">

            <Nav className="d-flex justify-content-end w-100 mr-5 h2">
              {tabs.map(tab => (
                <li className="nav-item" key={tab}>
                  <Nav.Link
                    href={'#' + tab.toLowerCase()}
                    onClick={() => props.handlePageChange(tab)}
                    className={
                      props.currentPage === tab ? 'nav-link active' : 'nav-link'
                    }
                  >
                    {tab}
                  </Nav.Link>
                </li>
              ))}

            </Nav>

          </Navbar.Collapse>
        </Navbar>

        <Jumbotron fluid className="bg m-0">
            <Container className="text-center">
            
            </Container>
        </Jumbotron>


      </header>
    </>
  );
}

export default Header;
