/**
 * color defines the color assigned to the category of each task; 
 */
let color = 'gold';
let salescolor = 'gold';
let marketingcolor = 'yellowgreen';
let productcolor = 'salmon';

/**
 *ClearBoard: sets all innerHTML to '' 
 */
function ClearBoard() {
    document.getElementById('todo').innerHTML = '';
    document.getElementById('inprogress').innerHTML = '';
    document.getElementById('testing').innerHTML = '';
    document.getElementById('done').innerHTML = '';
}

/**
 * newboard: initializes the board after server download
 */

async function newboard() {
    await initserver();
    updateBoard();
}


/**
 * updateBoard: This function updates all panels 
 */
function updateBoard() {

    ClearBoard();
    for (let i = 0; i < alltasks.length; i++) {

        let currentid = alltasks[i].taskid; //current id = id of element no. 'i' in array, changes each iteration
        let currenttask = alltasks[currentid]; //currenttask = task-element with id 'currentid' in array, changes each iteration
        let taskauthorposition = currenttask.taskauthorid;
        let taskauthor = users[taskauthorposition];
        if (currenttask.taskstatus == 'todo') {  //status todo
            UpdateTodo(currenttask, currentid, taskauthor);
        }
        else if (currenttask.taskstatus == 'inprogress') { //status inprogress
            UpdateInprogress(currenttask, currentid, taskauthor);
        }
        else if (currenttask.taskstatus == 'testing') { //status testing
            UpdateTesting(currenttask, currentid, taskauthor);
        }
        else if (currenttask.taskstatus == 'done') { //status done
            UpdateDone(currenttask, currentid, taskauthor);
        }
    }
}

/**
 * Update"STATUS": the following 4 functions update the assigned divs in view and fill their HTML with tasks from alltasks, if existing
 * @param {*} currenttask: task-element that is being processed
 * @param {*} currentid id of task that is being processed
 */
function UpdateTodo(currenttask, currentid, taskauthor) {

    pickcolor(currenttask);
    document.getElementById('todo').innerHTML += `
<div id="dragelement-${currentid}" class="container-board" style="border-left: 12px solid ${color}" draggable="true" ondragstart="dragstart(event)">
                <div class="d-flex date-img-container">
                <div class="blue board-bold" onclick="taskDetails(${currentid})"> ${currenttask['taskname']}</div>
                <div class="dustbin" style="font-size: 10px" onclick="deleteTask(${currentid})" ><img src="img/dustbin_80977-forLinuxServer.PNG" draggable="false"></div>
            </div>
                <div>${currenttask['taskcategory']}</div>
                <div>${currenttask['taskurgency']}</div>
                <div class="date-img-container d-flex">
                    <div class="date-board">${currenttask['taskdate'].replace("-", ".").replace("-", ".")}</div>
                    <div><img class="img-board cursorpointer" onclick="TaskMoveRight(${currenttask['taskid']})" src="./img/arrow-34-128-right-forLinuxServer.PNG" draggable="false"></div>
                    <div><img class="img-board" src="./uploads/${taskauthor['userimage']}" draggable="false"></div>
                </div>
            </div>`
}

function UpdateInprogress(currenttask, currentid, taskauthor) {

    pickcolor(currenttask);
    document.getElementById('inprogress').innerHTML += `
    <div id="dragelement-${currentid}" class="container-board" style="border-left: 12px solid ${color}" draggable="true" ondragstart="dragstart(event)">
                <div class="d-flex date-img-container">
                <div class="blue board-bold" onclick="taskDetails(${currentid})"> ${currenttask['taskname']}</div>
                <div class="dustbin" style="font-size: 10px" onclick="deleteTask(${currentid})" ><img src="img/dustbin_80977-forLinuxServer.PNG" draggable="false"></div>
            </div>
                <div>${currenttask['taskcategory']}</div>
                <div>${currenttask['taskurgency']}</div>
                <div class="date-img-container d-flex">
                    <div class="date-board">${currenttask['taskdate'].replace("-", ".").replace("-", ".")}</div>
                    <div><img class="img-board cursorpointer" onclick="TaskMoveLeft(${currenttask['taskid']})" src="./img/arrow-34-128-left-forLinuxServer.PNG" draggable="false"></div>
                    <div><img class="img-board cursorpointer" onclick="TaskMoveRight(${currenttask['taskid']})" src="./img/arrow-34-128-right-forLinuxServer.PNG" draggable="false"></div>
                    <div><img class="img-board" src="./uploads/${taskauthor['userimage']}" draggable="false"></div>
                </div>
            </div>`
}

