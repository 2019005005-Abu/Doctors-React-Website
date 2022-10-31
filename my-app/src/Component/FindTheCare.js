import React from 'react'
import "../../src/StyleComponent/FindTheCare.css";
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Doctor from "../../src/Data/Img/doctors.png";
import Nurse from "../../src/Data/Img/nurse.png"

export const FindTheCare = () => {
  return (
    <div className='findthecare'>
       <Container >
        <Row>
        <Col sm={12} md={6} lg={4}>
        <div className='careDescription'>
            <h1 className='findTheCareHeading'>Find The Care <br/> You Need </h1>
            <p className='careParadescription'>survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</p>
        <div className='careButton'>
        <button>Make Appointment</button>
        </div>
        </div>
        </Col>
        <Col sm={12} md={12} lg={4}>
        <div className='smilingDoctor'>
          <img src={Doctor} alt='doctor'/>
        </div>
        </Col>
        <Col sm={12} md={6} lg={4}>
        <div className='smilingNurse'>
          <img src={Nurse} alt='Nurse'/>
        </div>
        </Col>
        </Row>
       </Container>
      </div>
   
  )
}
