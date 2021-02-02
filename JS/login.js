let loginsuccess = false;

/**
 * login(): General login function. 
 */
function login() {

    searchuser();

    if (loginsuccess = true) {
        window.open('board.html', '_self');
    }

}

/**
 * searchuser(): checks if input user exists
 */
function searchuser() {
    let usernametry = document.getElementById('nameinput').value;
    let condition = users.findIndex(std => std.username === usernametry); //https://medium.com/tinytute/how-to-get-index-from-a-json-object-with-value-javascript-a556f93c0194

    if (condition != -1) {
        checkpassword(usernametry);
    }
    else {
        alert('User doesn´t exist.');
    }
}

/**
 * checkpassword: checks, if password matches selected user
 * @param {} j : selected user that exists.
 */
function checkpassword(j) {
    console.log('PW enabled'); //checks if function is activated. Please remove later!
    let nameexists = j;
    let passwordtry = document.getElementById('passwordinput').value;
    
    if(passwordtry= users[/*hier fehlt die Referenz zum richtigen User*/].userpassword){
    loginsuccess = true;}
    else {
        alert('Incorrect password.')
    }
}