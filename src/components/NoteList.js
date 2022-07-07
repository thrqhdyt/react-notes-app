import React from 'react';
import NoteItem from './NoteItem';

function NoteList({ notes, onDelete, onArchive }) {
  return (
    <div className="note-list">
      {notes
        .filter((note) => note.archived === false)
        .map((note) => (
          <NoteItem key={note.id} id={note.id} onDelete={onDelete} onArchive={onArchive} archive={note.archived === false ? 'Archive' : 'Pindahkan'} {...note} />
        ))}
    </div>
  );
}

export default NoteList;
