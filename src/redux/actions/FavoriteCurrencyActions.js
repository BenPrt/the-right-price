import ActionTypes from 'redux/ActionTypes';
import { hideSplashScreen } from 'redux/actions/SplashScreenActions';

export const setFavoriteCurrencyState = (currency) => {
  return {
    type: ActionTypes.setFavoriteCurrency,
    currency,
  };
};
export const setFavoriteCurrency = (currency) => {
  return (dispatch) => {
    if (currency) {
      localStorage.setItem('favoriteCurrency', JSON.stringify(currency));
    } else {
      localStorage.removeItem('favoriteCurrency');
    }
    dispatch(setFavoriteCurrencyState(currency));
  };
};
export const checkFavoriteCurrency = () => {
  return (dispatch) => {
    const existingFavoriteCurrency = JSON.parse(
      localStorage.getItem('favoriteCurrency'),
    );
    if (existingFavoriteCurrency) {
      dispatch(setFavoriteCurrencyState(existingFavoriteCurrency));
      dispatch(hideSplashScreen());
    }
  };
};
