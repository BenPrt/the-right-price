import ActionTypes from 'redux/ActionTypes';
import { updateCalculatedValues } from './ResultActions';

// Action toggling the Tip Section display
export const setTipSectionToggleValue = (toggleValue) => {
  return {
    type: ActionTypes.toggleTipSection,
    toggleValue,
  };
};
export const toggleTipSection = (toggleValue) => {
  return (dispatch) => {
    dispatch(setTipSectionToggleValue(toggleValue));
    dispatch(updateCalculatedValues());
  };
};

// Action and thunk handling the tip percentage selection
export const setSelectedTipValue = (tipValue) => {
  return {
    type: ActionTypes.selectTipValue,
    tipValue,
  };
};
export const selectTipValue = (tipValue) => {
  return (dispatch) => {
    dispatch(setSelectedTipValue(tipValue));
    dispatch(updateCalculatedValues());
  };
};

// Action and thunks handling the tips list update, storage and fetch
// Action setting updated tipss list
export const setTipsList = (tipsList) => {
  return {
    type: ActionTypes.setTipsList,
    tipsList,
  };
};
// Thunk fetching the tips list from local storage, called when component init
export const fetchTipsList = () => {
  return (dispatch) => {
    const storedList = JSON.parse(localStorage.getItem('tipsList'));
    if (storedList) {
      dispatch(setTipsList(storedList));
    }
  };
};
// Thunk called when a new tax is added, updating the list then storing it
export const insertNewTip = (percentage) => {
  return (dispatch, getState) => {
    let storedList = JSON.parse(localStorage.getItem('tipsList'));
    if (!storedList) {
      storedList = Object.assign([], getState().tipData.tipsOptions);
    }
    if (storedList.indexOf(percentage) === -1) {
      storedList.push(percentage);
      storedList.sort((a, b) => a - b);
    }
    localStorage.setItem('tipsList', JSON.stringify(storedList));
    dispatch(setTipsList(storedList));
    dispatch(selectTipValue(percentage));
  };
};
// Thunk handling the tax deletion from the taxes list
export const removeTip = (percentage) => {
  return (dispatch, getState) => {
    if (getState().tipData.selectedTipValue === percentage) {
      dispatch(selectTipValue());
    }
    const actualTipValues = getState().tipData.tipsOptions;
    const newTipValues = actualTipValues.filter((tip) => tip !== percentage);
    localStorage.setItem('tipsList', JSON.stringify(newTipValues));
    dispatch(setTipsList(newTipValues));
  };
};

// Action setting the calculated tip amount (calculations are made in CalculationActions file)
export const setCalculatedTipAmount = (calculatedValue) => {
  return {
    type: ActionTypes.setCalculatedTipAmount,
    calculatedValue,
  };
};