function UpdateTesting(currenttask, currentid, taskauthor) {

    pickcolor(currenttask);
    document.getElementById('testing').innerHTML += `
    <div id="dragelement-${currentid}" class="container-board" style="border-left: 12px solid ${color}" draggable="true" ondragstart="dragstart(event)">
                <div class="d-flex date-img-container">
                <div class="blue board-bold" onclick="taskDetails(${currentid})"> ${currenttask['taskname']}</div>
                <div class="dustbin" style="font-size: 10px" onclick="deleteTask(${currentid})" ><img src="img/dustbin_80977-forLinuxServer.PNG" draggable="false"></div>
            </div>
                <div>${currenttask['taskcategory']}</div>
                <div>${currenttask['taskurgency']}</div>
                <div class="date-img-container d-flex">
                    <div class="date-board">${currenttask['taskdate'].replace("-", ".").replace("-", ".")}</div>
                    <div><img class="img-board cursorpointer" onclick="TaskMoveLeft(${currenttask['taskid']})" src="./img/arrow-34-128-left-forLinuxServer.PNG" draggable="false"></div>
                    <div><img class="img-board cursorpointer" onclick="TaskMoveRight(${currenttask['taskid']})" src="./img/arrow-34-128-right-forLinuxServer.PNG" draggable="false"></div>
                    <div><img class="img-board" src="./uploads/${taskauthor['userimage']}" draggable="false"></div>
                </div>
            </div>`
}

function UpdateDone(currenttask, currentid, taskauthor) {

    pickcolor(currenttask);
    document.getElementById('done').innerHTML += `
    <div id="dragelement-${currentid}" class="container-board" style="border-left: 12px solid ${color}" draggable="true" ondragstart="dragstart(event)">
                <div class="d-flex date-img-container">
                <div class="blue board-bold" onclick="taskDetails(${currentid})"> ${currenttask['taskname']}</div>
                <div class="dustbin" style="font-size: 10px" onclick="deleteTask(${currentid})" ><img src="img/dustbin_80977-forLinuxServer.PNG" draggable="false"></div>
            </div>
                <div>${currenttask['taskcategory']}</div>
                <div>${currenttask['taskurgency']}</div>
                <div class="date-img-container d-flex">
                    <div class="date-board">${currenttask['taskdate'].replace("-", ".").replace("-", ".")}</div>
                    <div><img class="img-board cursorpointer" onclick="TaskMoveLeft(${currenttask['taskid']})" src="./img/arrow-34-128-left-forLinuxServer.PNG" draggable="false"></div>
                     <div><img class="img-board" src="./uploads/${taskauthor['userimage']}" draggable="false"></div>
                </div>
            </div>`
}

/**
 * taskDetails displays a div that contains details for the selected task
 * @param {string} task id: id of current task
 */
function taskDetails(taskid) {
    document.getElementById('taskdetails-container').classList.remove('d-none');
    document.getElementById('taskdetails-container').classList.remove('z-minus5');
    document.getElementById('taskdetails-container').classList.add('z-2');

    taskDetailsHTML(taskid);
}
/**
 * taskDetailsHTML builds the fitting HTML to display in taskDetails
 * @param {string} taskid: id of current task
 */
