

/*
*checks if loginsuccess condition is true and proceeds to main page. 
*/
function loginsuccess() {

    window.open('board.html', '_self');
}

/**
 * searchuser(): checks if input user exists
 */
function login() {
    let usernametry = document.getElementById('nameinput').value;
    let condition = users.findIndex(std => std.username === usernametry); //https://medium.com/tinytute/how-to-get-index-from-a-json-object-with-value-javascript-a556f93c0194

    if (condition != -1) {
        checkpassword(usernametry, condition);
    }
    else {
        alert('User doesn´t exist.');

    }
}

/**
 * checkpassword: checks, if password matches selected user
 * @param {} a : selected user that exists.
 *  @param {} b : selected user's id'
 */

function checkpassword(a, b) {
    let nameexists = a;
    let idpassword = b;
    let passwordtry = document.getElementById('passwordinput').value;

    if (passwordtry === users[idpassword].userpassword) {
        console.log('correct PW') //TEST. PLZ REMOVE LATER

        loginsuccess();
    }
    else {
        alert('Incorrect password.');

    }
}