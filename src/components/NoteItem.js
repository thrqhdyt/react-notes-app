import React from 'react';
import NoteItemAction from './NoteItemAction';
import NoteItemContent from './NoteItemContent';

function NoteItem({ title, body, createdAt, id, onDelete, onArchive, archive }) {
  return (
    <div className="note-item">
      <NoteItemContent title={title} date={createdAt} body={body} />
      <NoteItemAction id={id} onDelete={onDelete} onArchive={onArchive} archive={archive} />
    </div>
  );
}

export default NoteItem;
