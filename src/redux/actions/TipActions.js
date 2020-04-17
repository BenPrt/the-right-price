import ActionTypes from 'redux/ActionTypes';

export const toggleTipSection = (toggleValue) => {
  return {
    type: ActionTypes.toggleTipSection,
    toggleValue,
  };
};
export const selectTipValue = (tipValue) => {
  return {
    type: ActionTypes.selectTipValue,
    tipValue,
  };
};

export const setTipsList = (tipsList) => {
  return {
    type: ActionTypes.setTipsList,
    tipsList,
  };
};
export const fetchTipsList = () => {
  return (dispatch) => {
    const storedList = JSON.parse(localStorage.getItem('tipsList'));
    if (storedList) {
      dispatch(setTipsList(storedList));
    }
  };
};
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
  };
};
