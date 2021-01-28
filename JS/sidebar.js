let currentNavigation = ['Board', 'Backlog', 'Add Task', 'Help', 'My Profile']

/**Sidebar is loading while opening the html
 * 
 */
function loadSideBar() {
    document.getElementById('sidebar').innerHTML += `<div class="sidebar">

    <div class="sidebar-menu">
        <div class="sidebar-logo">
            <img src="./img/joinlogo.PNG">
        </div>

        <div id="sidebar-navigation" class="sidebar-navigation d-flex">
        <div class="d-flex navigation-row"> <a href="board.html">  Board</a>  </div>
        <div class="d-flex navigation-row"> <a href="backlog.html">Backlog</a> </div>
        <div class="d-flex navigation-row"> <a href="addtask.html">Add Task</a> </div>
        <div class="d-flex navigation-row"> <a href="help.html">   Help</a> </div>
        <div class="d-flex navigation-row"> <a href="myprofile.html">   My Profile</a> </div>
        <div class="d-flex navigation-row"> <a href="#.html">   Impressum</a> </div>
        <div class="d-flex navigation-row"> <a href="#.html">   Datenschutz</a> </div>
        </div>

    </div>

    <div class="sidebar-profile">
        <img src="img/pretty-smiling-joyfully-female-with-fair-hair-dressed-casually-looking-with-satisfaction.jpg">

    </div>

</div>`

}

function saveBorder() {
let whiteborder = document.querySelector(".navigation-row");

whiteborder.addEventListener("click", function(_whiteBorder) {
   this.classList.toggle("is-active"); 
});
}




/**Used do add the white Square in front of the current navigation
 * 
 */
/* function addSquare() {
    for (let i = 1; i < currentNavigation; i++) {
        document.getElementById('opacity').classList.remove('opacity');
    }

}  */

/* function addCurrentNavigation() {
    for (let index = 0; index < currentNavigation; index++) {

        document.getElementById('sidebar-navigation').innerHTML += `
    <div class="d-flex navigation-row"> <div id="opacity" class="hover-square opacity"></div> <a href="board.html onclick="addSquare()">  ${currentNavigation[index]} </a>  </div>
    `}
}  */

/* <div id="sidebar-navigation" class="sidebar-navigation d-flex">
        <div class="d-flex navigation-row"> <div id="opacity" class="hover-square opacity"></div> <a href="board.html" onclick="addSquare()">  ${currentNavigation}</a>  </div>
        <div class="d-flex navigation-row"> <div id="opacity" class="hover-square opacity"></div> <a href="backlog.html" onclick="addSquare()">Backlog</a> </div>
        <div class="d-flex navigation-row"> <div id="opacity" class="hover-square opacity"></div> <a href="addtask.html" onclick="addSquare()">Add Task</a> </div>
        <div class="d-flex navigation-row"> <div id="opacity" class="hover-square opacity"></div> <a href="help.html" onclick="addSquare()">   Help</a> </div>
        <div class="d-flex navigation-row"> <div id="opacity" class="hover-square opacity"></div> <a href="myprofile.html" onclick="addSquare()">   My Profile</a> </div> 
        </div> */