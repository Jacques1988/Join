/**
 * This function add new Taks to the container "To Do"
 */
function addBoardToDo() {
    for (let i = 0; i < taskname.length; i++) {
        document.getElementById('todo').innerHTML += `
        <div class="container-board">
                        <div class="d-flex date-img-container">
                        <div class="blue board-bold"> ${taskname} </div>
                        <div style="font-size: 10px" onclick="Delete()" >Delete</div>
                    </div>
                        <div>${taskcategory}</div>
                        <div>${taskurgency}</div>
                        <div class="date-img-container d-flex">
                            <div class="date-board">${taskdate}</div>
                            <div><img class="img-board" src="img/user_default.jpg"></div>
                        </div>
                    </div>`
    }
}