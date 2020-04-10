import ActionTypes from 'redux/ActionTypes';

const initialState = {
  loading: false,
  currenciesList: [],
  error: '',
};

export default (state = initialState, action) => {
  switch (action.type) {
    case ActionTypes.getCurrencies:
      return { ...state, loading: action.loading };
    case ActionTypes.getCurrenciesSuccess:
      if (action.currencies) {
        let currenciesList = Object.keys(action.currencies);
        currenciesList.sort();
        state.currenciesList = currenciesList;
      }
      return state;
    case ActionTypes.getCurrenciesError:
      return { ...state, loading: action.loading, error: action.error };
    default:
      return state;
  }
};
