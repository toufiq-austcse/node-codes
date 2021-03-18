let inquirer = require('inquirer');
let prompt = require('../prompt/promt');
let fs = require('fs');

function loadNotes() {
  let buffer = fs.readFileSync('note.json');
  let bufferString = buffer.toString();
  if (!bufferString) {
    return [];
  }
  return JSON.parse(bufferString);
}

function saveNotes(notes) {
  let noteString = JSON.stringify(notes);
  fs.writeFileSync('note.json', noteString);
}

async function add() {
  let answers = await inquirer.prompt(prompt.add);
  answers.id = Date.now();

  let notes = loadNotes();
  notes.push(answers);
  saveNotes(notes);
}
function list() {
  let notes = loadNotes();
  console.log(notes);
}
async function remove() {
  let answers = await inquirer.prompt(prompt.remove);
  let notes = loadNotes();
  let noteIndex = notes.findIndex(function (note) {
    return note.id === answers.id;
  });

  if (noteIndex !== -1) {
    notes.splice(noteIndex, 1);
    saveNotes(notes);
  }
}
async function update() {
        let answers = await inquirer.prompt(prompt.update);
        let notes = loadNotes();
        let noteIndex = notes.findIndex(function (note) {
        return note.id === answers.id;
        });

        if (noteIndex !== -1) {
                notes[noteIndex].title = answers.title?answers.title:notes[noteIndex].title;
                notes[noteIndex].text = answers.text?answers.text:notes[noteIndex].text;
                saveNotes(notes);
               
        }

}

module.exports = {
  add,
  list,
  remove,
  update,
};
