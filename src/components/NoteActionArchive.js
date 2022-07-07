import React from 'react';

function NoteActionArchive({ id, onArchive, archive }) {
  return (
    <>
      <button className="note__button-arsip" onClick={() => onArchive(id)}>
        {archive}
      </button>
    </>
  );
}

export default NoteActionArchive;
