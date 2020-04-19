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
            <a
              href="https://www.behance.net/KatheleenLmr"
              target="_blank"
              rel="noopener noreferrer"
              className="informations-value"
            >
              Katheleen Lemaire
            </a>
          </Col>
        </Row>
        <Row className="informations-section">
          <Col xs={7}>
            <p className="informations-label">Software Engineering</p>
          </Col>
          <Col xs={5}>
            <a
              href="https://github.com/BenPrt"
              target="_blank"
              rel="noopener noreferrer"
              className="informations-value"
            >
              Benjamin Parant
            </a>
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default SettingsInformations;
