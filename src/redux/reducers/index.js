import { combineReducers } from 'redux';
import SplashScreenReducer from './SplashScreenReducer';
import CurrenciesReducer from './CurrenciesReducer';
import ErrorReducer from './ErrorReducer';

export default combineReducers({
  splashScreenIsDisplayed : SplashScreenReducer,
  currenciesData : CurrenciesReducer,
  error : ErrorReducer,
});
