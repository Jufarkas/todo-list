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
    };

    static createNewNote(title, importance, dueDate, description){
        if(this.myNotes.hasOwnProperty(title)){
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

        this.myNotes[title] = new NewNote(title, importance, dueDate, description);

        // clones children in hidden wrapper to create new notes
        let children = wrapper.childNodes;
        children.forEach((item) => {
            let newNote = item.cloneNode(true);
            cardGrid.appendChild(newNote);
        });
        console.log(this.myNotes); // ************************************ remove after complete
        newTaskDialog.close();
    };

    static editNote(oldTitle, title, importance, dueDate, description){
        if(this.myNotes.hasOwnProperty(title) && oldTitle !== title){
            alert("This note title already exists!");
            return;
        }

        const editTaskDialog = document.querySelector('.editTaskDialog');
        const target = document.querySelector('.' + oldTitle);
        // grab existing note from the original title we stored in oldTitle
        const note = this.myNotes[oldTitle];
        // delete it
        delete this.myNotes[oldTitle];

        // add new note with new title
        this.myNotes[title] = note;
        this.myNotes[title].title = title;
        this.myNotes[title].importance = importance;
        this.myNotes[title].dueDate = dueDate;
        this.myNotes[title].description = description;


        let newTitle = target.querySelector('.task-title');
        let newImportance = target.querySelector('.task-priority');
        let newDueDate = target.querySelector('.task-date');
        let newDescription = target.querySelector('.task-para');
        newTitle.textContent = title;
        newImportance.textContent = "Importance: " + importance;
        newDueDate.textContent = 'Due: ' + dueDate;
        newDescription.textContent = description;

        importanceChangeCheck(importance, target);
        console.log(this.myNotes); // ************************************ remove after complete
        target.classList.remove(oldTitle);
        target.classList.add(title);
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