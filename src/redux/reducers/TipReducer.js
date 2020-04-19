import ActionTypes from 'redux/ActionTypes';

const initialState = {
  isEnabled: false,
  tipsOptions: [10, 15, 20],
  selectedTipValue: 0,
  calculatedTipAmount: 0,
};

export default (state = initialState, action) => {
  switch (action.type) {
    case ActionTypes.toggleTipSection:
      return { ...state, isEnabled: action.toggleValue };
    case ActionTypes.selectTipValue:
      const tipToSet = action.tipValue ? action.tipValue : 0;
      return { ...state, selectedTipValue: tipToSet };
    case ActionTypes.setCalculatedTipAmount:
      return { ...state, calculatedTipAmount: action.calculatedValue };
    case ActionTypes.setTipsList:
      return { ...state, tipsOptions: action.tipsList };
    default:
      return state;
  }
};
