

/**
 * addBacklog: Creates arranged HTML code based on alltasks array.
 */
function addBacklog() {
    document.getElementById('backlog-input').innerHTML = ''; //clear backlog
    let tasksExist = false;
    for (let i = 0; i < alltasks.length; i++) { //iterations to display alltasks
        let currenttask = alltasks[i];
        let creatorid = currenttask.taskauthorid;
        let taskcreator = users[creatorid];
        let currenttaskid = currenttask.taskid; //task id from database

        if (currenttask.taskstatus !== 'TaskDeleted') { //task will not be displayed if it was deleted
            tasksExist = true;
            pickcolor(currenttask);
            document.getElementById('backlog-input').innerHTML += `
        <div class="backlog-field d-flex background-color-primary" style="border-left: 12px solid ${color};">
                    <div id="backlogtaskid${currenttaskid}" class="profil-container d-flex profil-container-mobile-width" style="width: 40%">
                        <div class=" d-flex profile-container-mobile" style="align-items: center">
                            <img class="profile-img" src="./img/${taskcreator['userimage']}" alt="">
                            <div class="profile d-flex">
                                <span class="blue" id="mail-adress">${taskcreator['username']}</span>
                            </div>
                        </div>
                    </div>
                    <div class="category category-container-mobile-width" style="width: 30%">${currenttask['taskcategory']}</div>
                    <div class="details details-container-mobile-width" style="width: 30%">${currenttask['taskname']}</div>
                </div>`
        }
    }
    if (tasksExist == false) {
        document.getElementById('backlog-input').innerHTML = '<div class="empty-backlog">You haven`t created any tasks yet.</div>';
    }
}
