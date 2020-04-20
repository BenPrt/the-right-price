import { combineReducers } from 'redux';
import SplashScreenReducer from './SplashScreenReducer';
import SettingsReducer from './SettingsReducer';
import CurrenciesReducer from './CurrenciesReducer';
import AmountReducer from './AmountReducer';
import TaxReducer from './TaxReducer';
import TipReducer from './TipReducer';
import ResultReducer from './ResultReducer';
import ErrorReducer from './ErrorReducer';

export default combineReducers({
  splashScreenIsDisplayed : SplashScreenReducer,
  settingsFrameIsDisplayed : SettingsReducer,
  currenciesData : CurrenciesReducer,
  amountData : AmountReducer,
  taxData : TaxReducer,
  tipData : TipReducer,
  resultData : ResultReducer,
  error : ErrorReducer,
});
