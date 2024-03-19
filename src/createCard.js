import MarkCompleteIcon from './markComplete.svg';
import DeleteIcon from './deleteTask.svg';
import EditIcon from './editTask.svg';

export function createCard() {
    const cardGrid = document.querySelector('.card-grid');
    const cardTemplateWrapper = document.createElement('div');
    cardTemplateWrapper.classList.add('wrapper');
    const toDoCard = document.createElement('div');
    toDoCard.classList.add('toDo-card');

    const task = document.createElement('button');
    task.classList.add('task');

    const taskTitleH3 = document.createElement('h3');
    taskTitleH3.classList.add('toDo-title');
    
    const taskImportanceH6 = document.createElement('h6');
    taskImportanceH6.classList.add('toDo-priority');
     
    const taskDueDateH6 = document.createElement('h6');
    taskDueDateH6.classList.add('toDo-date');
    
    const taskText = document.createElement('p');
    taskText.classList.add('toDo-para');

    cardGrid.appendChild(cardTemplateWrapper);
    cardTemplateWrapper.appendChild(toDoCard);
    toDoCard.appendChild(task);
    task.appendChild(taskTitleH3);
    task.appendChild(taskImportanceH6);
    task.appendChild(taskDueDateH6);
    task.appendChild(taskText);

    const cardButtons = document.createElement('div');
    cardButtons.classList.add('card-buttons');
    toDoCard.appendChild(cardButtons);

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