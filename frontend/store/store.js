import {createStore} from 'redux';
import rootReducer from '../reducers/root_reducer';

const preloadedState = {
  notes: ['a']
};

// const configureStore = createStore(rootReducer, preloadedState);
const configureStore = (state = preloadedState) => {
  return createStore(rootReducer, state);
};

export default configureStore;
