/**Menu is loaded on every HTML file
 * 
 */
async function loadSideBar() {
    await initserver(); //DOWNLOAD FROM SERVER
    let myprofileid = localStorage.getItem('activeuser');

    let image = users[myprofileid].userimage;
    document.getElementById('sidebar').innerHTML += `<div class="sidebar d-flex-responsive">

    <div class="sidebar-menu">
        <div class="sidebar-logo" onclick="initBoard()">
         <a href="board.html"> <img src="./img/joinlogo-forLinuxServer.PNG"> <a>
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
        <a href="myprofile.html" style="margin-bottom: 8px"> <img src="./uploads/${image}"></a>
        <a class="logoutlink" href="logout.html"><div class="logoutbtn" onclick="logout(), deleteActiveUser()"><div class="logoutbtnanimatediv"><span>Logout</span></div></div></a> 

    </div>

    <div class="hamburger-menu"> <img class="d-none-big" id="hamburger" onclick="menuOpen()" src="img/hamburger-menu.png"></div>

  </div>;
  `
}

/* /**Used do add the white Square in front of the current navigation
 *
 */

function boardSquare() {
    document.getElementById('board').classList.add('square');
}

function backlogSquare() {
    document.getElementById('backlog').classList.add('square')
}
function addTaskSquare() {
    document.getElementById('addtask').classList.add('square')
}
function helpSquare() {
    document.getElementById('help').classList.add('square')
}
function myProfileSquare() {
    document.getElementById('myprofile').classList.add('square')
}
function impressumSquare() {
    document.getElementById('impressum').classList.add('square')
}
function datenschutzSquare() {
    document.getElementById('datenschutz').classList.add('square')
}
/*function boardSquare() { //old version, not necessary
    if (window.location.href.endsWith('board.html')) {
        document.getElementById('board').classList.add('square');
    };
}*/

/**
 * These functions update the sidebar on the current html
 */
async function initBoard() {
    await loadSideBar();
    boardSquare();
}
async function initBacklog() {
    await loadSideBar();
    backlogSquare(); 
}
async function initAddTask() {
    await loadSideBar();
    addTaskSquare(); 
}

async function initHelp() {
    await loadSideBar();
    helpSquare(); 
}
async function initMyProfile() {
    await loadSideBar();
    myProfileSquare(); 
}

async function initImpressum() {
    await loadSideBar();
    impressumSquare(); 
}
async function initDatenschutz() {
    await loadSideBar();
    datenschutzSquare(); 
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
    let myprofileid = localStorage.getItem('activeuser');
    LoadLocal(); 
    let image = users[myprofileid].userimage;
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
    <a href="myprofile.html"><img src="./uploads/${image}"></a>
    <a href="logout.html"><button class="btn-logout-menu" onclick="logout()">Logout</button> </a>
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
