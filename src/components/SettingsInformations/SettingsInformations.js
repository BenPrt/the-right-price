import React from 'react';

import Container from 'react-bootstrap/Container';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';

import './SettingsInformations.scss';

function SettingsInformations() {
  return (
    <div className="SettingsInformations">
      <h3 id="informations-title">Informations</h3>
      <Container fluid>
        <Row className="informations-section">
          <Col className="informations-center-label" xs={7}>
            <p className="informations-label">Design</p>
          </Col>
          <Col xs={5}>
            <p className="informations-value">Katheleen Lemaire</p>
          </Col>
        </Row>
        <Row className="informations-section">
          <Col xs={7}>
            <p className="informations-label">Software Engineering</p>
          </Col>
          <Col xs={5}>
            <p className="informations-value">Benjamin Parant</p>
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default SettingsInformations;
