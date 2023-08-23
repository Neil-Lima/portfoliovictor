import React from 'react';
import { Navbar, Container, Nav } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub } from '@fortawesome/free-brands-svg-icons';
import Logo from './img/logo4.png';

function Navegacao() {
  const githubProfileLink = 'https://github.com/Neil-Lima';

  return (
    <Navbar bg="dark" variant="dark" expand="md" className="py-3">
      <Container>
        <Navbar.Brand href="#">
          <span style={{ fontSize: '28px' }}>Victor Lima</span>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="navcol-6">
          <span className="visually-hidden">Toggle navigation</span>
          <span className="navbar-toggler-icon" />
        </Navbar.Toggle>
        <Navbar.Collapse id="navcol-6" className="order-md-first flex-grow-0">
          <Nav className="me-auto">
            <Nav.Link className="nav-link active" href="#">
              <img src={Logo} style={{ width: '54px' }} alt="Logo" />
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
        <div className="d-none d-md-block">
          <a
            className="btn btn-light me-2"
            href={githubProfileLink}
            target="_blank"
            rel="noopener noreferrer"
            style={{ background: 'var(--bs-gray-900)', borderStyle: 'none' }}
          >
            <FontAwesomeIcon icon={faGithub} style={{ fontSize: '38px', color: 'var(--bs-white)' }} />
          </a>
        </div>
      </Container>
    </Navbar>
  );
}

export default Navegacao;
