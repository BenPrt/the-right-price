export const ActionTypes = {
  // Splash Screen Actions
  hideSplashScreen: 'HIDE_SPLASH_SCREEN',
  // Error Snackbar Actions
  readError: 'READ_ERROR',
  // Currencies Actions
  getCurrenciesRequest: 'GET_CURRENCIES_REQUEST',
  getCurrenciesRequestSuccess: 'GET_CURRENCIES_REQUEST_SUCCESS',
  getCurrenciesRequestError: 'GET_CURRENCIES_REQUEST_ERROR',
  // Favorite Currency Actions
  setFavoriteCurrency: 'SET_Favorite_CURRENCY',
  // Amount Inputs Actions
  updateAmountValue: 'UPDATE_AMOUNT_VALUE',
  updateAmountCurrency: 'UPDATE_AMOUNT_CURRENCY',
  // Tax Section Actions
  toggleTaxSection: 'TOGGLE_TAX_SECTION',
  selectTaxValue: 'SELECT_TAX_VALUE',
  setTaxesList: 'SET_TAXES_LIST',
  // Tip Section Actions
  toggleTipSection: 'TOGGLE_TIP_SECTION',
  selectTipValue: 'SELECT_TIP_VALUE',
  setTipsList: 'SET_TIPS_LIST',
};

export default ActionTypes;
