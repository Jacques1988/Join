let loginsuccess = false;

/**
 * login(): General login function. 
 */

function login() {
    loginsuccess = false;
    searchuser();
       
}

/*
*checks if loginsuccess condition is true and proceeds to main page. 
*/
function checksuccess() {
if (loginsuccess = true) {
    window.open('board.html', '_self');
        loginsuccess = false;
    }
    else{
        loginsuccess = false;
       }
}

/**
 * searchuser(): checks if input user exists
 */
function searchuser() {
    let usernametry = document.getElementById('nameinput').value;
    let condition = users.findIndex(std => std.username === usernametry); //https://medium.com/tinytute/how-to-get-index-from-a-json-object-with-value-javascript-a556f93c0194

    if (condition != -1) {
        checkpassword(usernametry, condition);
    }
    else {
        alert('User doesn´t exist.');
        loginsuccess = false;
    }
}

/**
 * checkpassword: checks, if password matches selected user
 * @param {} a : selected user that exists.
 *  @param {} a : selected user's id'
 */

function checkpassword(a, b) {
    let nameexists = a;
    let idpassword = b;
    let passwordtry = document.getElementById('passwordinput').value;

    if (passwordtry === users[idpassword].userpassword) {
        console.log('correct PW') //TEST. PLZ REMOVE LATER
        loginsuccess = true;
        checksuccess();
    }
    else {
        alert('Incorrect password.');
        loginsuccess = false;
    }
}