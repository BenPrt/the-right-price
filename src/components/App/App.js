import React from 'react';
import Header from 'components/Header/Header';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

import './App.scss';

function App() {
  return (
    <div className="App">
      <Container fluid>
        <Row className="justify-content-center">
          <Col xs={12} sm={12} md={10} lg={6} xl={6}>
            <Header />
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default App;
