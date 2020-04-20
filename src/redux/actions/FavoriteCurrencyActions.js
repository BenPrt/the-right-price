import ActionTypes from 'redux/ActionTypes';
import { hideSplashScreen } from 'redux/actions/SplashScreenActions';

// - Actions and thunk managing the favorite currency selection (in the splashscreen 
// of in the settings panel)
// -- Action setting the new favorite currency
export const setFavoriteCurrency = (currency) => {
  return {
    type: ActionTypes.setFavoriteCurrency,
    currency,
  };
};
// -- Thunk called when a new favorite currency is selected, setting it in 
// local storage and dispatching the "set" action
export const updateFavoriteCurrency = (currency) => {
  return (dispatch) => {
    if (currency) {
      localStorage.setItem('favoriteCurrency', JSON.stringify(currency));
    } else {
      localStorage.removeItem('favoriteCurrency');
    }
    dispatch(setFavoriteCurrency(currency));
  };
};
// - Thunk called when page load, initializing the favorite currency data
export const checkFavoriteCurrency = () => {
  return (dispatch) => {
    const existingFavoriteCurrency = JSON.parse(
      localStorage.getItem('favoriteCurrency'),
    );
    if (existingFavoriteCurrency) {
      dispatch(setFavoriteCurrency(existingFavoriteCurrency));
      dispatch(hideSplashScreen());
    }
  };
};
