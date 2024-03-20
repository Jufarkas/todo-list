import { createDialog } from './createDialog';
import { NewNote } from "./newNote";

// runs when user clicks "New Task";
export function startNewTask() {
    const BODY = document.querySelector('body');
    let dialog = document.querySelector('.taskDialog');
    let dialogCheck = (BODY.contains(dialog)) ? ('yes') : ('no');
    if (dialogCheck === 'yes') {
        const form = document.querySelector('form');
        form.reset();
        dialog.showModal();
    } else {
        createDialog();
        dialog = document.querySelector('.taskDialog');
        dialog.showModal();
    };
};

// runs when user clicks 'Confirm', when finished creating new task;
export function submitNewTask(e) {
    e.preventDefault();
    let title = document.getElementById('taskTitle').value; 
    let importance = document.getElementById('taskImportance').value; 
    let dueDate = document.getElementById('taskDueDate').value; 
    let description = document.getElementById('taskText').value;
    // run class function to create new note with constructor from newNote
    NewNote.createNewNote(title, importance, dueDate, description);
};