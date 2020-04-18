import React from 'react';
import { useDispatch, useSelector } from 'react-redux';

import Container from 'react-bootstrap/Container';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import Chip from '@material-ui/core/Chip';
import NativeSelect from '@material-ui/core/NativeSelect';
import FormControl from '@material-ui/core/FormControl';
import DeleteForeverOutlinedIcon from '@material-ui/icons/DeleteForeverOutlined';

import './SettingsContent.scss';

import { removeTax } from 'redux/actions/TaxActions';
import { removeTip } from 'redux/actions/TipActions';
import { setFavoriteCurrency } from 'redux/actions/FavoriteCurrencyActions';

function SettingsContent() {
  const currenciesList = useSelector(
    (state) => state.currenciesData.currenciesList,
  );
  const favoriteCurrency = useSelector(
    (state) => state.currenciesData.favoriteCurrency,
  );
  const taxesList = useSelector((state) => state.taxData.taxesOptions);
  const tipsList = useSelector((state) => state.tipData.tipsOptions);

  const dispatch = useDispatch();

  const handleCurrencySelection = (event) => {
    dispatch(setFavoriteCurrency(currenciesList[event.target.value]));
  };

  const handleTaxDeletion = (tax) => {
    dispatch(removeTax(tax));
  };

  const handleTipDeletion = (tip) => {
    dispatch(removeTip(tip));
  };

  return (
    <div className="SettingsContent">
      <Container fluid>
        <Row className="settings-section">
          <Col className="settings-center-label" xs={7}>
            <p className="settings-label">Conversion currency</p>
          </Col>
          <Col xs={5}>
            <FormControl
              variant="outlined"
              className="settings-favorite-currency-form"
              disabled={!(currenciesList.length > 1)}
            >
              <NativeSelect
                onChange={handleCurrencySelection}
                label="Favorite currency"
                value={currenciesList.findIndex(
                  (cur) =>
                    cur &&
                    favoriteCurrency &&
                    cur.name === favoriteCurrency.name,
                )}
                inputProps={{
                  name: 'favorite-currency',
                  id: 'favorite-currency-select-field',
                }}
              >
                <option aria-label="None" value="" />
                {currenciesList.map((currency, index) => (
                  <option key={index} value={index}>
                    {currency.name}
                  </option>
                ))}
              </NativeSelect>
            </FormControl>
          </Col>
        </Row>
        <Row className="settings-section">
          <Col xs={7}>
            <p className="settings-label">Tax percentages</p>
          </Col>
          <Col xs={5}>
            {taxesList.map((tax, index) => (
              <div key={`tax-${index}`} className="settings-percentage-wrapper">
                <p className="settings-percentage-value">{tax}%</p>
                <Chip
                  icon={<DeleteForeverOutlinedIcon />}
                  label="Delete"
                  clickable
                  onClick={handleTaxDeletion.bind(this, tax)}
                />
              </div>
            ))}
          </Col>
        </Row>
        <Row className="settings-section">
          <Col xs={7}>
            <p className="settings-label">Tip percentages</p>
          </Col>
          <Col xs={5}>
            {tipsList.map((tip, index) => (
              <div key={`tip-${index}`} className="settings-percentage-wrapper">
                <p className="settings-percentage-value">{tip}%</p>
                <Chip
                  icon={<DeleteForeverOutlinedIcon />}
                  label="Delete"
                  clickable
                  onClick={handleTipDeletion.bind(this, tip)}
                />
              </div>
            ))}
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default SettingsContent;
