import './style.css';
import CurrentTasksIcon from './currentTask.svg';
import ImportantTasksIcon from './importantTask.svg';
import FutureTasksIcon from './futureTask.svg';
import CompletedTasksIcon from './completedTask.svg';
import NewTaskIcon from './newTask.svg';
import { createCard } from './createCard';
import { startNewTask } from './btnClickFn';
import { NewNote } from './newNote';

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
}());


// add listener to New Task sidebar btn
const newTask = document.querySelector('.newTask');
newTask.addEventListener('click', () => {
    startNewTask();
});


const noteList = NewNote.myNotes;
    function removeNote(noteClicked){
        if(noteList[noteClicked]){
            delete noteList[noteClicked]
            console.log(noteList);
        };
    };

    // 
    //export this whole function to a different module afterwards
function addTaskCardListener() {
    const taskCard = document.querySelector('.card-grid');
    taskCard.addEventListener('click', function(e) {
        const target = e.target;
        const card = target.closest('.task-card');
        const title = card.querySelector('.task-title').textContent;
        const priority = card.querySelector('.task-priority').textContent.replace('Importance: ', '');
        const date = card.querySelector('.task-date').textContent.replace('Due: ', '');
        const text = card.querySelector('.task-para').textContent;

        if (target.classList.contains('delete-task')) {
            let noteClicked = card.querySelector('.task-title').textContent;
            card.remove();
            removeNote(noteClicked);
        } else if (target.classList.contains('edit-task')) {
            const dialog = document.querySelector('dialog');
            document.getElementById('taskTitle').value = title;
            document.getElementById('taskImportance').value = priority;
            document.getElementById('taskDueDate').value = date;
            document.getElementById('taskText').value = text;
            dialog.showModal();
        } else if (target.classList.contains('complete-task')){
        alert("yaaaaYEET")

        }
    });
}