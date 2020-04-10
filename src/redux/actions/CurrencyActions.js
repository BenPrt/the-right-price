import ActionTypes from 'redux/ActionTypes';

export const getCurrencies = () => {
  return {
    type: ActionTypes.getCurrencies,
    loading: true,
  };
};
export const getCurrenciesSuccess = (currencies) => {
  return {
    type: ActionTypes.getCurrenciesSuccess,
    currencies,
    loading: false,
  };
};
export const getCurrenciesError = (error) => {
  return {
    type: ActionTypes.getCurrenciesError,
    loading: false,
    error,
  };
};
export const fetchCurrencies = () => {
  return (dispatch) => {
    dispatch(getCurrencies());

    return fetch(
      // eslint-disable-next-line max-len
      'https://fcsapi.com/api-v2/forex/base_latest?symbol=USD&type=forex&access_key=HqorL3PDKx2pEWmrD9dusaQmPGzp0gi4h8fyE5qal9zKuHp',
      { method: 'GET' },
    )
      .then((response) => {
        if (!response.ok) {
          throw new Error('Error - 404 Not Found');
        }
        return response.json();
      })
      .then((body) => {
        dispatch(getCurrenciesSuccess(body.response));
      })
      .catch((error) => {
        console.error(error);
        dispatch(getCurrenciesError(error));
      });
  };
};
