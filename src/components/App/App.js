import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

import './App.scss';

import SplashScreen from 'components/SplashScreen/SplashScreen';
import ErrorSnackbar from 'components/ErrorSnackbar/ErrorSnackbar';
import SettingsPanel from 'components/SettingsPanel/SettingsPanel';
import Header from 'components/Header/Header';
import AmountSection from 'components/AmountSection/AmountSection';
import TaxSection from 'components/TaxSection/TaxSection';
import TipSection from 'components/TipSection/TipSection';
import ResultSection from 'components/ResultSection/ResultSection';
import { fetchCurrencies } from 'redux/actions/CurrenciesListActions';
import { checkFavoriteCurrency } from 'redux/actions/FavoriteCurrencyActions';

function App() {
  const dispatch = useDispatch();

  const calculateViewPortUnit = () => {
    const vh = window.innerHeight * 0.01;
    document.documentElement.style.setProperty('--vh', `${vh}px`);
  };

  useEffect(() => {
    const initAppViewPortHeight = () => {
      calculateViewPortUnit();
      window.addEventListener('resize', () => {
        calculateViewPortUnit();
      });
    };
  
    initAppViewPortHeight();
    dispatch(fetchCurrencies());
    dispatch(checkFavoriteCurrency());
  }, [dispatch]);

  return (
    <div className="App">
      <SplashScreen />
      <SettingsPanel />
      <Container fluid>
        <Row className="justify-content-center">
          <Col xs={12} md={10} lg={6}>
            <Header />
            <AmountSection />
            <TaxSection />
            <TipSection />
            <ResultSection />
          </Col>
        </Row>
      </Container>
      <ErrorSnackbar />
    </div>
  );
}

export default App;
