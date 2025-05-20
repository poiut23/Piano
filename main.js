// Array of string IDs for each piano key element in the HTML
const keys = [
  'c-key', 'd-key', 'e-key', 'f-key', 'g-key', 'a-key', 'b-key', 'high-c-key',
  'c-sharp-key', 'd-sharp-key', 'f-sharp-key', 'g-sharp-key', 'a-sharp-key'
];

// Array to store the actual DOM elements for each piano key
const notes = [];

// Loop through each key ID, find the DOM element, and add it to the notes array
keys.forEach(function(key){
  notes.push(document.getElementById(key));
});

// Function to change the key color to blue when pressed
const keyPlay = function(event) {
  event.target.style.backgroundColor = 'blue';
}

// Function to reset the key color when released
const keyReturn = function(event) {
  event.target.style.backgroundColor = '';
}

// Function to assign mouse event handlers to a piano key
const eventAssignment = function(note) {
  // When mouse button is pressed down on the key, call keyPlay
  note.onmousedown = function(event) {
    keyPlay(event);
  }
  // When mouse button is released on the key, call keyReturn
  note.onmouseup = function(event){
    keyReturn(event);
  }
}

// Assign event handlers to every piano key element
notes.forEach(eventAssignment);

// Get references to the lyric progression buttons by their IDs
let nextOne = document.getElementById('first-next-line');
let nextTwo = document.getElementById('second-next-line');
let nextThree = document.getElementById('third-next-line');
let startOver = document.getElementById('fourth-next-line');

// Get reference to the optional lyric column (for the end of the song)
let lastLyric = document.getElementById('column-optional');

// Hide all progression buttons except the first one at the start
nextTwo.hidden = true;
nextThree.hidden = true;
startOver.hidden = true;

// When the first button is clicked, show the second button, hide itself, and update some lyrics
nextOne.onclick = function(){
  nextTwo.hidden = false;
  nextOne.hidden = true;

  document.getElementById('letter-note-five').innerHTML = 'D';
  document.getElementById('letter-note-six').innerHTML = 'C';
}

// When the second button is clicked, show the third button, hide itself, and update more lyrics
nextTwo.onclick = function(){
  nextThree.hidden = false;
  nextTwo.hidden = true;

  document.getElementById('word-five').innerHTML = 'DEAR';
  document.getElementById('word-six').innerHTML = 'FRI-';

  document.getElementById('letter-note-three').innerHTML = 'G';
  document.getElementById('letter-note-four').innerHTML = 'E';
  document.getElementById('letter-note-five').innerHTML = 'C';
  document.getElementById('letter-note-six').innerHTML = 'B';

  // Show the last lyric column
  lastLyric.style.display = 'inline-block';
}

// When the third button is clicked, show the start over button, hide itself, and update all lyrics for the last line
nextThree.onclick = function(){
  startOver.hidden = false;
  nextThree.hidden = true;

  document.getElementById('word-one').innerHTML = 'HAP-';
  document.getElementById('word-two').innerHTML = 'PY';
  document.getElementById('word-three').innerHTML = 'BIRTH';
  document.getElementById('word-four').innerHTML = 'DAY';
  document.getElementById('word-five').innerHTML = 'TO';
  document.getElementById('word-six').innerHTML = 'YOU';

  document.getElementById('letter-note-one').innerHTML = 'F';
  document.getElementById('letter-note-two').innerHTML = 'F';
  document.getElementById('letter-note-three').innerHTML = 'E';
  document.getElementById('letter-note-four').innerHTML = 'C';
  document.getElementById('letter-note-five').innerHTML = 'D';
  document.getElementById('letter-note-six').innerHTML = 'C';

  // Hide the last lyric column
  lastLyric.style.display = 'none';
}

// When the start over button is clicked, reset everything to the beginning state
startOver.onclick = function() {
  nextOne.hidden = false;
  startOver.hidden = true;

  document.getElementById('word-one').innerHTML = 'HAP-';
  document.getElementById('letter-note-one').innerHTML = 'G';
  document.getElementById('word-two').innerHTML = 'PY';
  document.getElementById('letter-note-two').innerHTML = 'G';
  document.getElementById('word-three').innerHTML = 'BIRTH-';
  document.getElementById('letter-note-three').innerHTML = 'A';
  document.getElementById('word-four').innerHTML = 'DAY';
  document.getElementById('letter-note-four').innerHTML = 'G';
  document.getElementById('word-five').innerHTML = 'TO';
  document.getElementById('letter-note-five').innerHTML = 'C';
  document.getElementById('word-six').innerHTML = 'YOU!';
  document.getElementById('letter-note-six').innerHTML = 'B';
}