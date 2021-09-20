import React from 'react';
import {Navbar, Container, Row, Col, Image, Button} from 'react-bootstrap';

import HomePageContent from './HomePageContent.js';

import Alps from './assets/alps.png';

function HomePage() {


  return (
  <Container fluid>
    <Row className="homepage-image-wrapper">
        <Image fluid src={Alps}/>
        <div className="image-text-overlay">
            <Row className="overlay-text-wrapper">
                <h1>Big Example Text Across Image That Really Sells.</h1>
                <Button>Click This Example Button</Button>
            </Row>
        </div>
    </Row>
    <HomePageContent/>
  </Container>
  );
}

export default HomePage;