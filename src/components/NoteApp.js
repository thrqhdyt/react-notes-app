import React from 'react';
import NoteList from './NoteList';
import { getInitialData, showFormattedDate } from '../utils/data';
import NoteInput from './NoteInput';
import ArchivedList from './ArchivedList';
import NoteHeader from './NoteHeader';

class NoteApp extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      notes: getInitialData(),
      searchText: '',
    };

    this.onDeleteHandler = this.onDeleteHandler.bind(this);
    this.onAddNoteHandler = this.onAddNoteHandler.bind(this);
    this.onArchivedHandler = this.onArchivedHandler.bind(this);
    this.onMoveHandler = this.onMoveHandler.bind(this);
  }

  onDeleteHandler(id) {
    const notes = this.state.notes.filter((note) => note.id !== id);
    this.setState({ notes });
  }

  onAddNoteHandler({ title, body }) {
    this.setState((prevState) => {
      return {
        notes: [
          ...prevState.notes,
          {
            id: +new Date(),
            title,
            body,
            createdAt: showFormattedDate(Date()),
            archived: false,
          },
        ],
      };
    });
  }

  onArchivedHandler(id) {
    const data = this.state.notes.filter((note) => note.id === id);
    data[0].archived = true;
    const newData = this.state.notes.map((note) => note);
    this.setState({ notes: newData });
  }

  onMoveHandler(id) {
    const data = this.state.notes.filter((note) => note.id === id);
    data[0].archived = false;
    const newData = this.state.notes.map((note) => note);
    this.setState({ notes: newData });
  }

  render() {
    const { notes, searchText } = this.state;
    const notesActive = notes.filter((note) => note.archived === false);
    const notesArchived = notes.filter((note) => note.archived === true);
    const filterNotes = notes.filter((note) => note.title.toLowerCase().includes(searchText.toLowerCase()));
    return (
      <div className="notes-app">
        <NoteHeader handleChangeSearch={(e) => this.setState({ searchText: e.target.value })} />
        <NoteInput addNote={this.onAddNoteHandler} />
        <h2 className="note-active">Catatan Aktif</h2>

        {notesActive.length !== 0 ? <NoteList notes={filterNotes} onDelete={this.onDeleteHandler} onArchive={this.onArchivedHandler} /> : <p className='empty-notes'>Tidak ada catatan</p>}

        <h2 className="note-archive">Catatan Arsip</h2>
        {notesArchived.length !== 0 ? <ArchivedList notes={filterNotes} onDelete={this.onDeleteHandler} onMoveNote={this.onMoveHandler} /> : <p className='empty-notes'>Tidak ada catatan</p>}
      </div>
    );
  }
}

export default NoteApp;
