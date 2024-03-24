import { createDomElements } from "./createCard";

export class NewNote {

    title;
    importance;
    dueDate;
    description;
    completed;
    myNotes = [];

    constructor(title, importance, dueDate, description, completed) {
        this.title = title;
        this.importance = importance;
        this.dueDate = dueDate;
        this.description = description;
        this.completed = completed;
        this.myNotes = [];

        if (localStorage.getItem('myNotes')) {
            this.myNotes = JSON.parse(localStorage.getItem('myNotes'));
        };
    };

    createDomElements() {
        createDomElements(this.myNotes);
    }

    createNewNote(title, importance, dueDate, description, completed){
        const newNote = new NewNote(title, importance, dueDate, description, completed);

        if(this.myNotes.some(note => note.title === title)){
            alert("This note title already exists!");
            return;
        }

        const newTaskDialog = document.querySelector('.newTaskDialog'); // grab dialog to close when finished
        const wrapper = document.querySelector('.wrapper'); // contains "hidden" card we clone
        const cardGrid = document.querySelector('.card-grid'); // cardGrid to append new cards

        let task = document.querySelector('.task');
        let newTitle = document.querySelector('.task-title');
        let newImportance = document.querySelector('.task-priority');
        let newDueDate = document.querySelector('.task-date');
        let newDescription = document.querySelector('.task-para');
        newTitle.textContent = title;
        newImportance.textContent = "Importance: " + importance;
        newDueDate.textContent = 'Due: ' + dueDate;
        newDescription.textContent = description;

        task.classList.remove('importantNote'); //need this otherwise it continuously adds the class regardless of selection
        
        if (importance === "Important"){
            task.classList.add('importantNote'); //checks if "important" is selected and applies relevant class
        };


        // clones children in hidden wrapper to create new notes
        let children = wrapper.childNodes;
        children.forEach((item) => {
            let newNoteContent = item.cloneNode(true);
            cardGrid.appendChild(newNoteContent);
        });

        this.myNotes.push(newNote);
        localStorage.setItem('myNotes', JSON.stringify(this.myNotes));
        //console.log(this.myNotes);
        newTaskDialog.close();
    };

    editNote(oldTitle, title, importance, dueDate, description){
        if(this.myNotes.some(note => note.title === title) && oldTitle !== title){
            alert("This note title already exists!");
            return;
        }
        const oldNote = this.myNotes.findIndex(note => note.title === oldTitle);
        const editTaskDialog = document.querySelector('.editTaskDialog');
        const target = document.querySelector('.' + oldTitle.replace(/\s/g, ''));

        // uses oldNote index# (from findIndex) and updates array info
        this.myNotes[oldNote].title = title;
        this.myNotes[oldNote].importance = importance;
        this.myNotes[oldNote].dueDate = dueDate;
        this.myNotes[oldNote].description = description;

        let newTitle = target.querySelector('.task-title');
        let newImportance = target.querySelector('.task-priority');
        let newDueDate = target.querySelector('.task-date');
        let newDescription = target.querySelector('.task-para');
        newTitle.textContent = title;
        newImportance.textContent = "Importance: " + importance;
        newDueDate.textContent = 'Due: ' + dueDate;
        newDescription.textContent = description;

        importanceChangeCheck(importance, target);
        // console.log(this.myNotes);

        // remove spaces and remove class with old title && replace with new title
        target.classList.remove(oldTitle.replace(/\s/g, ''));
        const titleWithoutSpaces = title.replace(/\s/g, '');
        target.classList.add(titleWithoutSpaces);

        localStorage.setItem('myNotes', JSON.stringify(this.myNotes));
        editTaskDialog.close();
    };
};

function importanceChangeCheck(importance, target) {
    if (importance === "Normal") {
        target.classList.remove('importantNote');
    } else {
        target.classList.add('importantNote');
    }
}