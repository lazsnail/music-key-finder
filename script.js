const keys = {
    "Ab Major": ['G#/Ab', 'A#/Bb', 'C', 'C#/Db', 'D#/Eb', 'F', 'G'],
    "A Major": ['A', 'B', 'C#/Db', 'D', 'E', 'F#/Gb', 'G#/Ab'],
    "Bb Major": ['A#/Bb', 'C', 'D', 'Eb', 'F', 'G', 'A'],
    "B Major": ['B', 'C#/Db', 'D#/Eb', 'E', 'F#/Gb', 'G#/Ab', 'A#/Bb'],
    "C Major": ['C', 'D', 'E', 'F', 'G', 'A', 'B'],
    "C#/Db Major": ['C#/Db', 'D#/Eb', 'F', 'G#/Ab', 'A#/Bb', 'C'],
    "D Major": ['D', 'E', 'F#/Gb', 'G', 'A', 'B', 'C#/Db', 'D'],
    "E Major": ['E', 'F#/Gb', 'G#/Ab', 'A', 'B', 'C#/Db', 'D#/Eb'],
    "Eb Major": ['D#/Eb', 'F', 'G', 'G#/Ab', 'A#/Bb', 'C', 'D'],
    "F Major": ['F', 'G', 'A', 'A#/Bb', 'C', 'D', 'E'],
    "F#/Gb major": ['F#/Gb', 'G#/Ab', 'A#/Bb', 'B', 'C#/Db', 'D#/Eb', 'F'],
    "G Major": ['G', 'A', 'B', 'C', 'D', 'E', 'F#/Gb'],
}

heading_text = document.getElementById("heading");
selected_text = document.getElementById("selected");
selected = [];
notes = document.getElementsByClassName("note");
output = document.getElementById("output")

for (let i = 0; i < notes.length; i++) {
    notes[i].addEventListener("click", function() { noteSelect(notes[i]) });
}

heading_text.innerHTML = "Select a note";

function noteSelect(note) {
    if (!selected.includes(note.innerHTML)) {
        heading_text.innerHTML = "Possible keys:";
        note.style.backgroundColor = "black";
        note.style.color = "white";
        //selected_text.innerHTML = selected_text.innerHTML + note.innerHTML + " ";
        selected.push(note.innerHTML);
        checkKeys();
    }
    else {
        note.style.backgroundColor = "white";
        note.style.color = "black";
        selected.splice(selected.indexOf(note.innerHTML), 1);
        if (selected.length == 0) {
            clearNotes();
        }
        else {
            checkKeys();
        }
    }
    console.log(selected);
}

function clearNotes() {
    heading_text.innerHTML = "Select a note";
    selected_text.innerHTML = "";
    selected = [];
    output.innerHTML = "";

    for (let i = 0; i < notes.length; i++) {
        notes[i].style.backgroundColor = "white";
        notes[i].style.color = "black";
    }
}

function checkKeys() {
    output.innerHTML = "";

    for (key in keys) {
        correct = true;
        for (let i = 0; i < selected.length; i++) {
            if (!keys[key].includes(selected[i])) {
                correct = false;
                break;
            }
        }
        if (correct) {
            const x = document.createElement("div");
            x.innerHTML = key;
            x.style.marginLeft = "10px";
            x.style.marginRight = "10px";
            output.appendChild(x);
            //output.innerHTML = output.innerHTML + key + " ";
        }
    }
}