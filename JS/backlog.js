/**
 * color defines the color of the outer border of each task div. It changes depending on task category.
 */
let color = 'gold';

/**
 * addBacklog: Creates arranged HTML code based on alltasks array.
 */
function addBacklog() {
    document.getElementById('backlog-input').innerHTML = ''; //clear backlog

    for (let i = 0; i < alltasks.length; i++) {
        let currenttask = alltasks[i];
        let currentperson = users[i];
        let currenttaskid = currenttask.taskid; //task id from database
        let currentuserid = currentperson.userid; //user id from database (not used yet)
        
        pickcolor(currenttask);

        document.getElementById('backlog-input').innerHTML += `
        <div class="backlog-field d-flex background-color-primary" style="border-left: 12px solid ${color};">
                    <div id="backlogtaskid${currenttaskid}" class="profil-container d-flex profil-container-mobile-width" style="width: 40%">
                        <div class=" d-flex profile-container-mobile" style="align-items: center">
                            <div class="profile-img"><img src="./img/${currentperson['userimage']}" class="profile-img" alt=""></div>
                            <div class="profile d-flex">
                                <span class="blue" id="mail-adress">${currentperson['username']}</span>
                            </div>
                        </div>
                    </div>
                    <div class="category category-container-mobile-width" style="width: 30%">${currenttask['taskcategory']}</div>
                    <div class="details details-container-mobile-width" style="width: 30%">${currenttask['taskdescription']}</div>
                </div>`
    }
}

/**
 * pickcolor defines the color of the outer border of each task div, depending on task category.
 */
function pickcolor(currenttask) {
    if (currenttask.taskcategory == 'Sales') {
        color = 'yellowgreen';
    }
    else if (currenttask.taskcategory == 'Marketing') {
        color = 'salmon';
    }
}