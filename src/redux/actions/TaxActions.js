import ActionTypes from 'redux/ActionTypes';

export const toggleTaxSection = (toggleValue) => {
  return {
    type: ActionTypes.toggleTaxSection,
    toggleValue,
  };
};
export const selectTaxValue = (taxValue) => {
  return {
    type: ActionTypes.selectTaxValue,
    taxValue,
  };
};

export const setTaxesList = (taxesList) => {
  return {
    type: ActionTypes.setTaxesList,
    taxesList,
  };
};
export const fetchTaxesList = () => {
  return (dispatch) => {
    const storedList = JSON.parse(localStorage.getItem('taxesList'));
    if (storedList) {
      dispatch(setTaxesList(storedList));
    }
  };
};
export const insertNewTax = (percentage) => {
  return (dispatch, getState) => {
    let storedList = JSON.parse(localStorage.getItem('taxesList'));
    if (!storedList) {
      storedList = Object.assign([], getState().taxData.taxesOptions);
    }
    if (storedList.indexOf(percentage) === -1) {
      storedList.push(percentage);
      storedList.sort((a, b) => a - b);
    }
    localStorage.setItem('taxesList', JSON.stringify(storedList));
    dispatch(setTaxesList(storedList));
    dispatch(selectTaxValue(percentage));
  };
};

export const removeTax = (percentage) => {
  return (dispatch, getState) => {
    if (getState().taxData.selectedTaxValue === percentage) {
      dispatch(selectTaxValue());
    }
    const actualTaxValues = getState().taxData.taxesOptions;
    const newTaxValues = actualTaxValues.filter((tax) => tax !== percentage);
    localStorage.setItem('taxesList', JSON.stringify(newTaxValues));
    dispatch(setTaxesList(newTaxValues));
  };
};