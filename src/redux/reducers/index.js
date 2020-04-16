import { combineReducers } from 'redux';
import SplashScreenReducer from './SplashScreenReducer';
import CurrenciesReducer from './CurrenciesReducer';
import ErrorReducer from './ErrorReducer';
import AmountReducer from './AmountReducer';
import TaxReducer from './TaxReducer';

export default combineReducers({
  splashScreenIsDisplayed : SplashScreenReducer,
  currenciesData : CurrenciesReducer,
  amountData : AmountReducer,
  taxData : TaxReducer,
  error : ErrorReducer,
});
