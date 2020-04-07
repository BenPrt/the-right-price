import ActionTypes from 'redux/ActionTypes';

export default (state = true, action) => {
  switch (action.type) {
    case ActionTypes.hideSplashScreen:
      return false;
    default:
      return state;
  }
};
