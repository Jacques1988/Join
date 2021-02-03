/**
 * This function add new Taks to the backlog.html"
 */
let color = 'gold';

function addBacklog() {
    for (let i = 0; i < alltasks.length; i++) {
        let currenttask = alltasks[i];
        let currentperson = users[i];

        document.getElementById('backlog-input').innerHTML = '';
        pickcolor(currenttask);

        document.getElementById('backlog-input').innerHTML += `
        <div class="backlog-field d-flex background-color-primary" style="border-left: 12px solid ${color};">
                    <div class="profil-container d-flex profil-container-mobile-width" style="width: 40%">
                        <div class=" d-flex profile-container-mobile" style="align-items: center">
                            <div class="profile-img"></div>
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

function pickcolor(currenttask) {
    if (currenttask.taskcategory == 'Sales') {
        color = 'yellowgreen';
    }
    else if (currenttask.taskcategory == 'Marketing') {
        color = 'salmon';
    }
}