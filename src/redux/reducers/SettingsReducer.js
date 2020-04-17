import ActionTypes from 'redux/ActionTypes';

export default (state = false, action) => {
  switch (action.type) {
    case ActionTypes.toggleSettings:
      return action.toggleValue;
    default:
      return state;
  }
};
