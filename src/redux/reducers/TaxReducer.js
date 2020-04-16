import ActionTypes from 'redux/ActionTypes';

const initialState = {
  isTaxSectionEnabled: false,
};

export default (state = initialState, action) => {
  switch (action.type) {
    case ActionTypes.toggleTaxSection:
      return {...state, isTaxSectionEnabled : action.toggleValue};
    default:
      return state;
  }
};
