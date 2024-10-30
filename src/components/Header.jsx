import React from 'react'
import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';

function Header() {
  return (
    <>
     <Navbar className="">
        <Container>
          <Navbar.Brand href="#home">
          <i className="fa-solid fa-address-card fa-2xl fa-fade "  style={{color: "#ffffff",}} />
           {' '}
          </Navbar.Brand>
        </Container>
      </Navbar>
    </>
  )
}

export default Header