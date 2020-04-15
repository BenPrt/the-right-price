import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

import './App.scss';

import SplashScreen from 'components/SplashScreen/SplashScreen';
import ErrorSnackbar from 'components/ErrorSnackbar/ErrorSnackbar';
import Header from 'components/Header/Header';
import Amount from 'components/Amount/Amount';
import { fetchCurrencies } from 'redux/actions/CurrenciesListActions';
import { checkFavoriteCurrency } from 'redux/actions/FavoriteCurrencyActions';

function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchCurrencies());
    dispatch(checkFavoriteCurrency());
  }, [dispatch]);

  return (
    <div className="App">
      <SplashScreen />
      <Container fluid>
        <Row className="justify-content-center">
          <Col xs={12} md={10} lg={6}>
            <Header />
            <Amount />
          </Col>
        </Row>
      </Container>
      <ErrorSnackbar />
    </div>
  );
}

export default App;
