import React from 'react';
import NoteActionDelete from './NoteActionDelete';
import NoteActionArchive from './NoteActionArchive';

function NoteItemAction({ id, onDelete, onArchive, archive }) {
  return (
    <div className="note__item-action">
      <NoteActionDelete id={id} onDelete={onDelete} />
      <NoteActionArchive id={id} onArchive={onArchive} archive={archive} />
    </div>
  );
}

export default NoteItemAction;
