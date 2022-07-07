import React from 'react';

function NoteActionDelete({ id, onDelete }) {
  return (
    <>
      <button className="note__button-delete" onClick={() => onDelete(id)}>
        Delete
      </button>
    </>
  );
}

export default NoteActionDelete;
