class NotesApi {
  loadNotes(callback) {
    fetch('http://localhost:3000/notes')
    .then(response => response.json())
    .then(data => {
      callback(data);
    });
  };

  uploadNote(note, callback) {
    fetch('http://localhost:3000/notes', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ content: note })
    })
    .then(response => response.json())
    .then(data => {
      console.log('Success', data);
      callback(data)
    })
    .catch((error) => {
      console.log('Error:', error);
    });
  }
};

module.exports = NotesApi;
