const NotesModel = require('./notesModel');
const NotesView = require('./notesView');
const NotesApi = require('./notesApi');

console.log('The notes app is running!')

const model = new NotesModel();
const api = new NotesApi();
const view = new NotesView(model, api);


api.loadNotes((notes) => {
  model.setNotes(notes);
  view.displayNotes();
});


