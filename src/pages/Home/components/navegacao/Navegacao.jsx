import React from 'react';
import { Link } from 'react-router-dom';
import { Navbar, Container, Nav, Image } from 'react-bootstrap';
import { BiGithub, BiFacebook, BiInstagram } from 'react-icons/bi';
import Logo from './img/logo3.png';

function Navegacao() {
  return (
    <Navbar expand="md" bg="light" variant="light" className="py-3" style={{ color: "cyan", borderStyle: "solid" }}>
      <Container>
        <Navbar.Brand>
          <Image src={Logo} style={{ width: "90px" }} />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="navcol-2" />
        <Navbar.Collapse id="navcol-2">
          <Nav className="ms-auto">
            <Nav.Link as={Link} to="/" style={{ color: "cyan" }} className="nav-link active">Home</Nav.Link>
            <Nav.Link as={Link} to="/portfolio" style={{ color: "cyan" }} className="nav-link">Portfolio</Nav.Link>
            <Nav.Link as={Link} to="/contato" style={{ color: "cyan" }} className="nav-link">Contato</Nav.Link>
          </Nav>
        </Navbar.Collapse>
        <BiGithub style={{ fontSize: "30px", marginRight: "10px", color: "white" }} />
        <BiFacebook style={{ fontSize: "30px", marginRight: "10px", color: "blue" }} />
        <BiInstagram style={{ fontSize: "30px", marginRight: "10px", color: "pink" }} />
      </Container>
    </Navbar>
  );
}

export default Navegacao;
