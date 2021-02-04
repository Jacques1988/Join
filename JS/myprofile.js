/**
 * This function adds information about the current User to the myprofile.html
 */
function addMyProfileBox() {
    for (let i = 0; i < users.length; i++) {
        let currentuser = users[i];
        document.getElementById('myprofile-information').innerHTML = '';
        document.getElementById('myprofile-information').innerHTML = `
    <table>
    <tr><td style="width: 150px;"> <b>Department:</b></td>
        <td>${currentuser['userdepartment']}</td>
    </tr>
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
}

/**
 * This function adds name and profile pic from the current user to the myprofile.html
 */
function addCurrentUserProfile() {
    for (let i = 0; i < users.length; i++) {
        let currentuser = users[i];
        document.getElementById('profile-main-infos').innerHTML = `
<div class="portrait-big">
<img
    src="img/pretty-smiling-joyfully-female-with-fair-hair-dressed-casually-looking-with-satisfaction.jpg">
</div>
<div class="blue">${currentuser['username']}</div> `
    }
}