import React from 'react';

class NoteInput extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      title: '',
      body: '',
      character: 50,
      maxChar: 50,
    };

    this.onTitleChangeEventHandler = this.onTitleChangeEventHandler.bind(this);
    this.onBodyChangeEventHandler = this.onBodyChangeEventHandler.bind(this);
    this.onSubmitEventHandler = this.onSubmitEventHandler.bind(this);
  }

  onTitleChangeEventHandler(event) {
    const max_length = this.state.maxChar;
    const lengthCount = event.target.value.length;
    const result = max_length - lengthCount;
    this.setState((prevState) => {
      return {
        ...prevState,
        title: event.target.value.slice(0, max_length - 1),
        character: result,
      };
    });
    if (result <= 5) {
      document.querySelector('.character-remaining').style.color = 'red';
    } else {
      document.querySelector('.character-remaining').style.color = 'yellow';
    }
  }

  onBodyChangeEventHandler(event) {
    this.setState((prevState) => {
      return {
        ...prevState,
        body: event.target.value,
      };
    });
  }

  onSubmitEventHandler(event) {
    event.preventDefault();
    this.props.addNote(this.state);
    this.setState({ title: ' ', body: ' ' });
  }

  render() {
    return (
      <div className="form-input">
        <h2>Add New Note</h2>
        <form className="note-input" onSubmit={this.onSubmitEventHandler}>
          <p className="character-remaining">Character : {this.state.character} </p>
          <input type="text" placeholder="Title" value={this.state.title} onChange={this.onTitleChangeEventHandler} required />
          <br />
          <textarea type="text" placeholder="Input Your Note..." rows={10} value={this.state.body} onChange={this.onBodyChangeEventHandler} required />
          <br />
          <button type="submit">Add Note</button>
        </form>
      </div>
    );
  }
}

export default NoteInput;
