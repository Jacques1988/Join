function loadSideBar() {
    document.getElementById('sidebar').innerHTML += `<div class="sidebar">

    <div class="sidebar-menu">
        <div class="sidebar-logo">
            <img src="./img/joinlogo.PNG">

        </div>

        <div class="sidebar-navigation d-flex">
        <div class="d-flex navigation-row"> <div id="opacity1" class="hover-square opacity"></div> <a href="board.html" onclick="addSquare()">  Board</a>  </div>
        <div class="d-flex navigation-row"> <div id="opacity2" class="hover-square opacity"></div> <a href="backlog.html" onclick="addSquare()">Backlog</a> </div>
        <div class="d-flex navigation-row"> <div id="opacity3" class="hover-square opacity"></div> <a href="addtask.html" onclick="addSquare()">Add Task</a> </div>
        <div class="d-flex navigation-row"> <div id="opacity4" class="hover-square opacity"></div> <a href="help.html" onclick="addSquare()">   Help</a> </div>
        <div class="d-flex navigation-row"> <div id="opacity5" class="hover-square opacity"></div> <a href="myprofile.html" onclick="addSquare()">   My Profile</a> </div>
        </div>
    </div>

    <div class="sidebar-profile">
        <img src="img/pretty-smiling-joyfully-female-with-fair-hair-dressed-casually-looking-with-satisfaction.jpg">

    </div>

</div>`;
}

function addSquare() {
    for (let i = 1; i < 6; i++) {
        document.getElementById('opacity' + i).classList.remove('opacity'); 
    }
}
