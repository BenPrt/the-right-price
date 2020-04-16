import ActionTypes from 'redux/ActionTypes';

const initialState = {
  isEnabled: false,
  taxesOptions: [10, 12, 20],
  selectedTaxValue: undefined,
  calculatedTaxAmount: 0,
};

export default (state = initialState, action) => {
  switch (action.type) {
    case ActionTypes.toggleTaxSection:
      return { ...state, isEnabled: action.toggleValue };
    case ActionTypes.selectTaxValue:
      return { ...state, selectedTaxValue: action.taxValue };
    case ActionTypes.addNewTaxPercentage:
      const newTaxList = Object.assign([], state.taxesOptions);
      newTaxList.push(action.percentage);
      newTaxList.sort((a, b) => a - b);
      return { ...state, taxesOptions: newTaxList };
    default:
      return state;
  }
};
