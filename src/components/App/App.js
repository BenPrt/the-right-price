import React from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

import './App.scss';

import SplashScreen from 'components/SplashScreen/SplashScreen';
import Header from 'components/Header/Header';

class App extends React.Component {
  render() {
    return (
      <div className="App">
        <SplashScreen />
        <Container fluid>
          <Row className="justify-content-center">
            <Col xs={12} md={10} lg={6}>
              <Header />
            </Col>
          </Row>
        </Container>
      </div>
    );
  }
}

export default App;