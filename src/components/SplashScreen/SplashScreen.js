import React from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import InputLabel from '@material-ui/core/InputLabel';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';
import Button from '@material-ui/core/Button';

import './SplashScreen.scss';

import SplashScreenLogo from 'img/splashscreen_logo.svg';

class SplashScreen extends React.Component {
  currency = '';

  handleCurrencySelection = (event) => {
    alert(event.target.value);
  };

  render() {
    return (
      <div className="SplashScreen">
        <Container fluid>
          <Row className="justify-content-center">
            <Col xs={12} md={10} xl={6}>
              <Container>
                <Row className="justify-content-center">
                  <Col xs={6} md={4} xl={2}>
                    <img
                      alt="Splash Screen Logo"
                      src={SplashScreenLogo}
                      id="splashscreen-logo"
                    />
                  </Col>
                </Row>
                <Row className="justify-content-center">
                  <Col xs={6} md={4}>
                    <h1 id="app-title">
                      <span>The Right</span> Price
                    </h1>
                  </Col>
                </Row>
                <Row className="justify-content-center">
                  <Col xs={6}>
                    <p id="app-description">
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                      Leo aenean accumsan, mattis nibh proin auctor.
                    </p>
                  </Col>
                </Row>
                <Row className="justify-content-center">
                  <Col xs={6}>
                    <FormControl
                      variant="outlined"
                      className="currency-select-form"
                    >
                      <InputLabel htmlFor="currency-select-field">
                        Favorite Currency
                      </InputLabel>
                      <Select
                        native
                        value={this.currency}
                        onChange={this.handleCurrencySelection}
                        label="Favorite currency"
                        inputProps={{
                          name: 'currency',
                          id: 'currency-select-field',
                        }}
                      >
                        <option aria-label="None" value={''}></option>
                        <option value={'USD'}>US Dollars</option>
                        <option value={'CAD'}>Canadian Dollars</option>
                        <option value={'EUR'}>Euros</option>
                      </Select>
                    </FormControl>
                  </Col>
                </Row>
                <Row className="justify-content-center">
                  <Col xs={6}>
                    <Button id="get-started-button" variant="contained" color="primary">
                      Get Started
                    </Button>
                  </Col>
                </Row>
              </Container>
            </Col>
          </Row>
        </Container>
      </div>
    );
  }
}

export default SplashScreen;
