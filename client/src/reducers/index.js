import { combineReducers } from 'redux';
import produtos from './produtos';
import title from './title';

export default combineReducers({
  produtos,
  title
});