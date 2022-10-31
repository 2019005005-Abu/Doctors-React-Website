import React from 'react'
import "../../src/StyleComponent/DealWithChild.css"
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Nurse from "../../src/Data/Img/nurse.png"
import ConLogo from  "../../src/Data/Img/consult_logo.png";
import Thik from "../../src/Data/Img/V1.png"
export const Consultant = () => {
  return (
    <div className='consultant'>
    <Container>
    <Row>
        <Col sm={12} md={6} lg={4}>
           <div className='consultParentLogo'>
            <div className='conlogo'>
             <img src={ConLogo} alt='consultLogo'/>
            </div>
            <div className='context'>
            <p className='p_con'>Consult Online</p>
           <span className='p_span'>Best Solution</span>
            </div>
            </div>
        </Col>
        <Col sm={12} md={6} lg={4}>
            <img src={Nurse} alt='Nurse'/>
            <div className='consultParentLogo_down'>
            <div className='conlogo1'>
             <img src={ConLogo} alt='consultLogo'/>
            </div>
            <div className='context'>
            <p className='p_con'>Consult Online</p>
           <span className='p_span'>Best Solution</span>
            </div>
            </div>
        </Col>
        <Col sm={12} md={6} lg={4}>
           <div className='sickkinds'>
             <div className='sickkindHeading'>
             <h1>Sick Kids ?How to Deal With a 
             <br/>Childs Fever :4 Steps</h1>
             </div>
              <div className='stepsList'>
                <div className='step_1'>
                <img src={Thik} alt='Thik'/>
                <p>Cras sit nac a nuk</p>
                </div>
                
                <div className='step_2'>
                <img src={Thik} alt='Thik'/>
                <p>Cras sit nac a nuk</p>
                </div>
                <div className='step_3'>
                <img src={Thik} alt='Thik'/>
                <p>Cras sit nac a nuk</p>
                </div>
                <div className='step_4'>
                <img src={Thik} alt='Thik'/>
                <p>Cras sit nac a nuk</p>
                </div>
              </div>
           </div>
        </Col>
    </Row>
    </Container>
  
    </div>
  )
}
