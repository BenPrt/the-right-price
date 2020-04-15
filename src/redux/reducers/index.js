import { combineReducers } from 'redux';
import SplashScreenReducer from './SplashScreenReducer';
import CurrenciesReducer from './CurrenciesReducer';
import ErrorReducer from './ErrorReducer';
import AmountReducer from './AmountReducer';

export default combineReducers({
  splashScreenIsDisplayed : SplashScreenReducer,
  currenciesData : CurrenciesReducer,
  amountData : AmountReducer,
  error : ErrorReducer,
});
