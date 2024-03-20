

// make a static sidebar that's a list of buttons (maybe give one button for each level of task importance, and an "all tasks" button. Maybe even add one that just stores notes too... (it can be like making a new task, but it's just a single field you can just insert gibberish into)), that change the div content you see on the right side of the page (think like the header in the restaurant project)

// when user clicks new task -> open dialogue with form inputs (like library project), MAYBE disable the escape key from closing the dialog when opened and give the user cancel/submit options (but make sure the submit button is the "focus"ed button when the dialog opens, or just make sure ENTER submits it and doesn't cancel anything)

// different colors for priority (blue['eventually'], yllw['this week'], red['today'] (green will be for ['finished']))

// implement something that grabs the current date (method below), and if the current date is '< X amount of days' away from the date the user set, it sets (and changes) priority on its own (like outlook with emails)

//******************// let date = new Date();
//******************// let thisDate = date.toLocaleDateString();

//******************// console.log(thisDate);

// since we can have our date comparison know our priority based on '< X amount of days' away, and it sets our priority color itself, the user wouldn't even have to choose the priority (we can maybe add an option afterwards for the user to override the priority)

// allow option to delete tasks at any time (same with finished tasks, let user have the option to mark 'complete' which will make it green and do whatever, but also still have the option to delete (maybe use SVG's for buttons from that svg site; same idea with the cards from the 'admin dashboard' project) )

// no restrictions on field input(num, letter, symbol, w/e), except the date

// make the date field a calendar selection, the little box that pops up and you choose a date in the month/year (surely a way to do it). Would probably be easier to do it this way as the date format received by the user would always be the same (no need to put rules in)



//MAYBE make the card a giant button (so make button, append child after child)
//clicking on the card opens up the a dialog that is just a display of the entire note (if it's too big to fit). So make it have pretty much a mirror of what the button has, h3, h6, <p>, etc, except it shows it all
//clicking on Edit will open a different dialog that has fields/inputs (the content in the dialog box input fields will be auto-filled with the content inside the note, same with the date) (I believe there's a way to set the date that the calendar will open to, like a 'default' date)
//WHEN we create new notes/buttons, we'll give them an incrementing class number maybe? ex classList.add('note-' + x.textcontent |or something| ), x=1 ('note-1'), x=2, x=3)
// IF they click cancel (leave the escape btn active), just cancel and change nothing
// IF they click submit, change all of the object values to what they have when submit is clicked (we'll store the notes in an array like we did the books for the library)
// USE the read/not read function we used in the library project to change the internal text of the array object property
//


// make a function/module that can create a generic dialog box
// all of the notes (if we wind up using buttons), will have a watcher applied, and will run the dialog box module when clicked
// the dialog box will have to be able to read the contents of the note object, so maybe we make the notes have a generic title that matches the button? (so like with our library project, our objects had titles that were the book name, maybe we run a background function when you submit a new note (make sure it only runs when you make new notes, and not when you edit them later) that adds the incrementing class ('note-1' etc) and also gives the object the same title (so 'note-1' as well)
//this way it finds the data based on that number (so if note-1 is clicked, it looks for the note-1 object and populates from that data))


//make classes for card based on importance when note is created
// ex classList.add('important') / ('normal') and add it to the toDo-card div (we want the entire card, buttons and all, to disappear if user would click "important tasks", or "future tasks". We can write some logic to make the entire div hidden, based on that class that we added (ex if we click important => hide anything with a 'normal' class, and vice versa, and if we click "all tasks" remove hidden attribute or undo it however we need to))




// if (this.importance === 'important'){}
// if (this.importance === 'normal'){}




//*********** THE BELOW CREATES A DATE INPUT THAT THE USER CAN USE ***********//
//******************** currently just appends to the body ********************//

// const BODY = document.querySelector('body');
// const INPUTCONTAINER = document.createElement('div');
// INPUTCONTAINER.classList.add('date-input-container');
// BODY.appendChild(INPUTCONTAINER);
// const NEWINPUT = document.createElement('input');
// NEWINPUT.classList.add('date-selector');
// NEWINPUT.type = "date";
// NEWINPUT.min = "2024-03-01";
// NEWINPUT.max = "2034-03-01";
// NEWINPUT.onkeydown = ((e) => {
//     return false;
// });
// INPUTCONTAINER.appendChild(NEWINPUT);




