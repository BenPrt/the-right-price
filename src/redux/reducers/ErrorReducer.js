import ActionTypes from 'redux/ActionTypes';

export default (state = '', action) => {
  switch (action.type) {
    case ActionTypes.getCurrenciesRequestError:
      return action.error;
    case ActionTypes.readError:
      return '';
    default:
      return state;
  }
};
