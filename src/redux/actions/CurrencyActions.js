import ActionTypes from 'redux/ActionTypes';

export const getCurrenciesRequest = () => {
  return {
    type: ActionTypes.getCurrenciesRequest,
    loading: true,
  };
};
export const getCurrenciesRequestSuccess = (currencies) => {
  return {
    type: ActionTypes.getCurrenciesRequestSuccess,
    currencies,
    loading: false,
  };
};
export const getCurrenciesRequestError = (error) => {
  return {
    type: ActionTypes.getCurrenciesRequestError,
    loading: false,
    error,
  };
};
export const fetchCurrencies = () => {
  return (dispatch) => {
    dispatch(getCurrenciesRequest());

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
        if (body.status) {
          localStorage.setItem(
            'lastReceivedCurrencies',
            JSON.stringify(body.response),
          );
        }
        if (
          JSON.parse(localStorage.getItem('lastReceivedCurrencies'))['USD'] === '1'
        ) {
          dispatch(
            getCurrenciesRequestSuccess(
              JSON.parse(localStorage.getItem('lastReceivedCurrencies')),
            ),
          );
        } else {
          console.error(
            'Currency requests limit reached, please retry in few minutes',
          );
          dispatch(getCurrenciesRequestError('Request limit reached'));
        }
      })
      .catch((error) => {
        console.error(error);
        dispatch(
          getCurrenciesRequestError(
            'Server unreachable, check your internet connection or retry in few minutes',
          ),
        );
      });
  };
};
