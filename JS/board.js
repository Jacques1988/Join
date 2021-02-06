/**
 * color defines the color assigned to the category of each task; default gold.
 */
let color = 'gold';

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
 * updateBoard: This function updates all panels 
 */
function updateBoard() {
    ClearBoard();
    for (let i = 0; i < alltasks.length; i++) {

        let currentid = alltasks[i].taskid;
        let currenttask = alltasks[currentid];
        if (currenttask.taskstatus == 'todo') {  //status todo
            UpdateTodo(currenttask, currentid);
        }
        else if (currenttask.taskstatus == 'inprogress') { //status inprogress
            UpdateInprogress(currenttask, currentid);
        }
        else if (currenttask.taskstatus == 'testing') { //status testing
            UpdateTesting(currenttask, currentid);
        }
        else if (currenttask.taskstatus == 'done') { //status done
            UpdateDone(currenttask, currentid);
        }
    }
}

/**
 * Update"STATUS": the following 4 functions update the assigned divs in view and fill them with tasks from alltasks, if existing
 * @param {*} currenttask: task that is being processed
 * @param {*} currentid id of task (might be redundant)
 */
function UpdateTodo(currenttask, currentid) {
    
    pickcolor(currenttask);
    document.getElementById('todo').innerHTML += `
<div class="container-board" style="border-left: 12px solid ${color}">
                <div class="d-flex date-img-container">
                <div class="blue board-bold"> ${currenttask['taskname']}</div>
                <div class="dustbin" style="font-size: 10px" onclick="deleteTask(${currentid})" ><img src="img/dustbin_80977.png"></div>
            </div>
                <div>${currenttask['taskcategory']}</div>
                <div>${currenttask['taskurgency']}</div>
                <div class="date-img-container d-flex">
                    <div class="date-board">${currenttask['taskdate']}</div>
                    <div><img class="img-board cursorpointer" onclick="TaskMoveRight(${currenttask['taskid']})" src="./img/arrow-34-128-right.png"></div>
                    <div><img class="img-board" src="img/user_default.jpg"></div>
                </div>
            </div>`
}

function UpdateInprogress(currenttask, currentid) {
  
    pickcolor(currenttask);
    document.getElementById('inprogress').innerHTML += `
    <div class="container-board" style="border-left: 12px solid ${color}">
                <div class="d-flex date-img-container">
                <div class="blue board-bold"> ${currenttask['taskname']}</div>
                <div class="dustbin" style="font-size: 10px" onclick="deleteTask(${currentid})" ><img src="img/dustbin_80977.png"></div>
            </div>
                <div>${currenttask['taskcategory']}</div>
                <div>${currenttask['taskurgency']}</div>
                <div class="date-img-container d-flex">
                    <div class="date-board">${currenttask['taskdate']}</div>
                    <div><img class="img-board cursorpointer" onclick="TaskMoveLeft(${currenttask['taskid']})" src="./img/arrow-34-128-left.png"></div>
                    <div><img class="img-board cursorpointer" onclick="TaskMoveRight(${currenttask['taskid']})" src="./img/arrow-34-128-right.png"></div>
                    <div><img class="img-board" src="img/user_default.jpg"></div>
                </div>
            </div>`
}

function UpdateTesting(currenttask, currentid) {
    
    pickcolor(currenttask);
    document.getElementById('testing').innerHTML += `
    <div class="container-board" style="border-left: 12px solid ${color}">
                <div class="d-flex date-img-container">
                <div class="blue board-bold"> ${currenttask['taskname']}</div>
                <div class="dustbin" style="font-size: 10px" onclick="deleteTask(${currentid})" ><img src="img/dustbin_80977.png"></div>
            </div>
                <div>${currenttask['taskcategory']}</div>
                <div>${currenttask['taskurgency']}</div>
                <div class="date-img-container d-flex">
                    <div class="date-board">${currenttask['taskdate']}</div>
                    <div><img class="img-board cursorpointer" onclick="TaskMoveLeft(${currenttask['taskid']})" src="./img/arrow-34-128-left.png"></div>
                    <div><img class="img-board cursorpointer" onclick="TaskMoveRight(${currenttask['taskid']})" src="./img/arrow-34-128-right.png"></div>
                    <div><img class="img-board" src="img/user_default.jpg"></div>
                </div>
            </div>`
}

function UpdateDone(currenttask, currentid) {
    
    pickcolor(currenttask);
    document.getElementById('done').innerHTML += `
    <div class="container-board" style="border-left: 12px solid ${color}">
                <div class="d-flex date-img-container">
                <div class="blue board-bold"> ${currenttask['taskname']}</div>
                <div class="dustbin" style="font-size: 10px" onclick="deleteTask(${currentid})" ><img src="img/dustbin_80977.png"></div>
            </div>
                <div>${currenttask['taskcategory']}</div>
                <div>${currenttask['taskurgency']}</div>
                <div class="date-img-container d-flex">
                    <div class="date-board">${currenttask['taskdate']}</div>
                    <div><img class="img-board cursorpointer" onclick="TaskMoveLeft(${currenttask['taskid']})" src="./img/arrow-34-128-left.png"></div>
                     <div><img class="img-board" src="img/user_default.jpg"></div>
                </div>
            </div>`
}

/**
 * Color for each Category is choosen
 * @param {*} currenttask 
 */
function pickcolor(currenttask) {
    if (currenttask.taskcategory == 'Marketing') {
        color = 'yellowgreen';
    }
    else if (currenttask.taskcategory == 'Sales') {
        color = 'salmon';
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
 * deleteTask: deletes selected task (via trashbin symbol) from alltasks 
 * @param {*} i : task id
 */
function deleteTask(i) {
    alltasks.splice(i, 1);
    updateBoard(); 
    //ServerDeleteAndUpload()
}

function ServerDeleteAndUpload() {
    backend.deleteItem('alltasks'); //deletes old array from server
    backend.setItem('alltasks', JSON.stringify(alltasks)); //sends new array to server
}