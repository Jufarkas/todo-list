import { submitNewTask, updateTask } from "./btnClickFn";

import { oldTitle } from "./btnClickFn";

const BODY = document.querySelector('body');

export function createNewTaskDialog() {
    // add newTaskDialog to body
    const newTaskDialog = document.createElement('dialog');
    newTaskDialog.classList.add('newTaskDialog');
    BODY.appendChild(newTaskDialog);
    
    // add form to dialog; wrapped in a fieldset
    const NEWTASKFORM = document.createElement('form');
    NEWTASKFORM.classList.add('newTaskForm');
    newTaskDialog.appendChild(NEWTASKFORM);  
    const formFieldset = document.createElement('fieldset');
    formFieldset.classList.add('newTaskDialogFieldset');
    NEWTASKFORM.appendChild(formFieldset);

    // create taskTitle label with input; append to formFieldset
    const taskTitleLabel = document.createElement('label');
    taskTitleLabel.textContent = "Task Title:"
    taskTitleLabel.htmlFor = "taskTitle";
    taskTitleLabel.classList.add('formInput', 'titleInput');
    
    const taskTitleInput = document.createElement('input');
    taskTitleInput.id = "taskTitle";
    taskTitleInput.type = "text";
    taskTitleInput.name = "task-title";
    taskTitleInput.minLength = "2";
    taskTitleInput.maxLength = "60";
    taskTitleInput.autocomplete = "off";

    formFieldset.appendChild(taskTitleLabel);
    formFieldset.appendChild(taskTitleInput);

    // create taskImportance label with <select> && 2 options; append to formFieldset
    const taskImportanceLabel = document.createElement('label');
    taskImportanceLabel.textContent = "Importance Level:";
    taskImportanceLabel.htmlFor = "taskImportance";
    taskImportanceLabel.classList.add('formInput', 'importanceInput');

    const taskImportanceSelect = document.createElement('select');
    taskImportanceSelect.id = "taskImportance";

    const importanceOption1 = document.createElement('option');
    const importanceOption2 = document.createElement('option');
    importanceOption1.setAttribute("value", "Normal");
    importanceOption2.setAttribute("value", "Important");
    importanceOption1.textContent = "Normal";
    importanceOption2.textContent = "Important";

    formFieldset.appendChild(taskImportanceLabel);
    formFieldset.appendChild(taskImportanceSelect);
    taskImportanceSelect.appendChild(importanceOption1);
    taskImportanceSelect.appendChild(importanceOption2);

    // create taskDueDate label with date selector; append to formFieldset
    const taskDueDateLabel = document.createElement('label');
    taskDueDateLabel.textContent = "Due Date:";
    taskDueDateLabel.htmlFor = "taskDueDate";
    taskDueDateLabel.classList.add('formInput', 'dueDateInput');

    const dateInputContainer = document.createElement('div');
    dateInputContainer.classList.add('dateInputContainer');

    const dateInputSelector = document.createElement('input');
    dateInputSelector.id = "taskDueDate";
    dateInputSelector.type = "date";
    dateInputSelector.min = "2024-03-01";
    dateInputSelector.max = "2034-03-01";
    dateInputSelector.onkeydown = ((e) => {
            return false;
        });

    dateInputContainer.appendChild(dateInputSelector);
    formFieldset.appendChild(taskDueDateLabel);
    formFieldset.appendChild(dateInputContainer);

    // create tastText label with a <textarea> field; append to formFieldset
    const taskTextLabel = document.createElement('label');
    taskTextLabel.textContent = "Note:";
    taskTextLabel.htmlFor = "taskText";
    taskTextLabel.classList.add('formInput', 'taskInput');

    const taskTextArea = document.createElement('textarea');
    taskTextArea.id = "taskText";
    taskTextArea.name = "task-text";
    taskTextArea.cols = "50";
    taskTextArea.rows = "1";
       
    formFieldset.appendChild(taskTextLabel);
    formFieldset.appendChild(taskTextArea);

    // create Cancel/Confirm btns; append to FORM (after all labels/inputs)
    const formButtons = document.createElement('div');
    formButtons.classList.add('formButtons');
    NEWTASKFORM.appendChild(formButtons);

    const cancelButton = document.createElement('button');
    cancelButton.textContent = "Cancel";
    cancelButton.setAttribute("value", "cancel");
    cancelButton.formMethod = "dialog";
    cancelButton.classList.add('formCancel');

    const confirmButton = document.createElement('button');
    confirmButton.textContent = "Confirm";
    confirmButton.setAttribute("value", "confirm");
    confirmButton.classList.add('formConfirm');

    formButtons.appendChild(cancelButton);
    formButtons.appendChild(confirmButton);

    // add listener to confirm btn; call on fnc in btnClickFn.js when clicked
    const formConfirm = document.querySelector('.formConfirm');
    formConfirm.addEventListener('click', (e) => {
        submitNewTask(e);
    });
};

