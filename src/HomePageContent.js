import React from 'react';
import {Container, Row, Col, Image} from 'react-bootstrap';

import MountainRoads from './assets/mountain-roads.png';

function HomePage() {


  return (
  <Container fluid>
    <Row className="text-content-wrapper">
        <Col md={8}>
        <h3>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam ut eros eu velit luctus elementum sed et turpis. 
            Cras eget pellentesque eros. Mauris viverra luctus magna, quis consectetur dui rhoncus fringilla. In fermentum tempus feugiat. 
            Maecenas dictum vitae orci finibus viverra. Ut odio ligula, lobortis id porta sit amet, luctus id ex. Nulla eu egestas elit. 
            Morbi ipsum nisl, lobortis sed laoreet luctus, dapibus et ante. Vivamus a rhoncus metus. Aliquam quam mi, imperdiet in diam quis, 
            consequat aliquam sem.</h3>
        </Col>
        <Col>
            <Image src={MountainRoads}></Image>
        </Col>
    </Row>
  </Container>
  );
}

export default HomePage;