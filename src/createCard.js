// creates template card that we hide using the 'wrapper' class; used for cloning in newNote.js


import MarkCompleteIcon from './markComplete.svg';
import DeleteIcon from './deleteTask.svg';
import EditIcon from './editTask.svg';

export function createCard() {
    // create cardGrid to hold cards
    const cardGrid = document.querySelector('.card-grid');
    // create div with 'wrapper' class, this is the only elem that receives this class
    const cardTemplateWrapper = document.createElement('div');
    cardTemplateWrapper.classList.add('wrapper');


    const taskCard = document.createElement('div');
    taskCard.classList.add('task-card');

    const task = document.createElement('button');
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
    const completeBtnIcon = new Image();
    completeBtnIcon.src = MarkCompleteIcon;
    completeBtnIcon.setAttribute("alt", "mark complete button icon");
    completeBtn.appendChild(completeBtnIcon);
    
    const deleteBtn = document.createElement('button');
    deleteBtn.textContent = "Delete";
    const deleteBtnIcon = new Image();
    deleteBtnIcon.src = DeleteIcon;
    deleteBtnIcon.setAttribute("alt", "delete button icon");
    deleteBtn.appendChild(deleteBtnIcon);
    
    const editBtn = document.createElement('button');
    editBtn.textContent = "Edit";
    const editBtnIcon = new Image();
    editBtnIcon.src = EditIcon;
    editBtnIcon.setAttribute("alt", "edit button icon");
    editBtn.appendChild(editBtnIcon);

    cardButtons.appendChild(completeBtn);
    cardButtons.appendChild(deleteBtn);
    cardButtons.appendChild(editBtn);
}