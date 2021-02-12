let activeuser;

/**
 * @param {} account: useraccount of user who logged in
 */

function getActiveUserId(account){
   
    activeuser = account;
    console.log(activeuser);
    saveActiveUser(activeuser);
}

/**
 * 
 * @param {} activeuserid: //recieve the activeuser id 
 */
function saveActiveUser(activeuserid) {
    localStorage.setItem("user", activeuserid);
} 

/* function deleteActiveUser(users, userid) {
    localStorage.getItem()
} */