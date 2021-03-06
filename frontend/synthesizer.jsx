import React from 'react';
import ReactDOM from 'react-dom';
import Note from './util/note';
import configureStore from './store/store';
import Root from './components/root';

// window.Note = new Note(800);

document.addEventListener("DOMContentLoaded", () => {
  const store = configureStore();
  const rootEl = document.getElementById('root');
  ReactDOM.render(<Root store={store}/>, rootEl);

  window.store = store; // for testing
  console.log(store.getState().notes);
});
