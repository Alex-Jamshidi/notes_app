//const { div } = require("prelude-ls");

class NotesView {
  constructor(model, api) {
    this.model = model;
    this.api = api;
    this.mainContainerEl = document.querySelector('#main-container');
    this.noteInputEl = document.querySelector("#note-input");
    this.buttonEl = document.querySelector("#add-note-button");

    this.buttonEl.addEventListener('click', () => {
      this.addNote();
      this.noteInputEl.value = ""
    });
  };

  addNote() {
    this.api.uploadNote(this.noteInputEl.value, (response) => {
      console.log('Note added!')
      this.refreshNotes()
    })
  };

  displayNotes() {
    this.model.getNotes().forEach(note => {
      let div = document.createElement('div');
      div.className = "note";
      div.innerText = note;
      this.mainContainerEl.append(div);
      console.log("displaying notes")
    });
  };

  clearNotes() {
    const notes = document.querySelectorAll("div.note");
    notes.forEach(note => {
      note.remove();
    });
  };

  refreshNotes() {
    this.clearNotes();
    this.model.reset()
    this.api.loadNotes((notes) => {
      this.model.setNotes(notes);
      this.displayNotes();
    });
  };
};

module.exports = NotesView;