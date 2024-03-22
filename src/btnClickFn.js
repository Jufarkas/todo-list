import MarkCompleteIcon from './markComplete.svg';
import { NewNote } from "./newNote";


export let oldTitle;
let oldImportance;
let oldDueDate;
let oldDescription;


// runs when user clicks "New Task";
export function startNewTask() {
    let newTaskDialog = document.querySelector('.newTaskDialog');    
    const newTaskForm = document.querySelector('.newTaskForm');
    newTaskForm.reset();
    newTaskDialog.showModal();
};

// runs when user clicks 'Confirm', when finished creating new task;
export function submitNewTask(e) {
    e.preventDefault();
    let title = document.getElementById('taskTitle').value;
    
    // ensures title is only letters and spaces, no blanks; shows custom validation if fails and returns
    let titleCheck = /^(?=.*[^\s])[a-zA-Z\s]*$/.test(title); 
    if (!titleCheck) {
        const titleInput = document.getElementById('taskTitle');
        titleInput.setCustomValidity("Only letters and spaces please, min 1 character");
        titleInput.reportValidity();
        return;
    }

    let importance = document.getElementById('taskImportance').value; 
    let dueDate = document.getElementById('taskDueDate').value; 
    let description = document.getElementById('taskText').value;
    // run class function to create new note with constructor from newNote
    NewNote.createNewNote(title, importance, dueDate, description);
};

// runs when user clicks 'Complete', 'Delete', or 'Edit' on their task
// listener is applied in index.js file ( watches for the button that is 'clicked' inside card-grid)

export function taskBtnClick(e) {
    const target = e.target;
    const card = target.closest('.task-card');

    if (target.classList.contains('complete-task')){
        if (target.textContent === "Complete"){
            markComplete(card);
        } else if (target.textContent === "Incomplete"){
            markIncomplete(card);
        }
    } else if (target.classList.contains('edit-task')) {
        // adds new class that is the old title (minus spaces), to the '.task' card div
        // we'll need this later to select that classes fields that we want to update with the user edits
        const oldTitleClass = card.querySelector('.task-title').textContent;
        const titleWithoutSpaces = oldTitleClass.replace(/\s/g, '');
        card.childNodes[0].classList.add(titleWithoutSpaces);

        openEditDialog(card);

    } else if (target.classList.contains('delete-task')) {
        let noteClicked = card.querySelector('.task-title').textContent;
        card.remove(); // delete card from the page
        // use removeNote function (further below) to delete object/card from array
        removeNote(noteClicked);

    } else {
        return;
    }

    function markComplete(card){
        card.querySelector('.task').classList.add('completedNote');
        const completeBtn = card.querySelector('.complete-task');
        completeBtn.textContent = 'Incomplete';
        const completeBtnIcon = new Image();
        completeBtnIcon.src = MarkCompleteIcon;
        completeBtnIcon.setAttribute("alt", "mark complete button icon");
        completeBtn.appendChild(completeBtnIcon);
    
    }
    
    function markIncomplete(card){
        card.querySelector('.task').classList.remove('completedNote');
        const completeBtn = card.querySelector('.complete-task');
        completeBtn.textContent = 'Complete';
        const completeBtnIcon = new Image();
        completeBtnIcon.src = MarkCompleteIcon;
        completeBtnIcon.setAttribute("alt", "mark complete button icon");
        completeBtn.appendChild(completeBtnIcon);
    }

    function openEditDialog(card) {
        const editTaskDialog = document.querySelector('.editTaskDialog');
            
        // below is the "old note" info we need to populate the dialog and use to change the array
        const title = card.querySelector('.task-title').textContent;
        const priority = card.querySelector('.task-priority').textContent.replace('Importance: ', '');
        const date = card.querySelector('.task-date').textContent.replace('Due: ', '');
        const text = card.querySelector('.task-para').textContent;
        oldTitle = title;
        oldImportance = priority;
        oldDueDate = date;
        oldDescription = text;
        
        document.getElementById('editTitle').value = title;
        document.getElementById('editImportance').value = priority;
        document.getElementById('editDueDate').value = date;
        document.getElementById('editText').value = text;
        editTaskDialog.showModal();
    }
};

const noteArray = NewNote.myNotes;
function removeNote(noteClicked){
    if(noteArray[noteClicked]){
        delete noteArray[noteClicked]
        console.log(noteArray);
    };
};


