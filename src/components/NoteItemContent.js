import React from 'react';
import { showFormattedDate } from '../utils/data';

function NoteItemContent({ title, date, body }) {
  return (
    <div className="note__item-content">
      <h3 className="note__title">{title}</h3>
      <p className="note__date">{showFormattedDate(date)}</p>
      <p className="note__body">{body}</p>
    </div>
  );
}

export default NoteItemContent;
