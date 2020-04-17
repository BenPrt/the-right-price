import ActionTypes from 'redux/ActionTypes';

const initialState = {
  loading: false,
  currenciesList: [],
  favoriteCurrency: {},
};

export default (state = initialState, action) => {
  switch (action.type) {
    case ActionTypes.getCurrenciesRequest:
      return { ...state, loading: action.loading };
    case ActionTypes.getCurrenciesRequestSuccess:
      if (action.currencies) {
        const currenciesList = Object.entries(action.currencies).map(
          ([currency, rate]) => {
            if (currency.length <= 3) {
              return { name: currency, rate: rate };
            }
            return false;
          },
        );
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
    case ActionTypes.setFavoriteCurrency:
      return { ...state, favoriteCurrency: action.currency };
    default:
      return state;
  }
};