//runs when user clicks the 'Save' button to save their edits
export function updateTask(e, oldTitle) {
    e.preventDefault();
    let title = document.getElementById('editTitle').value; 

    // ensures title is only letters and spaces, no blanks; shows custom validation if fails and returns
    let titleCheck = /^(?=.*[^\s])[a-zA-Z\s]*$/.test(title);
    if (!titleCheck) {
        const titleInput = document.getElementById('editTitle');
        titleInput.setCustomValidity("Only letters and spaces please, min 1 character");
        titleInput.reportValidity();
        return;
    }

    let importance = document.getElementById('editImportance').value; 
    let dueDate = document.getElementById('editDueDate').value; 
    let description = document.getElementById('editText').value;
    NewNote.editNote(oldTitle, title, importance, dueDate, description);
}


export function filterCurrentTasks(){
    const allTasks = document.querySelectorAll('.task-card');
    allTasks.forEach((taskCard) => {
        if (taskCard.firstChild.classList.contains('completedNote')){
            taskCard.classList.add('hidden');
        } else if (taskCard.classList.contains('hidden') && !taskCard.firstChild.classList.contains('completedNote')){
            taskCard.classList.remove('hidden');
        }
    });
};

export function filterImportantTasks(){
    const allTasks = document.querySelectorAll('.task-card');
    allTasks.forEach((taskCard) => {
        // if important and completed, add hidden
        // if important and not completed and hidden, remove hidden
        // if not important, add hidden
    if (taskCard.firstChild.classList.contains('importantNote') 
            && taskCard.firstChild.classList.contains('completedNote') 
            && !taskCard.classList.contains('hidden')){
        taskCard.classList.add('hidden');

    } else if (taskCard.firstChild.classList.contains('importantNote') 
            && !taskCard.firstChild.classList.contains('completedNote')
            && taskCard.classList.contains('hidden')){
        taskCard.classList.remove('hidden');

    } else if (!taskCard.firstChild.classList.contains('importantNote')){
        taskCard.classList.add('hidden');

    } else {
        return;
    }
    });
}

export function filterFutureTasks(){
    const allTasks = document.querySelectorAll('.task-card');
    allTasks.forEach((taskCard) => {
        const DATEINPUT = document.querySelectorAll('.task-date');
        DATEINPUT.forEach((date) => {
            if (date !== ""){
                const todaysDate = new Date();
                const month = todaysDate.getUTCMonth() + 1; // months from 1-12, JS starts at '0' so have to add +1
                const day = todaysDate.getUTCDate();
                const year = todaysDate.getUTCFullYear();
                    
                // Using padded values and a '-'; now 2024/1/1 becomes 2024-01-01
                const paddedMonth = month.toString().padStart(2,"0");
                const paddedDay = day.toString().padStart(2,"0");
                const currentDate = `${year}-${paddedMonth}-${paddedDay}`;
                let userDate = taskCard.firstChild.childNodes[2].textContent.replace('Due: ', '');
                
                calcDateDifference(userDate, currentDate, taskCard);
            } else {
                return;
            }
        });
    });
};

function calcDateDifference(userDate, currentDate, taskCard) {
    let startDate = currentDate;
    let endDate = userDate;

    let differenceInTime = new Date(endDate).getTime() - new Date(startDate).getTime();
    let differenceInDays = differenceInTime / (1000 * 3600 * 24) + 1;
    if (userDate === ""){
        taskCard.classList.add('hidden');
    } else if (taskCard.firstChild.classList.contains('completedNote')){
        taskCard.classList.add('hidden');
    } else if (differenceInDays < 7){
        taskCard.classList.add('hidden');
    } else if (differenceInDays >= 7 && taskCard.classList.contains('hidden')){
        taskCard.classList.remove('hidden');
    } else {
        return;
    }
};

export function filterCompletedTasks(){
    const allTasks = document.querySelectorAll('.task-card');
    allTasks.forEach((taskCard) => {
        if (taskCard.firstChild.classList.contains('completedNote') 
            && taskCard.classList.contains('hidden')){
            taskCard.classList.remove('hidden');
        } else if (!taskCard.firstChild.classList.contains('completedNote')){
            taskCard.classList.add('hidden');
        } else {
            return;
        }
    });
};