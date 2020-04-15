import React from 'react';
import { useDispatch, useSelector } from 'react-redux';

import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import InputLabel from '@material-ui/core/InputLabel';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';
import Button from '@material-ui/core/Button';

import { setFavouriteCurrency } from 'redux/actions/FavouriteCurrencyActions';
import { hideSplashScreen } from 'redux/actions/SplashScreenActions';
import './SplashScreen.scss';

import SplashScreenLogo from 'img/splashscreen_logo.svg';

function SplashScreen() {
  const isSplashScreenDisplayed = useSelector(
    (state) => state.splashScreenIsDisplayed,
  );
  const currenciesList = useSelector(
    (state) => state.currenciesData.currenciesList,
  );
  const favouriteCurrency = useSelector(
    (state) => state.currenciesData.favouriteCurrency,
  );

  const dispatch = useDispatch();

  const handleCurrencySelection = (event) => {
    dispatch(setFavouriteCurrency(currenciesList[event.target.value]));
  };

  return (
    <div className="SplashScreen">
      <div
        className={`splash-screen-overlay ${
          isSplashScreenDisplayed ? '' : 'hidden'
        }`}
      ></div>
      <div
        className={`splash-screen-frame ${
          isSplashScreenDisplayed ? '' : 'hidden'
        }`}
      >
        <Container fluid>
          <Row className="justify-content-center">
            <Col xs={12} md={10} xl={6}>
              <Container>
                <Row className="justify-content-center">
                  <Col xs={6} md={3}>
                    <img
                      alt="Splash Screen Logo"
                      src={SplashScreenLogo}
                      id="splashscreen-logo"
                    />
                  </Col>
                </Row>
                <Row className="justify-content-center">
                  <Col xs={7} md={4}>
                    <h1 id="app-title">
                      <span>The Right</span> Price
                    </h1>
                  </Col>
                </Row>
                <Row className="justify-content-center">
                  <Col xs={8} md={6}>
                    <p id="app-description">
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                      Leo aenean accumsan, mattis nibh proin auctor.
                    </p>
                  </Col>
                </Row>
                <Row className="justify-content-center">
                  <Col xs={10} md={6}>
                    <FormControl
                      variant="outlined"
                      className="currency-select-form"
                      disabled={!(currenciesList.length > 1)}
                    >
                      <InputLabel htmlFor="currency-select-field">
                        Favorite Currency
                      </InputLabel>
                      <Select
                        native
                        onChange={handleCurrencySelection}
                        label="Favorite currency"
                        value={currenciesList.findIndex(
                          (cur) =>
                            cur &&
                            favouriteCurrency &&
                            cur.name === favouriteCurrency.name,
                        )}
                        inputProps={{
                          name: 'currency',
                          id: 'currency-select-field',
                        }}
                      >
                        <option aria-label="None" value="" />
                        {currenciesList.map((currency, index) => (
                          <option key={index} value={index}>
                            {currency.name}
                          </option>
                        ))}
                      </Select>
                    </FormControl>
                  </Col>
                </Row>
                <Row className="justify-content-center">
                  <Col xs={10} md={6}>
                    <Button
                      id="get-started-button"
                      variant="contained"
                      color="primary"
                      onClick={() => dispatch(hideSplashScreen())}
                    >
                      Get Started <i className="fas fa-arrow-right"></i>
                    </Button>
                  </Col>
                </Row>
              </Container>
            </Col>
          </Row>
        </Container>
      </div>
    </div>
  );
}

export default SplashScreen;
