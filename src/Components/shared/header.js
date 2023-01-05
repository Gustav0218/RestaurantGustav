import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
const Header = () => {
  return (
    <>
      <Navbar bg="dark" variant="dark">
        <Container>
          <Navbar.Brand href="#home">Bienvendo a Tu Restaurante</Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link href="/">Inicio</Nav.Link>
            <Nav.Link href="direccion">Contacto</Nav.Link>
            <Nav.Link href="*">Precios</Nav.Link>
          </Nav>
        </Container>
      </Navbar>
    </>
  );
  };
  
  export default Header;