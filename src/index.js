import './style.css';
import CurrentTasksIcon from './currentTask.svg';
import ImportantTasksIcon from './importantTask.svg';
import FutureTasksIcon from './futureTask.svg';
import CompletedTasksIcon from './completedTask.svg';
import NewTaskIcon from './newTask.svg';
import { createCard } from './createCard';
import { startNewTask, taskBtnClick } from './btnClickFn';
import { createNewTaskDialog, createEditTaskDialog } from './createDialogs';

// below creates sidebar and appends to body; also adds hidden task note template
(function(){
    const BODY = document.querySelector('body');
    const sidebar = document.createElement('div');
    sidebar.classList.add('sidebar-container');
    BODY.appendChild(sidebar);

    const sidebarH1 = document.createElement('h1');
    sidebarH1.classList.add('sidebar-header');
    sidebarH1.textContent = "To-Do list";
    sidebar.appendChild(sidebarH1);

    const sidebarList = document.createElement('ul');
    sidebarList.classList.add('sidebar-list');

    const sidebarListItems = [
        {
            title: "currentTasks",
            text: "Current Tasks",
            imgSrc: CurrentTasksIcon,
        },
        {
            title: "importantTasks",
            text: "Important Tasks",
            imgSrc: ImportantTasksIcon,
        },
        {
            title: "futureTasks",
            text: "Future Tasks",
            imgSrc: FutureTasksIcon,
        },
        {
            title: "completedTasks",
            text: "Completed Tasks",
            imgSrc: CompletedTasksIcon,
        },
        {
            title: "newTask",
            text: "New Task",
            imgSrc: NewTaskIcon,
        },
    ];

    //creates button w/ icon for each object in the sidebarListItems array
    sidebarListItems.forEach((item) => {
        const newListItem = document.createElement('li');
        const newListButton = document.createElement('button');
        newListButton.classList.add(item.title);
        newListItem.appendChild(newListButton);
        
        const buttonText = document.createElement('span');
        buttonText.textContent = item.text;

        const taskImage = new Image();
        taskImage.src = item.imgSrc;
        taskImage.classList.add('sidebar-svg');
        taskImage.setAttribute("alt", (item.text + " icon"));
        
        newListButton.appendChild(taskImage);
        newListButton.appendChild(buttonText);
        sidebarList.appendChild(newListItem);
    });

    sidebar.appendChild(sidebarList);

    // creates master container for positioning page with sidebar; cardGrid container for the card grid
    const masterContainer = document.createElement('div');
    masterContainer.classList.add('master-container');
    const cardGrid = document.createElement('div');
    cardGrid.classList.add('card-grid');
    BODY.appendChild(masterContainer);
    masterContainer.appendChild(cardGrid);

    // create template card && card grid
    createCard();
    addTaskCardListener();
    createNewTaskDialog();
    createEditTaskDialog();
}());


// add listener to New Task sidebar btn
const newTask = document.querySelector('.newTask');
newTask.addEventListener('click', () => {
    startNewTask();
});

// add listener to card grid for the Complete/Delete/Edit btns
function addTaskCardListener() {
    const taskCard = document.querySelector('.card-grid');
    taskCard.addEventListener('click', function(e) {
        taskBtnClick(e);
    });
}