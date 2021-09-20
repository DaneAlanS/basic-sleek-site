import './App.scss';

import {Container} from 'react-bootstrap';

import NavigationBar from './NavigationBar.js';
import HomePage from './HomePage.js';

function App() {
  return (
    <Container fluid className="App">
      <NavigationBar fixed="top"/>
      <HomePage/>
    </Container>
  );
}

export default App;
