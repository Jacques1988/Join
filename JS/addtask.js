/**
 * updateusers: displays those users who are assigned to task.
 */
function updateusers() {



}


/**
 * assignuser: shows available users to assign task to
 */
function assignuser() {

    document.getElementById('addtaskuserlist').classList.remove('d-none');
    document.getElementById('addtaskuserlist').innerHTML = '';

    for (let i = 0; i < users.length; i++) {
        let user = users[i];
        document.getElementById('addtaskuserlist').innerHTML += `<div class="" id="assignuserlist${user['userid']}" onclick="selectuserassign(${user['userid']})">
        <img src="./img/${user['userimage']}" ></div>`;

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
        document.getElementById('addtaskuserlist').classList.add('d-none');
        let selecteduser = users[id].userid;
        currenttaskusers.push(selecteduser); //pushes userid into currenttaskusers array 
        let PushTaskToUser = users[id].usertasks;
        PushTaskToUser.push(newtaskid); //pushes taskid into user array

        updateusers();
    }
}