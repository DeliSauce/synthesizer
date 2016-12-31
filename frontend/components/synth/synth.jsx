import React from 'react';
import {NOTE_NAMES, TONES} from '../../util/tones';
import Note from '../../util/note';
import $ from 'jquery';
import NoteKey from './note_key';

class Synth extends React.Component {
  constructor(props){
    super(props);
    this.notes = NOTE_NAMES.map((note) => new Note(TONES[note]));
    console.log(this.notes);
  }

  onKeyDown(e) {
    console.log(`you pressed ${e.key}`);
    this.props.keyPressed(e.key);
  }

  onKeyUp(e) {
    this.props.keyReleased(e.key);
    console.log(`you released ${e.key}`);
  }

  componentDidMount() {
    $(document).on('keydown', e => this.onKeyDown(e));
    $(document).on('keyup', e => this.onKeyUp(e));
  }

  playNotes() {
    NOTE_NAMES.forEach((note, idx) => {
      if (this.props.notes.includes(note)) {
        this.notes[idx].start();
      } else {
        this.notes[idx].stop();
      }
    });
  }

  render() {
    const noteKeys = NOTE_NAMES.map((note, idx) => (
      <NoteKey key={idx} note={note} pressed={this.props.notes.includes(note)} />
    ));

    this.playNotes();
    return (
      <div>
        {noteKeys}
      </div>
    );
  }
}

export default Synth;
