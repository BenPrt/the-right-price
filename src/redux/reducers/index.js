import { combineReducers } from 'redux';
import SplashScreenReducer from './SplashScreenReducer';
import CurrenciesReducer from './CurrenciesReducer';

export default combineReducers({
  splashScreenIsDisplayed : SplashScreenReducer,
  currenciesData : CurrenciesReducer,
});
