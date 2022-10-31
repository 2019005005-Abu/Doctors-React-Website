import React,{Component} from 'react'
import "../../src/StyleComponent/MedicalExpert.css";
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import YoungDoctor from "../../src/Data/Img/Young.png";
import OldDoctor from "../../src/Data/Img/Old.png";

class Medical_Expert extends Component{
  render(){
    var settings = {
        autoplaySpeed:3000,
        dots: true,
        infinite: false,
        speed: 3000,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay:true,
        
        responsive: [
          {
            breakpoint: 1024,
            settings: {
              slidesToShow: 1,
              slidesToScroll: 1,
              infinite: true,
              dots: true
            }
          },
          {
            breakpoint: 600,
            settings: {
              slidesToShow: 1,
              slidesToScroll: 1,
              initialSlide: 1
            }
          },
          {
            breakpoint: 480,
            settings: {
              slidesToShow: 1,
              slidesToScroll: 1
            }
          }
        ]
      };
    return(

        <div className='Medical_expert'>
         <Container>
          
                <div className='expert_Heading'><h1>Our Medical Experts</h1></div>
                <div className='MedicalDescription'>
               <p>
               t is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem <br/>Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing
            </p>
            </div>
        </Container>
         <div className='slider'>
            <Slider {...settings}>
            <Container>
                 <Row sm={12} md={6} lg={4}>
                <Col>
               <Card style={{ width: '18rem' }}>
                <Card.Img variant="top" src={YoungDoctor} />
                <Card.Body>
        <Card.Title><p> Dr.Emrul Kayes</p></Card.Title>
        <Card.Text>
            <p>M.B.B,S,F.C.P.S,B.C.S</p>
        </Card.Text>
        <Card.Text>
        <p>Some quick example text to build on the card<br/> title and make up the
          bulk of the card's content.</p>
        </Card.Text>
        <Button variant="primary " style={{float:'right'}}>Go somewhere</Button>
      </Card.Body>
           </Card>
                    </Col>
                    <Col>
                    <Card style={{ width: '18rem' }}>
      <Card.Img variant="top" src={YoungDoctor}/>
      <Card.Body>
        <Card.Title><p> Dr.Emrul Kayes</p></Card.Title>
        <Card.Text>
            <p>M.B.B,S,F.C.P.S,B.C.S</p>
        </Card.Text>
        <Card.Text>
        <p>Some quick example text to build on the card<br/> title and make up the
          bulk of the card's content.</p>
        </Card.Text>
        <Button variant="primary " style={{float:'right'}}>Go somewhere</Button>
      </Card.Body>
    </Card>
                    </Col>
                    <Col>
                    <Card style={{ width: '18rem' }}>
      <Card.Img variant="top" src={YoungDoctor} />
      <Card.Body>
        <Card.Title>Card Title</Card.Title>
        <Card.Text>
            <p>M.B.B,S,F.C.P.S,B.C.S</p>
        </Card.Text>
        <Card.Text>
        <p>Some quick example text to build on the card<br/> title and make up the
          bulk of the card's content.</p>
        </Card.Text>
        <Button variant="primary " style={{float:'right'}}>Go somewhere</Button>
      </Card.Body>
    </Card>
    </Col>
    <Col>
            
    </Col>
 </Row>
            </Container>
            </Slider>
 
         </div>
        </div>
    )
  }
}
export default Medical_Expert;