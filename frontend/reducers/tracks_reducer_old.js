import {START_RECORDING, STOP_RECORDING, ADD_NOTES} from '../../actions/tracks_actions';
import merge from 'lodash/merge';

let currTrackId = 0;

const tracksReducer = (state = {}, action) => {
  Object.freeze(state);
  switch(action.type) {
    case START_RECORDING:
      currTrackId++;
      const newTrack = {
        id: currTrackId,
        name: `Track ${currTrackId}`,
        roll: [],
        timeStart: action.timeNow
      };
      return merge(state, {newTrack);
    case STOP_RECORDING:
      state[currTrackId]
    timeSlice with action.timeNow - state[currTrackId].timeStart

      return ;
    case ADD_NOTES:
      return ;
    default:
      return state;
  }

};

export default tracksReducer;
