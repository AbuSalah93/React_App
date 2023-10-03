import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import LoginButton from '../Login/login';
import LogOutButton from '../Logout/logout'
import '../Header/Header.css'
import { useAuth0 } from '@auth0/auth0-react';

const Header = () => {
  let {isAuthenticated} = useAuth0()
  return (
    <div>
      <Navbar expand="lg" className="bg-body-tertiary" bg="dark" data-bs-theme="dark">
      <Container>
        <Navbar.Brand href="/">Food Recipes</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href="/">Home</Nav.Link>
            <Nav.Link href="/Browse">Browse</Nav.Link>
            <Nav.Link href="/favorites">Favorites</Nav.Link>
         
          </Nav>
        </Navbar.Collapse>
        {isAuthenticated ? <LogOutButton /> : <LoginButton />}
      </Container>
    </Navbar>
    </div>
  )
}

export default Header
