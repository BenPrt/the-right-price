import ActionTypes from 'redux/ActionTypes';

const initialState = {
  isEnabled: false,
  taxesOptions: [10, 12, 20],
  selectedTaxValue: 0,
  calculatedTaxAmount: 0,
};

export default (state = initialState, action) => {
  switch (action.type) {
    case ActionTypes.toggleTaxSection:
      return { ...state, isEnabled: action.toggleValue };
    case ActionTypes.selectTaxValue:
      const taxToSet = action.taxValue ? action.taxValue : 0;
      return { ...state, selectedTaxValue: taxToSet };
    case ActionTypes.setCalculatedTaxAmount:
      return { ...state, calculatedTaxAmount: action.calculatedValue };
    case ActionTypes.setTaxesList:
      return { ...state, taxesOptions: action.taxesList };
    default:
      return state;
  }
};
