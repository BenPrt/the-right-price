import ActionTypes from 'redux/ActionTypes';

const initialState = {
  isEnabled: false,
  taxesOptions: [5, 8.5, 10],
  selectedTaxValue: 0,
  calculatedTaxAmount: 0,
};

// Reducer handling the tax section data
export default (state = initialState, action) => {
  switch (action.type) {
    // Setting the tax section toggle value
    case ActionTypes.toggleTaxSection:
      return { ...state, isEnabled: action.toggleValue };
    // Setting the selected tax value
    case ActionTypes.selectTaxValue:
      return {
        ...state,
        selectedTaxValue: action.taxValue ? action.taxValue : 0,
      };
    // Setting the calculated tax amount value
    case ActionTypes.setCalculatedTaxAmount:
      return { ...state, calculatedTaxAmount: action.calculatedValue };
    // Setting the taxes list options
    case ActionTypes.setTaxesList:
      return { ...state, taxesOptions: action.taxesList };
    default:
      return state;
  }
};
