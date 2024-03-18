export function openDialog() {
    // add dialog to body
    const BODY = document.querySelector('body');
    const DIALOG = document.createElement('dialog');
    DIALOG.classList.add('taskDialog');
    BODY.appendChild(DIALOG);
    
    // add form to dialog; wrapped in a fieldset
    const FORM = document.createElement('form');
    DIALOG.appendChild(FORM);  
    const formFieldset = document.createElement('fieldset');
    formFieldset.classList.add('newTaskDialogFieldset');
    FORM.appendChild(formFieldset);

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
    importanceOption1.setAttribute("value", "important");
    importanceOption2.setAttribute("value", "normal");
    importanceOption1.textContent = "High";
    importanceOption2.textContent = "Low";

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
    FORM.appendChild(formButtons);

    const cancelButton = document.createElement('button');
    cancelButton.textContent = "Cancel";
    cancelButton.setAttribute("value", "cancel");
    cancelButton.formMethod = "dialog";
    cancelButton.classList.add('formCancel');
    

    // ****************************************************************** 
    // ******************************************************************
    // need to run a function when the confirmButton is pressed to 'submit'
    // the data entered into the array of objects that will hold all the notes

    const confirmButton = document.createElement('button');
    confirmButton.textContent = "Confirm";
    confirmButton.setAttribute("value", "confirm");
    confirmButton.classList.add('formConfirm');

    // ****************************************************************** 
    // ****************************************************************** 

    formButtons.appendChild(cancelButton);
    formButtons.appendChild(confirmButton);
    
};