import { combineReducers } from 'redux';
import itemReducer from './itemReducer';

// we can have any number of reducers we want, and export them from here.
export default combineReducers({
	item: itemReducer
});