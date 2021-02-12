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
 * @param {} activeuser: //recieve the activeuser id 
 */
function saveActiveUser(activeuser) {
    localStorage.setItem("activeuser", activeuser);
} 


/**
 * deletes activeuser id from localstorage after logout
 */
  function deleteActiveUser() {
    localStorage.removeItem("activeuser");
}  