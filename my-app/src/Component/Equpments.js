import React from 'react'
import "../../src/StyleComponent/Equpments.css"
import Container from 'react-bootstrap/Container';
import Banner from "../../src/Data/Img/Banner.png"
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Vector from "../../src/Data/Img/Vector.png";
import Smile from "../../src/Data/Img/smile.png";
import ConsuletLogo from "../../src/Data/Img/consult_logo.png"
export const Equpments = () => {
  return (
   
    <div className='equpments'>
          <Container>
            <div className='banner_img'>
                <img src={Banner} alt='banner'/>
            </div>
           <Row>
             <Col>
              <div className='div_1'>
               <div className='first_img'>
                 <div className='iconsection'>
                    <img src={Smile} alt='smile'/>
                 </div>
                 <div className='amountsection'></div>
                 <hr/>
                 <div className='TitleSection'></div>
               </div>
               </div>
               <div className='div_2'>
               <div className='second_img'>2</div>
               </div>
               <div className='div_3'>
               <div className='third_img'>3</div>
               </div>
               <div className='div_4'>
               <div className='forth_img'>4</div>
               </div>
               
               
              
              
             </Col>
           </Row>
         </Container>
    </div>
  )
}
