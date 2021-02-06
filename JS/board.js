/**
 * This function add new Taks to the container "To Do" & update it
 */
let color = 'gold';

function updateToDo() {
    for (let i = 0; i < alltasks.length; i++) {
        let currenttask = alltasks[i];
        
        if (currenttask.taskcategory == 'todo') {  //category todo

            document.getElementById('todo').innerHTML = '';
            pickcolor(currenttask);

            document.getElementById('todo').innerHTML += `
        <div class="container-board" style="border-left: 12px solid ${color}">
                        <div class="d-flex date-img-container">
                        <div class="blue board-bold"> ${currenttask['taskname']}</div>
                        <div class="dustbin" style="font-size: 10px" onclick="deleteTask()" ><img src="img/dustbin_80977.png"></div>
                    </div>
                        <div>${currenttask['taskcategory']}</div>
                        <div>${currenttask['taskurgency']}</div>
                        <div class="date-img-container d-flex">
                            <div class="date-board">${currenttask['taskdate']}</div>
                            <div><img class="img-board" src="img/user_default.jpg"></div>
                        </div>
                    </div>`
        }

        else if (currenttask == 'inprogress') { //category inprogress

            document.getElementById('inprogress').innerHTML = '';
            pickcolor(currenttask);

            document.getElementById('inprogress').innerHTML += `
            <div class="container-board" style="border-left: 12px solid ${color}">
                        <div class="d-flex date-img-container">
                        <div class="blue board-bold"> ${currenttask['taskname']}</div>
                        <div class="dustbin" style="font-size: 10px" onclick="deleteTask()" ><img src="img/dustbin_80977.png"></div>
                    </div>
                        <div>${currenttask['taskcategory']}</div>
                        <div>${currenttask['taskurgency']}</div>
                        <div class="date-img-container d-flex">
                            <div class="date-board">${currenttask['taskdate']}</div>
                            <div><img class="img-board" src="img/user_default.jpg"></div>
                        </div>
                    </div>`

        }

        else if (currenttask == 'testing') { //category testing

            document.getElementById('testing').innerHTML = '';
            pickcolor(currenttask);

            document.getElementById('testing').innerHTML += `
            <div class="container-board" style="border-left: 12px solid ${color}">
                        <div class="d-flex date-img-container">
                        <div class="blue board-bold"> ${currenttask['taskname']}</div>
                        <div class="dustbin" style="font-size: 10px" onclick="deleteTask()" ><img src="img/dustbin_80977.png"></div>
                    </div>
                        <div>${currenttask['taskcategory']}</div>
                        <div>${currenttask['taskurgency']}</div>
                        <div class="date-img-container d-flex">
                            <div class="date-board">${currenttask['taskdate']}</div>
                            <div><img class="img-board" src="img/user_default.jpg"></div>
                        </div>
                    </div>`

        }

        else if (currenttask == 'done') { //category done

            document.getElementById('done').innerHTML = '';
            pickcolor(currenttask);

            document.getElementById('done').innerHTML += `
            <div class="container-board" style="border-left: 12px solid ${color}">
                        <div class="d-flex date-img-container">
                        <div class="blue board-bold"> ${currenttask['taskname']}</div>
                        <div class="dustbin" style="font-size: 10px" onclick="deleteTask()" ><img src="img/dustbin_80977.png"></div>
                    </div>
                        <div>${currenttask['taskcategory']}</div>
                        <div>${currenttask['taskurgency']}</div>
                        <div class="date-img-container d-flex">
                            <div class="date-board">${currenttask['taskdate']}</div>
                            <div><img class="img-board" src="img/user_default.jpg"></div>
                        </div>
                    </div>`

        }
    }
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

function deleteTask(i) {
    alltasks.splice(i, 1);
    updateToDo();
}