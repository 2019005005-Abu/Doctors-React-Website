import React from 'react'
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import Logo from "../../src/Data/Img/logo.png"
import Doctors_Guide from "../../src/Data/Img/Doctor Guide.png"
import ArrowIcon from "../../src/Data/Img/Vector.png"
import "../../src/StyleComponent/Header.css"
import { BiChevronDown } from "react-icons/bi";
export const Header = () => {
  return (
    <div className='header'>
      <Navbar collapseOnSelect expand="lg">
      <Container>
        <div className='doctors_logo'>
          <div className='logo'>
             <img src={Logo} alt='doctors_logo'/>
          </div>
           <div className='doctors_logo_Header'>
            <img src={Doctors_Guide} alt='doctors_guide_png'/>
            </div> 
        </div>
        <div className='navBar_Toggle'>
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href="#features"className='nav_1'>HOME</Nav.Link>
            <BiChevronDown className='chevedownIcons'/>
            <Nav.Link href="#pricing" className='nav_1'>FEATURES</Nav.Link>
            <BiChevronDown className='chevedownIcons'/>
            <Nav.Link href="#features" className='nav_1'>DEPARTMENT</Nav.Link>
            <BiChevronDown className='chevedownIcons'/>
            <Nav.Link href="#pricing" className='nav_1'>EVENT</Nav.Link>
            <BiChevronDown className='chevedownIcons'/>
            <Nav.Link href="#features" className='nav_1'>CONTACT US</Nav.Link>
          </Nav>
          </Navbar.Collapse>
          </div>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <div className='SingLonInButton'>
          <button className='btn1'>LOGIN</button>
          <button  className='btn2'>SIGNUP</button>
          </div>
      </Container>
    </Navbar>
    </div>
  )
}
