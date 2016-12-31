import React from 'react';

const NoteKey = ({note, pressed}) => (
  <div>
    {note}
    <br></br>
    {pressed.toString()}
  </div>
);

export default NoteKey;
