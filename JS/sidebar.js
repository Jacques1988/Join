/**Menu is loaded on every HTML file
 * 
 */
function loadSideBar() {
    document.getElementById('sidebar').innerHTML += `<div class="sidebar d-flex-responsive">

    <div class="sidebar-menu">
        <div class="sidebar-logo" onclick="initBoard()">
         <a href="board.html">   <img src="./img/joinlogo-forLinuxServer.PNG"> <a>
        </div>

        <div id="sidebar-navigation" class="sidebar-navigation d-flex d-none-responsive">
        <div class="d-flex navigation-row" id="board"> <a href="board.html" style="margin-left: 0px"> Board</a> </div>
        <div class="d-flex navigation-row" id="backlog"> <a href="backlog.html">Backlog</a> </div>
        <div class="d-flex navigation-row" id="addtask" onclick="initAddTask()"> <a href="addtask.html">Add Task</a> </div>
        <div class="d-flex navigation-row" id="help" onclick="initHelp()"> <a href="help.html">  Help</a> </div>
        <div class="d-flex navigation-row" id="myprofile" onclick="initMyProfile()"> <a href="myprofile.html">   My Profile</a> </div>
        <div class="d-flex navigation-row" id="impressum" onclick="initImpressum()"> <a href="Impressum.html">   Impressum</a> </div>
        <div class="d-flex navigation-row" id="datenschutz" onclick="initDatenschutz()"> <a href="datenschutz.html">   Datenschutz</a> </div>
        </div>

    </div>

    <div class="sidebar-profile d-none-responsive">
        <a href="myprofile.html" style="margin-bottom: 8px"> <img src="img/testdummyimage-forLinuxServer.JPG"></a>
        <a class="logoutlink" href="logout.html"><div class="logoutbtn" onclick="logout()"><div class="logoutbtnanimatediv"><span>Logout</span></div></div></a> 

    </div>

    <div class="hamburger-menu"> <img class="d-none-big" id="hamburger" onclick="menuOpen(), transform()" src="img/hamburger-menu.png"></div>

  </div>
  `
}

function transform() {
    document.getElementById('hamburger').classList.toggle('change');
}




/* /**Used do add the white Square in front of the current navigation
 *
 */
function initBoard() {
    loadSideBar();
    BoardSquare(); 
}
function BoardSquare() {
    if (window.location.href.endsWith('board.html')) {
        document.getElementById('board').classList.add('square');
    };
}

function initBacklog() {
    loadSideBar();
    BacklogSquare(); 
}
function BacklogSquare() {
    if (window.location.href.endsWith('backlog.html')) {
        document.getElementById('backlog').classList.add('square')
    };
}

function initAddTask() {
    loadSideBar();
    AddTaskSquare(); 
}
function AddTaskSquare() {
    if (window.location.href.endsWith('addtask.html')) {
        document.getElementById('addtask').classList.add('square')
    };
}

function initHelp() {
    loadSideBar();
    HelpSquare(); 
}
function HelpSquare() {
    if (window.location.href.endsWith('help.html')) {
        document.getElementById('help').classList.add('square')
    };
}

function initMyProfile() {
    loadSideBar();
    myProfileSquare(); 
}
function myProfileSquare() {
    if (window.location.href.endsWith('myprofile.html')) {
        document.getElementById('myprofile').classList.add('square')
    };
}

function initImpressum() {
    loadSideBar();
    ImpressumSquare(); 
}
function ImpressumSquare() {
    if (window.location.href.endsWith('Impressum.html')) {
        document.getElementById('impressum').classList.add('square')
    };
}

function initDatenschutz() {
    loadSideBar();
    DatenschutzSquare(); 
}
function DatenschutzSquare() {
    if (window.location.href.endsWith('datenschutz.html')) {
        document.getElementById('datenschutz').classList.add('square')
    };
}


/**
 *Logout: logs user out and resets to login page
 */

function logout() {
    console.log('logged out.');
    //activeuser reset
    //picture reset
}




/*Responsive Design*/

/**
 * When click on the 3 stripes the mobile menu is opening
 */
function openMobileMenu() {
    document.getElementById('total-size').innerHTML = `
    <div id="transformation" class="box-transparent" onclick="menuClose()">
    <div class="responsive-menu">
    <div class="d-flex navigation-row"> <a href="board.html">  Board</a>  </div>
    <div class="d-flex navigation-row"> <a href="backlog.html">Backlog</a> </div>
    <div class="d-flex navigation-row"> <a href="addtask.html">Add Task</a> </div>
    <div class="d-flex navigation-row"> <a href="help.html">  Help</a> </div>
    <div class="d-flex navigation-row"> <a href="myprofile.html">   My Profile</a> </div>
    <div class="d-flex navigation-row"> <a href="Impressum.html">   Impressum</a> </div>
    <div class="d-flex navigation-row"> <a href="datenschutz.html">   Datenschutz</a> </div>

    <div class="sidebar-profile">
    <a href="myprofile.html"><img src="img/pretty-smiling-joyfully-female-with-fair-hair-dressed-casually-looking-with-satisfaction.jpg"></a>
    <a href="logout.html"><button onclick="logout()" class="btn-logout-menu">Ausloggen</button> </a>
</div>
    </div>
    </div>
    `
    transform(); 
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
