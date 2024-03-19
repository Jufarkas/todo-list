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
        const dialog = document.querySelector('dialog');
        const wrapper = document.querySelector('.wrapper');
        const cardGrid = document.querySelector('.card-grid');
        this.myNotes[title] = new NewNote(title, importance, dueDate, description);

        let children = wrapper.childNodes;
        children.forEach((item) => {
            let newNote = item.cloneNode(true);
            cardGrid.appendChild(newNote);
        });
        console.log(this.myNotes); // *************** remove once finished
        dialog.close();
    }

}