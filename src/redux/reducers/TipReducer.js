import ActionTypes from 'redux/ActionTypes';

const initialState = {
  isEnabled: false,
  tipsOptions: [10, 15, 20],
  selectedTipValue: undefined,
  calculatedTipAmount: 0,
};

export default (state = initialState, action) => {
  switch (action.type) {
    case ActionTypes.toggleTipSection:
      return { ...state, isEnabled: action.toggleValue };
    case ActionTypes.selectTipValue:
      if (action.tipValue) {
        return { ...state, selectedTipValue: action.tipValue };
      }
      return { ...state, selectedTipValue: undefined };
    case ActionTypes.setTipsList:
      return { ...state, tipsOptions: action.tipsList };
    default:
      return state;
  }
};
