import React from 'react'
import "../../src/StyleComponent/Upcoming_Events_1.css";
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Ractangle from "../../src/Data/Img/Rectangle 42.png"
export const UpComingEvents_1 = () => {
  return (
    <div className='upComingEvents_1'>
      <Container>
         <Row>
            <Col sm={12} md={6} lg={6}>
             <div className='pi_1'>
               <img src={Ractangle} style={{width:'400px',height:'400px'}}/>
             </div>
            </Col>
            <Col>
             <div className='Heading'>
               <h1>How to Lead a Healty Life</h1>
             </div>
              <div className='paragraph'>
                <p>
                survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.
                </p>
              </div>
              <div className='btn'>
                <button>Book Now</button>
                <button>Not available</button>
              </div>
            </Col>
         </Row>
      </Container>
    </div>
  )
}
