import {connect} from 'react-redux';
import Recorder from './recorder';
import { startRecording,
         stopRecording,
         addNotes
       } from '../../actions/tracks_actions';

const mapStateToProps = (state) => ({
  isPlaying: state.isPlaying,
  isRecording: state.isRecording
});

const mapDispatchToProps = (dispatch) => ({
   startRecording: () => dispatch(startRecording()),
   stopRecording: () => dispatch(stopRecording())
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Recorder);
