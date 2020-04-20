import ActionTypes from 'redux/ActionTypes';
import { mockedCurrenciesCall } from 'currenciesData';

// - Action called when the request to get the currencies list is made
export const getCurrenciesRequest = () => {
  return {
    type: ActionTypes.getCurrenciesRequest,
    loading: true,
  };
};

// - Action called when the request to get the currencies list success
export const getCurrenciesRequestSuccess = (currencies) => {
  return {
    type: ActionTypes.getCurrenciesRequestSuccess,
    currencies,
    loading: false,
  };
};

// - Action called when the request to get the currencies list fails
export const getCurrenciesRequestError = (error) => {
  return {
    type: ActionTypes.getCurrenciesRequestError,
    loading: false,
    errorMessage: error,
  };
};

// - Thunk making the API call to get the currencies list and dispatching
// actions according to the request result
export const fetchCurrencies = () => {
  return (dispatch) => {
    dispatch(getCurrenciesRequest());

    // return fetch(
    //   // eslint-disable-next-line max-len
    //   'https://fcsapi.com/api-v2/forex/base_latest?symbol=USD&type=forex&access_key=HqorL3PDKx2pEWmrD9dusaQmPGzp0gi4h8fyE5qal9zKuHp',
    //   { method: 'GET' },
    // )
    const mockedCall = new Promise((resolve, reject) => {
      resolve(mockedCurrenciesCall);
    });

    return (
      mockedCall
        // .then((response) => {
        //   if (!response.ok) {
        //     throw new Error('Error - 404 Not Found');
        //   }
        //   return response.json();
        // })
        .then((body) => {
          if (body.status) {
            localStorage.setItem(
              'lastReceivedCurrencies',
              JSON.stringify(body.response),
            );
          }
          const retrievedCurrencies = JSON.parse(
            localStorage.getItem('lastReceivedCurrencies'),
          );
          if (retrievedCurrencies) {
            // We clean the fetched data
            const parsedCurrencies = parseCurrenciesData(retrievedCurrencies);
            dispatch(getCurrenciesRequestSuccess(parsedCurrencies));
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
        })
    );
  };
};

// - Function parsing currencies list data (array of 3 letters currencies
// object with its rates, alphabetically sorted )
const parseCurrenciesData = (currencies) => {
  return Object.entries(currencies)
    .map(([currency, rate]) => {
      return { name: currency, rate: rate };
    })
    .filter((currency) => {
      return currency.name.length <= 3;
    })
    .sort((a, b) => {
      if (a.name > b.name) {
        return 1;
      }
      if (b.name > a.name) {
        return -1;
      }
      return 0;
    });
};
