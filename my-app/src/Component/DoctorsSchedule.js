import React from 'react'
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import "../../src/StyleComponent/DoctorsSchedule.css"
import Doctors from "../../src/Data/Img/doctors.png"
import Ractangle from "../../src/Data/Img/Rectangle 28.png"
import "../../src/StyleComponent/DealWithChild.css"
import Vector  from "../../src/Data/Img/consult_logo.png"
export const DoctorsSchedule = () => {
  return (
    <div className='doctorsSchedule'>
     <Container>
        <Row>
            <Col sm={12} md={6} lg={6}>

                <div className='Heading'>
                    <h1>Doctors schedule Today</h1>
                </div>
                <Row>
                    <Col>
                    <div className='time'>
                    <p>8.00</p>
                    <hr/>
                    <p>10.00</p>
                    <hr/>
                    <p>12.00</p>
                    <hr/>
                    <p>1.00</p>
                    <hr/>
                    <p>3.00</p>
                </div>
                    </Col>
                    <Col>
                <div className='doctors_information'>
                 <p>Generic Practioan</p>
                 <p>Dr.Albetsts</p>
                 <p>Generic Practioan</p>
                 <p>Dr.Albetsts</p>
                 <p>Generic Practioan</p>
                 <p>Dr.Albetsts</p>
                 <p>Generic Practioan</p>
                 <p>Dr.Albetsts</p>
                 <p>Generic Practioan</p>
                 <p>Dr.Albetsts</p>
                </div>
                    </Col>
                </Row>
               
              
            </Col>
            <Col sm={12} md={6} lg={6}>
            <img src ={Ractangle} alt='Ractangle' className='Rantangle'/>
             <img src={Doctors} alt='Doctor' className='doctorspic'/>
            <div className='consultParentLogo_down1'>
            <div className='doctorsoconlog'>
             <img src={Vector} alt='consultLogo'/>
            </div>
            <div className='context'>
            <p className='p_con'>Consult Online</p>
           <span className='p_span'>Best Solution</span>
            </div>
            </div>
            </Col>
        </Row>
    </Container>   
    </div>
  )
}
