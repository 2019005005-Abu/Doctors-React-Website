import React from 'react'
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Card from 'react-bootstrap/Card';
import "../../src/StyleComponent/MediaCare.css";
import R_1 from "../../src/Data/Img/r_1.png";
import R_2 from "../../src/Data/Img/r_2.png";
import R_3 from "../../src/Data/Img/r_3.png";
import R_4 from "../../src/Data/Img/r_4.png";
export const MediaCare = () => {
  return (
    <div className='mediaCare'>
        <Container>
            <div className='headindName'>
                <h1>Our Media care</h1>
                <p>service we Provide</p>
            </div>
            <Row>
             <Col>
             <div className='img_1'>
             <img src={R_1} alt='R_1'/>
              <img src={R_2} alt='R_2'/>
              <img src={R_3} alt='R_3'/>
              <img src={R_4} alt='R_4'/>
              </div>
             </Col>


             <Row>
    
             <Col>
             <div className='img_2'>
              <img src={R_1} alt='R_1'/>
              <img src={R_2} alt='R_2'/>
              <img src={R_3} alt='R_3'/>
              <img src={R_4} alt='R_4'/>
              </div>
                </Col>
              </Row>
            </Row>
        </Container>
    </div>
  )
}
