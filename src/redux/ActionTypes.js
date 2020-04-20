export const ActionTypes = {
  // Splash Screen Actions
  hideSplashScreen: 'HIDE_SPLASH_SCREEN',
  // SettingsFrame Actions
  toggleSettings: 'TOGGLE_SETTINGS',
  // Error Snackbar Actions
  readError: 'READ_ERROR',
  // Currencies Actions
  getCurrenciesRequest: 'GET_CURRENCIES_REQUEST',
  getCurrenciesRequestSuccess: 'GET_CURRENCIES_REQUEST_SUCCESS',
  getCurrenciesRequestError: 'GET_CURRENCIES_REQUEST_ERROR',
  // Favorite Currency Actions
  setFavoriteCurrency: 'SET_Favorite_CURRENCY',
  // Amount Inputs Actions
  setAmountValue: 'SET_AMOUNT_VALUE',
  setAmountCurrency: 'SET_AMOUNT_CURRENCY',
  // Tax Section Actions
  toggleTaxSection: 'TOGGLE_TAX_SECTION',
  selectTaxValue: 'SELECT_TAX_VALUE',
  setCalculatedTaxAmount: 'SET_CALCULATED_TAX_AMOUNT',
  setTaxesList: 'SET_TAXES_LIST',
  deleteTaxValue: 'DELETE_TAX_VALUE',
  // Tip Section Actions
  toggleTipSection: 'TOGGLE_TIP_SECTION',
  selectTipValue: 'SELECT_TIP_VALUE',
  setCalculatedTipAmount: 'SET_CALCULATED_TIP_AMOUNT',
  setTipsList: 'SET_TIPS_LIST',
  deleteTipValue: 'DELETE_TIP_VALUE',
  // Result Section Actions
  setCalculatedTotalAmount: 'SET_CALCULATED_TOTAL_AMOUNT',
  setConvertedTotalAmount: 'SET_CONVERTED_TOTAL_AMOUNT',
};

export default ActionTypes;
