import React from 'react';
import NoteItem from './NoteItem';

function ArchivedList({ notes, onDelete, onMoveNote }) {
  return (
    <div className="note-list">
      {notes
        .filter((note) => note.archived === true)
        .map((note) => (
          <NoteItem key={note.id} onDelete={onDelete} onArchive={onMoveNote} archive={note.archived === false ? 'Archive' : 'Pindahkan'} {...note} />
        ))}
    </div>
  );
}

export default ArchivedList;
