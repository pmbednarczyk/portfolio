import { combineReducers } from 'redux';
import { routerReducer } from 'react-router-redux'
import backButton from './backButton';

const rootReducer = combineReducers({
  backButton,
  routing: routerReducer
});

export default rootReducer;
