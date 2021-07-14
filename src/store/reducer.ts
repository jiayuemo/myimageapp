import { combineReducers } from 'redux';
import image from './image/reducer';
import error from './error/reducer';
import loading from './loading/reducer';

const reducer = combineReducers({
  image,
  error,
  loading,
});

export default reducer;
