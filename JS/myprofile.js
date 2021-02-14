let myprofileid = localStorage.getItem('activeuser');

/**
 * this function initiates building the html and runs the other building functions
 */
function BuildMyProfile() {
    addMyProfileBox();
    addCurrentUserProfile();
    TasksCreatedByUser();
    TasksAssignedToUser();
}
/**
 * This function adds information about the current User to the myprofile.html
 */
function addMyProfileBox() {
    let currentuser = users[myprofileid];
    document.getElementById('myprofile-information').innerHTML = '';
    document.getElementById('myprofile-information').innerHTML = `
    <table>
    <tr><td style="width: 150px;"> <b>Department:</b></td>
    <td>${currentuser['userdepartment']}</td>
    <tr><td> <b>Position:</b></td>
        <td>${currentuser['userposition']}</td>
    </tr>
    <tr><td><b>Office:</b></td>
        <td>${currentuser['useroffice']}</td>
    </tr>
    <tr><td><b>Phone:</b></td>
        <td>${currentuser['userphone']}</td>
    </tr>
    <tr><td><b>Mail:</b></td>
        <td>${currentuser['usermail']}</td>
    </tr>
</table>
`
}

/**
 * This function adds name and profile pic from the current user to the myprofile.html
 */
function addCurrentUserProfile() {
    let currentuser = users[myprofileid];
    document.getElementById('profile-main-infos').innerHTML = `
<div class="portrait-big">
<img
    src="./img/${currentuser['userimage']}">
</div>
<div style="font-size: 16px" class="blue">${currentuser['username']}</div> `
}


function checkActiveUser() {
    activeuser = document.getElementById(nameinput);
}

/**
 * this function displays all active tasks the user has created
 */
function TasksCreatedByUser() {
    document.getElementById('myprofile-createdtasks').innerHTML = '<div class="blue profile-uppercase">You created the following tasks:</div>';
    let TasksExist = false;
    for (i = 0; i < alltasks.length; i++) {
        let id = parseInt(myprofileid);
        if (alltasks[i].taskauthorid == id) {
            TasksExist = true;
            let task = alltasks[i];
            document.getElementById('myprofile-createdtasks').innerHTML += `<div class="d-flex center-profile"; > <div class="bulletpoints"></div> ${task['taskname']}</div>`;
        }
    }
    if (TasksExist == false) {
        document.getElementById('myprofile-createdtasks').innerHTML = 'You haven`t created any tasks yet.';
    }
}

/**
 * this function displays the tasks the user is assigned to at the moment
 */
function TasksAssignedToUser() {
    document.getElementById('myprofile-assignedtasks').innerHTML = '<div class="blue profile-uppercase">You are currently assigned to the following tasks:</div>';
    let TasksExist = false;
    for (i = 0; i < alltasks.length; i++) {
        let currenttaskusers = alltasks[i].taskusers;
        let id = parseInt(myprofileid); //converts string into Integer
        if (currenttaskusers.indexOf(id) > -1) {
            TasksExist = true;
            let task = alltasks[i];
            document.getElementById('myprofile-assignedtasks').innerHTML += `<div class="d-flex center-profile"> <div class="bulletpoints"></div> ${task['taskname']}</div>`;
        }
    }
    if (TasksExist == false) {
        document.getElementById('myprofile-assignedtasks').innerHTML = 'You are currently not assigned to any tasks. NOT WORKING YET.';
    }
}