import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import Reducers from './reducers';

export default function configureStore(initialState={}) {
 return createStore(
   Reducers,
   initialState,
   applyMiddleware(thunk)
 );
}