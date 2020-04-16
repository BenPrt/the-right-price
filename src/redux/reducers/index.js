import { combineReducers } from 'redux';
import SplashScreenReducer from './SplashScreenReducer';
import CurrenciesReducer from './CurrenciesReducer';
import AmountReducer from './AmountReducer';
import TaxReducer from './TaxReducer';
import TipReducer from './TipReducer';
import ErrorReducer from './ErrorReducer';

export default combineReducers({
  splashScreenIsDisplayed : SplashScreenReducer,
  currenciesData : CurrenciesReducer,
  amountData : AmountReducer,
  taxData : TaxReducer,
  tipData : TipReducer,
  error : ErrorReducer,
});
