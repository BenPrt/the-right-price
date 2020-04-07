import { combineReducers } from 'redux';
import SplashScreenReducer from './SplashScreenReducer';

export default combineReducers({
  splashScreenIsDisplayed : SplashScreenReducer,
});
