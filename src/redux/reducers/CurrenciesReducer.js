import ActionTypes from 'redux/ActionTypes';

const initialState = {
  loading: false,
  currenciesList: [],
  favouriteCurrency: {},
};

export default (state = initialState, action) => {
  switch (action.type) {
    case ActionTypes.getCurrenciesRequest:
      return { ...state, loading: action.loading };
    case ActionTypes.getCurrenciesRequestSuccess:
      if (action.currencies) {
        const currenciesList = Object.entries(
          action.currencies,
        ).map(([currency, rate]) => ({ name: currency, rate: rate }));
        currenciesList.sort((a, b) => {
          if (a.name > b.name) {
            return 1;
          }
          if (b.name > a.name) {
            return -1;
          }
          return 0;
        });
        state.currenciesList = currenciesList;
      }
      return state;
    case ActionTypes.getCurrenciesRequestError:
      return { ...state, loading: action.loading };
    case ActionTypes.setFavouriteCurrency:
      return { ...state, favouriteCurrency: action.currency };
    default:
      return state;
  }
};
