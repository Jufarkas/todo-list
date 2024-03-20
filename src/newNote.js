export class NewNote {

    static title;
    static importance;
    static dueDate;
    static description;
    static myNotes = [];

    constructor(title, importance, dueDate, description) {
        this.title = title;
        this.importance = importance;
        this.dueDate = dueDate;
        this.description = description;
    }

    static createNewNote(title, importance, dueDate, description){
        if(this.myNotes.hasOwnProperty(title)){
            alert("Sorry no duplicates allowed");
            return;
        }
        //grab dialog; to close once finished creating new note
        const dialog = document.querySelector('dialog');
        //wrapper contains "hidden" card template that we clone in the .forEach below
        const wrapper = document.querySelector('.wrapper');
        //cardGrid needed to append new cards to
        const cardGrid = document.querySelector('.card-grid');

        let newTitle = document.querySelector('.task-title');
        let newImportance = document.querySelector('.task-priority');
        let newDueDate = document.querySelector('.task-date');
        let newDescription = document.querySelector('.task-para');
        newTitle.textContent = title;
        newImportance.textContent = "Importance: " + importance;
        newDueDate.textContent = 'Due: ' + dueDate;
        newDescription.textContent = description;

        this.myNotes[title] = new NewNote(title, importance, dueDate, description);

        // clones all children within our hidden 'wrapper' card. This way, it has all the appropriate elems for every new note added
        let children = wrapper.childNodes;
        children.forEach((item) => {
            let newNote = item.cloneNode(true);
            cardGrid.appendChild(newNote);
        });
        console.log(this.myNotes); // *************** remove once finished
        dialog.close();
    }
}