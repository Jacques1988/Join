/**
 * color defines the color assigned to the category of each task; default gold.
 */
let color = 'gold';

/**
 * udpateBoard: This function updates all panels 
 */
function updateBoard() {
    for (let i = 0; i < alltasks.length; i++) {
        let currenttask = alltasks[i];
        let currentid = alltasks[i].taskid;

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
    document.getElementById('todo').innerHTML = '';
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
                    <div><img class="img-board" src="img/user_default.jpg"></div>
                </div>
            </div>`
}

function UpdateInprogress(currenttask, currentid) {
    document.getElementById('inprogress').innerHTML = '';
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
                    <div><img class="img-board" src="img/user_default.jpg"></div>
                </div>
            </div>`
}

function UpdateTesting(currenttask, currentid) {
    document.getElementById('testing').innerHTML = '';
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
                    <div><img class="img-board" src="img/user_default.jpg"></div>
                </div>
            </div>`
}

function UpdateDone(currenttask, currentid) {
    document.getElementById('done').innerHTML = '';
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
 * deleteTask: deletes selected task (via trashbin symbol) from alltasks and uploads new alltasks to server
 * @param {*} i : task id
 */
function deleteTask(i) {
    alltasks.splice(i, 1);
    updateBoard(); //updates complete view
    //backend.deleteItem('alltasks'); //deletes old array from server
    //UploadTaskToServer(); //sends new array to server
}