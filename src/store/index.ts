import { applyMiddleware, createStore, Store } from 'redux';
import thunkMiddleware from 'redux-thunk';
import { composeWithDevTools } from 'redux-devtools-extension';
import reducer from './reducer';

const store: Store = createStore(
  reducer,
  composeWithDevTools(
    applyMiddleware(
      thunkMiddleware,
    ),
  ),
);

export default store;