// manually creating editTaskDialog; need new ID's for the field inputs/labels
// adds a listener to the 'save' button at the end
export function createEditTaskDialog() {
    // add newTaskDialog to body
    const editTaskDialog = document.createElement('dialog');
    editTaskDialog.classList.add('editTaskDialog');
    BODY.appendChild(editTaskDialog);
    
    // add form to dialog; wrapped in a fieldset
    const editTaskForm = document.createElement('form');
    editTaskForm.classList.add('newTaskForm');
    editTaskDialog.appendChild(editTaskForm);  
    const formFieldset = document.createElement('fieldset');
    formFieldset.classList.add('editTaskDialogFieldset');
    editTaskForm.appendChild(formFieldset);

    // create taskTitle label with input; append to formFieldset
    const taskTitleLabel = document.createElement('label');
    taskTitleLabel.textContent = "Task Title:"
    taskTitleLabel.htmlFor = "editTitle";
    taskTitleLabel.classList.add('formInput', 'titleInput');
    
    const taskTitleInput = document.createElement('input');
    taskTitleInput.id = "editTitle";
    taskTitleInput.type = "text";
    taskTitleInput.name = "edit-title";
    taskTitleInput.minLength = "2";
    taskTitleInput.maxLength = "60";
    taskTitleInput.autocomplete = "off";

    formFieldset.appendChild(taskTitleLabel);
    formFieldset.appendChild(taskTitleInput);

    // create taskImportance label with <select> && 2 options; append to formFieldset
    const taskImportanceLabel = document.createElement('label');
    taskImportanceLabel.textContent = "Importance Level:";
    taskImportanceLabel.htmlFor = "editImportance";
    taskImportanceLabel.classList.add('formInput', 'importanceInput');

    const taskImportanceSelect = document.createElement('select');
    taskImportanceSelect.id = "editImportance";

    const importanceOption1 = document.createElement('option');
    const importanceOption2 = document.createElement('option');
    importanceOption1.setAttribute("value", "Normal");
    importanceOption2.setAttribute("value", "Important");
    importanceOption1.textContent = "Normal";
    importanceOption2.textContent = "Important";

    formFieldset.appendChild(taskImportanceLabel);
    formFieldset.appendChild(taskImportanceSelect);
    taskImportanceSelect.appendChild(importanceOption1);
    taskImportanceSelect.appendChild(importanceOption2);

    // create taskDueDate label with date selector; append to formFieldset
    const taskDueDateLabel = document.createElement('label');
    taskDueDateLabel.textContent = "Due Date:";
    taskDueDateLabel.htmlFor = "editDueDate";
    taskDueDateLabel.classList.add('formInput', 'dueDateInput');

    const dateInputContainer = document.createElement('div');
    dateInputContainer.classList.add('dateInputContainer');

    const dateInputSelector = document.createElement('input');
    dateInputSelector.id = "editDueDate";
    dateInputSelector.type = "date";
    dateInputSelector.min = "2024-03-01";
    dateInputSelector.max = "2034-03-01";
    dateInputSelector.onkeydown = ((e) => {
            return false;
        });

    dateInputContainer.appendChild(dateInputSelector);
    formFieldset.appendChild(taskDueDateLabel);
    formFieldset.appendChild(dateInputContainer);

    // create tastText label with a <textarea> field; append to formFieldset
    const taskTextLabel = document.createElement('label');
    taskTextLabel.textContent = "Note:";
    taskTextLabel.htmlFor = "editText";
    taskTextLabel.classList.add('formInput', 'taskInput');

    const taskTextArea = document.createElement('textarea');
    taskTextArea.id = "editText";
    taskTextArea.name = "edit-text";
    taskTextArea.cols = "50";
    taskTextArea.rows = "1";
       
    formFieldset.appendChild(taskTextLabel);
    formFieldset.appendChild(taskTextArea);

    // create Cancel/Confirm btns; append to FORM (after all labels/inputs)
    const formButtons = document.createElement('div');
    formButtons.classList.add('formButtons');
    editTaskForm.appendChild(formButtons);

    const cancelButton = document.createElement('button');
    cancelButton.textContent = "Cancel";
    cancelButton.setAttribute("value", "cancel");
    cancelButton.formMethod = "dialog";
    cancelButton.classList.add('formCancel');

    const saveEditButton = document.createElement('button');
    saveEditButton.textContent = "Save";
    saveEditButton.setAttribute("value", "save");
    saveEditButton.classList.add('saveEditBtn');

    formButtons.appendChild(cancelButton);
    formButtons.appendChild(saveEditButton);
    
    // add listener to save btn; call on fnc in btnClickFn.js when clicked
    const editConfirm = document.querySelector('.saveEditBtn');
    editConfirm.addEventListener('click', (e) => {
        updateTask(e, oldTitle);
    });
};

// // clones newTaskDialog; changes classes to reflect needed editTaskDialog classes
// export function createEditTaskDialog() {
//     const newTaskDialog = document.querySelector('.newTaskDialog');
//     const editTaskDialog = document.createElement('dialog');
//     editTaskDialog.classList.add('editTaskDialog');
//     BODY.appendChild(editTaskDialog);
//     let children = newTaskDialog.childNodes;
//     children.forEach((item) => {
//         let editTaskDialogChild = item.cloneNode(true);
//         editTaskDialog.appendChild(editTaskDialogChild);
//     });

//     const editTaskForm = document.querySelector('.editTaskDialog').firstChild;
//     editTaskForm.classList.replace('newTaskForm', 'editTaskForm');   
//     const editTaskDialogFieldset = document.querySelector('.editTaskForm').firstChild;
//     editTaskDialogFieldset.classList.replace('newTaskDialogFieldset', 'editTaskDialogFieldset');

//     editTaskForm.childNodes[1].childNodes[1].classList.add('hidden'); // hides 'confirm' button used for new tasks
//     editTaskForm.childNodes[1].childNodes[2].classList.remove('hidden'); // un-hides 'save' button used to edit tasks
// }