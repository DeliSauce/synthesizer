import {KEY_PRESSED, KEY_RELEASED, GROUP_UPDATE} from '../actions/notes_actions.js';
import {NOTE_NAMES} from '../util/tones';

const notesReducer = (state = [], action) => {
  Object.freeze(state);
  const validNote = NOTE_NAMES.includes(action.key);
  // console.log("keying");
  const idx = state.indexOf(action.key);

  switch(action.type) {
    case KEY_PRESSED:
      // console.log("key pressed");
      if (validNote && idx === -1) {
        return [...state, action.key];
      } else {
        return state;
      }

    case KEY_RELEASED:
      if (state.includes(action.key)) {
        return [...state.slice(0, idx), ...state.slice(idx + 1)];
      } else {
        return state;
      }

    case GROUP_UPDATE:
      return action.notes;

    default:
      return state;
  }
};

export default notesReducer;
