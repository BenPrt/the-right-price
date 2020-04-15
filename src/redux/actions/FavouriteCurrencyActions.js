import ActionTypes from 'redux/ActionTypes';
import { hideSplashScreen } from 'redux/actions/SplashScreenActions';

export const setFavouriteCurrencyState = (currency) => {
  return {
    type: ActionTypes.setFavouriteCurrency,
    currency,
  };
};
export const setFavouriteCurrency = (currency) => {
  return (dispatch) => {
    localStorage.setItem('favouriteCurrency', JSON.stringify(currency));
    dispatch(setFavouriteCurrencyState(currency));
  };
};
export const checkFavouriteCurrency = () => {
  return (dispatch) => {
    const existingFavouriteCurrency = JSON.parse(
      localStorage.getItem('favouriteCurrency'),
    );
    if (existingFavouriteCurrency) {
      dispatch(setFavouriteCurrencyState(existingFavouriteCurrency));
      dispatch(hideSplashScreen());
    }
  };
};
