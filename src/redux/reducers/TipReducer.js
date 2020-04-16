import ActionTypes from 'redux/ActionTypes';

const initialState = {
  isEnabled: false,
};

export default (state = initialState, action) => {
  switch (action.type) {
    case ActionTypes.toggleTipSection:
      return {...state, isEnabled : action.toggleValue};
    default:
      return state;
  }
};
