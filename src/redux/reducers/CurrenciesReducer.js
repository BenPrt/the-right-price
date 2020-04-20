import ActionTypes from 'redux/ActionTypes';

const initialState = {
  loading: false,
  currenciesList: [],
  favoriteCurrency: {},
};

// Reducer handling the currencies list fetch and the favorite currency selection
export default (state = initialState, action) => {
  switch (action.type) {
    // Setting the loading state to true because the getCurrencies request has been made
    case ActionTypes.getCurrenciesRequest:
      return { ...state, loading: action.loading };
    // Setting the received and parsed currencies list
    case ActionTypes.getCurrenciesRequestSuccess:
      return {
        ...state,
        loading: action.loading,
        currenciesList: action.currencies,
      };
    // Stop the loading state because the request failed
    case ActionTypes.getCurrenciesRequestError:
      return { ...state, loading: action.loading };
    // Setting the selected favorite currency
    case ActionTypes.setFavoriteCurrency:
      return { ...state, favoriteCurrency: action.currency };
    default:
      return state;
  }
};
