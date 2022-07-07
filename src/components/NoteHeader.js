import React from 'react';


function NoteHeader({ handleChangeSearch }) {
  return (
    <div className="note-header">
      <h1>Notes App</h1>
      <input type="text" placeholder="Search Note...." onChange={handleChangeSearch} />
    </div>
  );
}

export default NoteHeader;
