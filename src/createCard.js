// creates template card that we hide using the 'wrapper' class; used for cloning in newNote.js


import CompleteIcon from './markComplete.svg';
import DeleteIcon from './deleteTask.svg';
import EditIcon from './editTask.svg';
// import { NewNote } from './newNote';

export function createCard() {
    // create cardGrid to hold cards
    const cardGrid = document.querySelector('.card-grid');
    // create div with 'wrapper' class, this is the only elem that receives this class
    const cardTemplateWrapper = document.createElement('div');
    cardTemplateWrapper.classList.add('wrapper');


    const taskCard = document.createElement('div');
    taskCard.classList.add('task-card');

    const task = document.createElement('div');
    task.classList.add('task');

    const taskTitleH3 = document.createElement('h3');
    taskTitleH3.classList.add('task-title');
    
    const taskImportanceH6 = document.createElement('h6');
    taskImportanceH6.classList.add('task-priority');
     
    const taskDueDateH6 = document.createElement('h6');
    taskDueDateH6.classList.add('task-date');
    
    const taskText = document.createElement('p');
    taskText.classList.add('task-para');

    cardGrid.appendChild(cardTemplateWrapper);
    cardTemplateWrapper.appendChild(taskCard);
    taskCard.appendChild(task);
    task.appendChild(taskTitleH3);
    task.appendChild(taskImportanceH6);
    task.appendChild(taskDueDateH6);
    task.appendChild(taskText);

    const cardButtons = document.createElement('div');
    cardButtons.classList.add('card-buttons');
    taskCard.appendChild(cardButtons);

    const completeBtn = document.createElement('button');
    completeBtn.textContent = "Complete";
    completeBtn.classList.add('complete-task');
    const completeBtnIcon = new Image();
    completeBtnIcon.src = CompleteIcon;
    completeBtnIcon.setAttribute("alt", "mark complete button icon");
    completeBtn.appendChild(completeBtnIcon);
    
    
    const deleteBtn = document.createElement('button');
    deleteBtn.textContent = "Delete";
    deleteBtn.classList.add('delete-task');
    const deleteBtnIcon = new Image();
    deleteBtnIcon.src = DeleteIcon;
    deleteBtnIcon.setAttribute("alt", "delete button icon");
    deleteBtn.appendChild(deleteBtnIcon);
    
    
    const editBtn = document.createElement('button');
    editBtn.textContent = "Edit";
    editBtn.classList.add('edit-task');
    const editBtnIcon = new Image();
    editBtnIcon.src = EditIcon;
    editBtnIcon.setAttribute("alt", "edit button icon");
    editBtn.appendChild(editBtnIcon);
    

    cardButtons.appendChild(completeBtn);
    cardButtons.appendChild(deleteBtn);
    cardButtons.appendChild(editBtn);
};


// creates cards for items saved in localStorage
export function createDomElements(notes){
    notes.forEach(note => {
        const cardGrid = document.querySelector('.card-grid');
        const taskCard = document.createElement('div');
        taskCard.classList.add('task-card');
        
        const task = document.createElement('div');
        task.classList.add('task');

        const taskElements = [
            { 
                type: "h3",
                class: "task-title",
                text: note.title
            },
            { 
                type: "h6",
                class: "task-priority",
                text: "Importance: " + note.importance,
            },
            { 
                type: "h6",
                class: "task-date",
                text: "Due: " + note.dueDate,
            },
            {
                type: "p",
                class: "task-para",
                text: note.description,
            },
        ];

        taskElements.forEach((element) => {
            const el = document.createElement(element.type);
            if (note.importance === "Important") {
                task.classList.add('importantNote');
            }
            if (note.completed === "yes") {
                task.classList.add('completedNote');
            }
            el.classList.add(element.class);
            el.textContent = element.text;
            task.appendChild(el);
        });

        const taskCardBtns = document.createElement('div');
        taskCardBtns.classList.add('card-buttons');

        const buttons = [
            { 
                btnName: "Complete",
                class: "complete-task",
                imgSrc: CompleteIcon
            },
            { 
                btnName: "Delete",
                class: "delete-task",
                imgSrc: DeleteIcon
            },
            { 
                btnName: "Edit",
                class: "edit-task",
                imgSrc: EditIcon
            },
        ];

        buttons.forEach(item => {
            const btn = document.createElement('button');
            btn.textContent = item.btnName;
            btn.classList.add(item.class);
            if (item.btnName === "Complete" && note.completed === "yes") {
                btn.textContent = "Incomplete";
                taskCard.classList.add('hidden');
            }

            const btnIcon = new Image();
            btnIcon.src = item.imgSrc;
            btnIcon.setAttribute("alt", item.btnName + " note icon");

            btn.appendChild(btnIcon);
            taskCardBtns.appendChild(btn);
        })

        taskCard.appendChild(task);
        taskCard.appendChild(taskCardBtns);
        cardGrid.appendChild(taskCard);
    })
}