function taskDetailsHTML(taskid) {
    let selectedtask = alltasks[taskid];
    let taskauthor = users[selectedtask.taskauthorid].username;
    document.getElementById('taskdetails').innerHTML = '';
    document.getElementById('taskdetails').innerHTML +=
        `  <div> <b> Task Details: </b></div> 
                <div> Name: ${selectedtask['taskname']}</div> 
                <div> Creator: ${taskauthor}</div> 
                <div> Category: ${selectedtask['taskcategory']}</div> 
                <div> Due Date:${selectedtask['taskdate'].replace("-", ".").replace("-", ".")}</div> 
                <div> Urgency:${selectedtask['taskurgency']}</div> 
                <div> Description:${selectedtask['taskdescription']}</div>  `
}
/**
 * closeTaskDetails: removes divs with task details from view 
 */
function closeTaskDetails() {
    document.getElementById('taskdetails-container').classList.add('z-minus5');
    document.getElementById('taskdetails-container').classList.add('d-none');
    document.getElementById('taskdetails').innerHTML = '';
}

/**
 * Color for each Category is choosen
 * @param {*} currenttask 
 */
function pickcolor(currenttask) {
    if (currenttask.taskcategory == 'Marketing') {
        color = marketingcolor;
    }
    else if (currenttask.taskcategory == 'Product') {
        color = productcolor;
    }
    else if (currenttask.taskcategory == 'Sales') {
        color = salescolor;
    }
}

/**
 * onclick="TaskMoveRight('taskid')" : task progresses in board to next panel to the right, initiates pushfunction to alltasks
 * @param {*} id task id
 */

function TaskMoveRight(id) {
    let tasktarget;
    if (alltasks[id].taskstatus == 'todo') {
        tasktarget = 'inprogress';
        PushTask(id, tasktarget);
    }
    else if (alltasks[id].taskstatus == 'inprogress') {
        tasktarget = 'testing';
        PushTask(id, tasktarget);
    }
    else if (alltasks[id].taskstatus == 'testing') {
        tasktarget = 'done';
        PushTask(id, tasktarget);
    }
    UploadTaskToServer(); //TASK UPLOAD TO SERVER.
    updateBoard();

}

/**
 * onclick="TaskMoveLeft('taskid')" : task is backrolled in board to next panel to the left, initiates pushfunction to alltasks
 * @param {*} id task id
 */
function TaskMoveLeft(id) {
    let tasktarget;
    if (alltasks[id].taskstatus == 'done') {
        tasktarget = 'testing';
        PushTask(id, tasktarget);
    }
    else if (alltasks[id].taskstatus == 'inprogress') {
        tasktarget = 'todo';
        PushTask(id, tasktarget);
    }
    else if (alltasks[id].taskstatus == 'testing') {
        tasktarget = 'inprogress';
        PushTask(id, tasktarget);
    }
    updateBoard();
    UploadTaskToServer(); //TASK UPLOAD TO SERVER.

}

/**
 * PushTask: initiated by TaskMoveLeft / TaskMoveRight; changes taskstatus to newly assigned status.
 * @param {*} id : task id
 * @param {*} tasktarget: new task status
 */
function PushTask(id, tasktarget) {
    alltasks[id].taskstatus = tasktarget;
    //ServerDeleteAndUpload()
}

/**
 * deleteTask: "Deletes" selected task (via trashbin symbol) from view. Done by assigning new status 'TaskDeleted'. Task is still stored in alltasks!
 * @param {*} i : task id
 */
function deleteTask(i) {
    alltasks[i].taskstatus = 'TaskDeleted';
    //alltasks.splice(i, 1);
    updateBoard();
    UploadTaskToServer(); //TASK UPLOAD TO SERVER.

}

/**
 * NOT USED: replaces old alltasks with new one from temporary storage
 */
function ServerDeleteAndUpload() {
    backend.deleteItem('alltasks'); //deletes old array from server
    backend.setItem('alltasks', JSON.stringify(alltasks)); //sends new array to server
}


