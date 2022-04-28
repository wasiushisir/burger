import React from 'react';
import { Carousel } from 'react-bootstrap';
import sa from '../../img/sa.png'
import sb from '../../img/sb.png'
import sc from '../../img/sc.png'




const Home = () => {
    return (
        <div>
            <Carousel>
  <Carousel.Item>
    <img height={650}
     
      className="d-block w-100"
      src={sa}
      alt="First slide"
    />
    <Carousel.Caption>
      <h3>First slide label</h3>
      <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
    </Carousel.Caption>
  </Carousel.Item>
  <Carousel.Item>
    <img height={650}
      className="d-block w-100"
      src={sb}
      alt="Second slide"
    />

    <Carousel.Caption>
      <h3>Second slide label</h3>
      <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
    </Carousel.Caption>
  </Carousel.Item>
  <Carousel.Item>
    <img height={650}
     
      className="d-block w-100"
      src={sc}
      alt="Third slide"
    />

    <Carousel.Caption>
      <h3>Third slide label</h3>
      <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
    </Carousel.Caption>
  </Carousel.Item>
</Carousel>

        </div>
            
       
    );
};

export default Home;