import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

import './App.scss';

import SplashScreen from 'components/SplashScreen/SplashScreen';
import ErrorSnackbar from 'components/ErrorSnackbar/ErrorSnackbar';
import Header from 'components/Header/Header';
import { fetchCurrencies } from 'redux/actions/CurrenciesListActions';
import { checkFavouriteCurrency } from 'redux/actions/FavouriteCurrencyActions';

function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchCurrencies());
    dispatch(checkFavouriteCurrency());
  }, [dispatch]);

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
      <ErrorSnackbar />
    </div>
  );
}

export default App;
