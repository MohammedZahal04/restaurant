import React from 'react'
import{Navbar,Nav,Container} from 'react-bootstrap'
function Header() {
    return (
        <Navbar bg="dark" variant="dark">
        <Container>
        <Navbar.Brand href="#home">HOTELS</Navbar.Brand>
        <Nav className="me-auto">
         
        </Nav>
        </Container>
      </Navbar>
    )
}

export default Header
