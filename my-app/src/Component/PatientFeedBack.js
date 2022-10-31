import React from 'react'
import "../../src/StyleComponent/PatientFeedBack.css";
import Carousel from 'react-bootstrap/Carousel';
import Ractangle from "../../src/Data/Img/Rectangle 41.png"
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
export const PatientFeedBack = () => {
  return (
    <div className='Patient_Feedback'>
      <Container>
      <Carousel>
      <Carousel.Item interval={1000}>
        <img
          className="d-block w-100"
          src={Ractangle}
          alt="First slide"

        />
        <Carousel.Caption>
          <h3>First slide label</h3>
          <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item interval={500}>
        <img
          className="d-block w-100"
          src={Ractangle}
          alt="Second slide"
        />
        <Carousel.Caption>
          <h3>Second slide label</h3>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src={Ractangle}
          alt="Third slide"
        />
        <Carousel.Caption>
          <h3>Third slide label</h3>
          <p>
            Praesent commodo cursus magna, vel scelerisque nisl consectetur.
          </p>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
      </Container>
     
    </div>
  )
}
