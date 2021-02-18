/**
 * updateusers: displays those users who are assigned to task.
 */
function updatetaskusers() {

    document.getElementById('usersassignedtotask').innerHTML = '';

    for (i = 0; i < currenttaskusers.length; i++) {
        let currentuserid = currenttaskusers[i];
        console.log(currentuserid);
        let userimage = users[currentuserid].userimage; //hier base64 oder verbindung zum uploadnamen
        let assignedusername = users[currentuserid].username;
        document.getElementById('usersassignedtotask').innerHTML += `<div class="people-assigned"><img src="./img/${userimage}" alt=""  onclick="deleteuserfromtask(${i})"></img><div>${assignedusername}</div></div>`;
    }
}

/**
 * assignuser: shows available users to assign task to
 */
function assignuser() {

    document.getElementById('addtaskuserlist').classList.remove('d-none');
    document.getElementById('assign-to-plus').classList.add('d-none');
    document.getElementById('addtaskuserlist').classList.add('z-2');
    document.getElementById('addtaskuserlist').innerHTML = 'Available Users:';

    for (let i = 0; i < users.length; i++) {
        let user = users[i];
        document.getElementById('addtaskuserlist').innerHTML += `<div class="people" id="assignuserlist${user['userid']}" onclick="selectuserassign(${user['userid']})">
        <img src="./img/${user['userimage']}" ><div>${user['username']}</div></div>`;
    }

}

/**
 * selectuserassign: pushes users' id into currenttaskusers array
 * @param {} id: provided by the image that starts this function
 */
function selectuserassign(id) {

    if (currenttaskusers.includes(id)) { //checks if user is already assigned
        alert('User is already assigned to task!')
    }
    else {
        document.getElementById('assign-to-plus').classList.remove('d-none');
        document.getElementById('addtaskuserlist').classList.add('d-none');
        let selecteduser = users[id].userid;
        currenttaskusers.push(selecteduser); //pushes userid into currenttaskusers array 
        let PushTaskToUser = users[id].usertasks;
        PushTaskToUser.push(newtaskid); //pushes taskid into user array (HIER STIMMT NOCH ETWAS NICHT, DAS MUSS ERST IN SERVERFUNCTIONS PASSIEREN!)

        updatetaskusers();
    }
}

/**
 * deleteuser: deletes user from currenttasks and initiates view update; Important: This function does not use userid, instead it uses current position in array
 */

function deleteuserfromtask(position) {
    currenttaskusers.splice(position, 1);
    updatetaskusers();

}
