/**
 * This function add new Taks to the container "To Do"
 */
let color = 'red';

function addBoardToDo() {
    for (let i = 0; i < alltasks.length; i++) {
        let currenttask = alltasks[i];
        
        document.getElementById('todo').innerHTML = '';
        pickcolor(currenttask);
        
        document.getElementById('todo').innerHTML += `
        <div class="container-board" style="border-left: 12px solid ${color}">
                        <div class="d-flex date-img-container">
                        <div class="blue board-bold"> ${currenttask['taskname']}</div>
                        <div style="font-size: 10px" onclick="Delete()" >Delete</div>
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

function pickcolor(currenttask) {
    if (currenttask.taskcategory == 'Sales'){
        color = 'teal';
    }
    else if(currenttask.taskcategory == 'Marketing'){
        color = 'green';
    }
}