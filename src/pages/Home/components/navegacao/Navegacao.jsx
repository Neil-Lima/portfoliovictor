import React from 'react';
import { Link } from 'react-router-dom';
import { Navbar, Container, Nav, Image } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub, faFacebook, faInstagram } from '@fortawesome/free-brands-svg-icons';
import Logo from './img/logo3.png';

function Navegacao() {
  return (
    <Navbar expand="md" bg="dark" variant="dark" className="py-3" style={{ borderStyle: "solid" }}>
      <Container>
        <Navbar.Brand>
          <Image src={Logo} style={{ width: "90px" }} />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="navcol-2" />
        <Navbar.Collapse id="navcol-2">
          <Nav className="ms-auto">
            <Nav.Link as={Link} to="/" className="nav-link active">Home</Nav.Link>
            <Nav.Link as={Link} to="/portfolio" className="nav-link">Portfolio</Nav.Link>
            <Nav.Link as={Link} to="/contato" className="nav-link">Contato</Nav.Link>
          </Nav>
        </Navbar.Collapse>
        <FontAwesomeIcon icon={faGithub} style={{ fontSize: "30px", marginRight: "10px", color: "white" }} />
        <FontAwesomeIcon icon={faFacebook} style={{ fontSize: "30px", marginRight: "10px", color: "white" }} />
        <FontAwesomeIcon icon={faInstagram} style={{ fontSize: "30px", marginRight: "10px", color: "white" }} />
      </Container>
    </Navbar>
  );
}

export default Navegacao;
