import {
  setConvertedTotalAmount,
  setCalculatedTotalAmount,
} from 'redux/actions/ResultActions';
import {
  setSelectedTipValue,
  setTipSectionToggleValue,
  setCalculatedTipAmount,
} from 'redux/actions/TipActions';
import {
  setSelectedTaxValue,
  setTaxSectionToggleValue,
  setCalculatedTaxAmount,
} from 'redux/actions/TaxActions';
import { setAmountValue } from 'redux/actions/AmountInputActions';

// - Thunk reseting all the calculation-based values
export const resetApp = () => {
  return (dispatch) => {
    dispatch(setConvertedTotalAmount(0));
    dispatch(setCalculatedTotalAmount(0));
    dispatch(setCalculatedTipAmount(0));
    dispatch(setSelectedTipValue());
    dispatch(setTipSectionToggleValue(false));
    dispatch(setCalculatedTaxAmount(0));
    dispatch(setSelectedTaxValue());
    dispatch(setTaxSectionToggleValue(false));
    dispatch(setAmountValue());
  };
};
