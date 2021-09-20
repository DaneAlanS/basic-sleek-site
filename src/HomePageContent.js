import React from 'react';
import {Container, Row, Col, Image, Card, Button} from 'react-bootstrap';

import MountainRoads from './assets/mountain-roads.png';
import SnowLamp from './assets/snow-lamp.png';
import GirlInSnow from './assets/girl-in-snow.png';

function HomePage() {


  return (
  <Container fluid className="content">
      <Row className="why-us">
          <h1>Why You Want This Product/Service?</h1>
          <Row>
            <Col className="why-us-col"><i class="fas fa-laptop-house"></i><h3>Lorem ipsum dolor sit amet, consectetur adipiscing.</h3></Col>
            <Col className="why-us-col"><i class="fas fa-snowboarding"></i><h3>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</h3></Col>
            <Col className="why-us-col"><i class="fas fa-utensils"></i><h3>Lorem ipsum dolor sit amet, consectetur adipiscing elit </h3></Col>
            <Col className="why-us-col"><i class="fas fa-spa"></i><h3>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</h3></Col>
          </Row>
      </Row>
    <Row className="text-content-wrapper">
        <Col md={8}>
        <h3>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam ut eros eu velit luctus elementum sed et turpis. 
            Cras eget pellentesque eros. Mauris viverra luctus magna, quis consectetur dui rhoncus fringilla. In fermentum tempus feugiat. 
            Maecenas dictum vitae orci finibus viverra. Ut odio ligula, lobortis id porta sit amet, luctus id ex. Nulla eu egestas elit. 
            Morbi ipsum nisl, lobortis sed laoreet luctus, dapibus et ante. Vivamus a rhoncus metus. Aliquam quam mi, imperdiet in diam quis, 
            consequat aliquam sem.</h3>
        </Col>
        <Col>
            <Image src={GirlInSnow}></Image>
        </Col>
    </Row>
  </Container>
  );
}

export default HomePage;