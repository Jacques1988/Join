let currentNavigation = ['Board', 'Backlog', 'Add Task', 'Help', 'My Profile', 'Impressum', 'Datenschutz'];

/**Menu is loaded on every HTML file
 * 
 */
function loadSideBar() {
    document.getElementById('sidebar').innerHTML += `<div class="sidebar d-flex-responsive">

    <div class="sidebar-menu">
        <div class="sidebar-logo">
            <img src="./img/joinlogo.PNG">
        </div>

        <div id="sidebar-navigation" class="sidebar-navigation d-flex d-none-responsive">
        <div class="d-flex navigation-row"> <a href="board.html">  Board</a>  </div>
        <div class="d-flex navigation-row"> <a href="backlog.html">Backlog</a> </div>
        <div class="d-flex navigation-row"> <a href="addtask.html">Add Task</a> </div>
        <div class="d-flex navigation-row"> <a href="help.html">  Help</a> </div>
        <div class="d-flex navigation-row"> <a href="myprofile.html">   My Profile</a> </div>
        <div class="d-flex navigation-row"> <a href="Impressum.html">   Impressum</a> </div>
        <div class="d-flex navigation-row"> <a href="datenschutz.html">   Datenschutz</a> </div>
        </div>

    </div>

    <div class="sidebar-profile d-none-responsive">
        <img src="img/pretty-smiling-joyfully-female-with-fair-hair-dressed-casually-looking-with-satisfaction.jpg">
        <button>Ausloggen</button> 
    </div>

    <div class="hamburger-menu"> <img onclick="menuOpen()" src="img/hamburger-menu.png"></div>

  </div>
  `
}

/**
 * When click on the 3 stripes the mobile menu is opening
 */
function openMobileMenu() {
    document.getElementById('total-size').innerHTML = `
    <div class="box-transparent" onclick="menuClose()">
    <div class="responsive-menu">
    <div class="d-flex navigation-row"> <a href="board.html">  Board</a>  </div>
    <div class="d-flex navigation-row"> <a href="backlog.html">Backlog</a> </div>
    <div class="d-flex navigation-row"> <a href="addtask.html">Add Task</a> </div>
    <div class="d-flex navigation-row"> <a href="help.html">  Help</a> </div>
    <div class="d-flex navigation-row"> <a href="myprofile.html">   My Profile</a> </div>
    <div class="d-flex navigation-row"> <a href="Impressum.html">   Impressum</a> </div>
    <div class="d-flex navigation-row"> <a href="datenschutz.html">   Datenschutz</a> </div>

    <div class="sidebar-profile">
    <img src="img/pretty-smiling-joyfully-female-with-fair-hair-dressed-casually-looking-with-satisfaction.jpg">
    <button>Ausloggen</button> 
</div>
    </div>



    </div>
    `
}
/**
 * mobile menu close
 */
function menuClose() {
    document.getElementById('total-size').classList.add("d-none-responsive");
}

/**
 * mobile menu is opening
 */
function menuOpen() {
    document.getElementById('total-size').classList.remove("d-none-responsive");
    openMobileMenu();
}





function saveBorder() {
    let whiteborder = document.querySelector(".navigation-row");

    whiteborder.addEventListener("click", function (_whiteBorder) {
        this.classList.toggle("is-active");
    });
}



/**Used do add the white Square in front of the current navigation
 *
 */
/*  function addSquare() {
    for (let i = 1; i < currentNavigation; i++) {
        document.getElementById('opacity').classList.remove('opacity');
    }
}   */


/* <div id="sidebar-navigation" class="sidebar-navigation d-flex">
        <div class="d-flex navigation-row"> <div id="opacity" class="hover-square opacity"></div> <a href="board.html" onclick="addSquare()">  ${currentNavigation}</a>  </div>
        <div class="d-flex navigation-row"> <div id="opacity" class="hover-square opacity"></div> <a href="backlog.html" onclick="addSquare()">Backlog</a> </div>
        <div class="d-flex navigation-row"> <div id="opacity" class="hover-square opacity"></div> <a href="addtask.html" onclick="addSquare()">Add Task</a> </div>
        <div class="d-flex navigation-row"> <div id="opacity" class="hover-square opacity"></div> <a href="help.html" onclick="addSquare()">   Help</a> </div>
        <div class="d-flex navigation-row"> <div id="opacity" class="hover-square opacity"></div> <a href="myprofile.html" onclick="addSquare()">   My Profile</a> </div>
        </div> */