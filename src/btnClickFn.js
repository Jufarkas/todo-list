import MarkCompleteIcon from './markComplete.svg';
import { createDialog } from './createDialog';
import { NewNote } from "./newNote";

// runs when user clicks "New Task";
export function startNewTask() {
    const BODY = document.querySelector('body');
    let dialog = document.querySelector('.taskDialog');
    let dialogCheck = (BODY.contains(dialog)) ? ('yes') : ('no');
    if (dialogCheck === 'yes') {
        //dialog exists; reset form and open dialog
        const form = document.querySelector('form');
        form.reset();
        dialog.showModal();
    } else {
        //dialog does not exist; create dialog and open
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


// runs when user clicks 'Complete', 'Delete', or 'Edit' on their task
// uses removeNote function (directly below) that deletes object from array as well
export function taskBtnClick(e) {
    const target = e.target;
    const card = target.closest('.task-card');
    if (target.classList.contains('delete-task')) {
        let noteClicked = card.querySelector('.task-title').textContent;
        card.remove();
        removeNote(noteClicked);
    } else if (target.classList.contains('edit-task')) {
        const dialog = document.querySelector('dialog');
        const title = card.querySelector('.task-title').textContent;
        const priority = card.querySelector('.task-priority').textContent.replace('Importance: ', '');
        const date = card.querySelector('.task-date').textContent.replace('Due: ', '');
        const text = card.querySelector('.task-para').textContent;
        document.getElementById('taskTitle').value = title;
        document.getElementById('taskImportance').value = priority;
        document.getElementById('taskDueDate').value = date;
        document.getElementById('taskText').value = text;
        dialog.showModal();
    } else if (target.classList.contains('complete-task')){
        if (target.textContent === "Complete"){
            markComplete(card);
        } else if (target.textContent === "Incomplete"){
            markIncomplete(card);
        }
    } else {
        return;
    }
};

const noteList = NewNote.myNotes;
function removeNote(noteClicked){
    if(noteList[noteClicked]){
        delete noteList[noteClicked]
        console.log(noteList);
    };
};

function markComplete(card){
    card.querySelector('.task').classList.add('completedNote');
    // for (const child of card.childNodes){
    //     child.classList.add('completedNote');
    // }
    const completeBtn = card.querySelector('.complete-task');
    completeBtn.textContent = 'Incomplete';
    const completeBtnIcon = new Image();
    completeBtnIcon.src = MarkCompleteIcon;
    completeBtnIcon.setAttribute("alt", "mark complete button icon");
    completeBtn.appendChild(completeBtnIcon);

}

function markIncomplete(card){
    card.querySelector('.task').classList.remove('completedNote');
    // for (const child of card.childNodes){
    //     child.classList.remove('completedNote');
    // }
    const completeBtn = card.querySelector('.complete-task');
    completeBtn.textContent = 'Complete';
    const completeBtnIcon = new Image();
    completeBtnIcon.src = MarkCompleteIcon;
    completeBtnIcon.setAttribute("alt", "mark complete button icon");
    completeBtn.appendChild(completeBtnIcon);
}