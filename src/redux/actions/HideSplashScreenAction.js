import ActionTypes from 'redux/ActionTypes';

export const hideSplashScreen = () => {
  return {
    type: ActionTypes.hideSplashScreen,
    displayValue: false,
  };
};