// ************ Below listener and function get DATEINPUT from .date-selector input

//const DATEINPUT = document.querySelector('.date-selector');

// DATEINPUT.addEventListener('change', () => {
//     const todaysDate = new Date();
//     const month = todaysDate.getUTCMonth() + 1; // months from 1-12, JS starts at '0' so have to add +1
//     const day = todaysDate.getUTCDate();
//     const year = todaysDate.getUTCFullYear();
        
//     // Using padded values and a '-'; now 2024/1/1 becomes 2024-01-01
//     const paddedMonth = month.toString().padStart(2,"0");
//     const paddedDay = day.toString().padStart(2,"0");
//     const newPaddedDate = `${year}-${paddedMonth}-${paddedDay}`;
//     console.log("padded date below");
//     console.log(newPaddedDate);

//     let userDate = document.querySelector('.date-selector').value;
//     console.log("this is dot value")
//     console.log(userDate);

//     calculateDifference(userDate, newPaddedDate);
//  })


// function calculateDifference(userDate, newPaddedDate) {
//     let startDate = newPaddedDate;
//     let endDate = userDate;

//     let differenceInTime = new Date(endDate).getTime() - new Date(startDate).getTime();
//     let differenceInDays = differenceInTime / (1000 * 3600 * 24) + 1;
//     console.log(differenceInDays);
// }








// // BELOW IS ORIGINAL COPY OF SIDEBAR && ONE CARD EXAMPLE


// <div class="sidebar-container">
//         <h1 class="sidebar-header">To-Do List</h1>
//         <ul class="sidebar-list">
//             <li>
//                 <button>
//                 <img class="sidebar-svg" src="allTask.svg" alt="icon for all tasks">All Tasks</button>
//             </li>
//             <li>
//                 <button>
//                 <img class="sidebar-svg" src="importantTask.svg" alt="icon for important tasks">Important Tasks</button>
//             </li>
//             <li>
//                 <button>
//                 <img class="sidebar-svg" src="futureTask.svg" alt="icon for future tasks">Future Tasks</button>
//             </li>
//             <li>
//                 <button><img class="sidebar-svg" src="completedTask.svg" alt="icon for completed tasks">Completed Tasks</button>
//             </li>
//             <li>
//                 <button><img class="sidebar-svg" src="notes.svg" alt="icon for notes">Notes</button>
//             </li>
//         </ul>
//     </div>

//     <div class="master-container">
//         <div class="card-grid">
//             <div class="toDo-card">
//                 <button class="task note-1">
//                     <h3 class="toDo-title">To-Do Title</h3>
//                     <h6 class="toDo-priority">Important</h6>
//                     <h6 class="toDo-date">Due: 3/15/2024</h6>
//                     <p class="toDo-para">Do this thing, it's important</p>
//                 </button>
//                 <div class="card-buttons">
//                     <button><img src="./markComplete.svg" alt="mark complete icon">Complete</button>
//                     <button><img src="./deleteTask.svg" alt="delete icon">Delete</button>
//                     <button><img src="./editTask.svg" alt="edit icon">Edit</button>
//                 </div>
//             </div>
//         </div>
//     </div>



// // WORKING DIALOG BELOW
//     <dialog class="taskDialog">
//         <form>
//             <fieldset class="newTaskDialog">
//                 <label for="taskTitle" class="formInput titleInput">Task Title:</label>
//                 <input type="text" id="taskTitle" name="task-title" minlength="2" maxlength="60" autocomplete="off">
//                 <label for="taskImportance" class="formInput importanceInput">Importance Level:</label>
//                 <select id="taskImportance">
//                     <option value="important">High</option>
//                     <option value="normal">Low</option>
//                 </select>
//                 <label for="taskDueDate" class="formInput dueDateInput">Due Date:</label>
//                 <div class="dateInputContainer">
//                     <input id="taskDueDate" type="date" min="2024-03-01" max="2034-01-01" onkeydown="return false">
//                 </div>
//                 <label for="taskText" class="formInput taskInput">Note:</label>
//                 <textarea name="task-text" id="taskText" cols="50" rows="1"></textarea>
//             </fieldset>
//             <div class="formButtons">
//                 <button value="cancel" formmethod="dialog" class="formCancel">Cancel</button>
//                 <button value="confirm" class="formConfirm">Confirm</button>
//             </div>
//         </form>
//     </dialog>