

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
    LoadLocal();
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
    // let nameexists = a;
    let idpassword = b;
    let password = document.getElementById('passwordinput').value;
    let passwordHash = CryptoJS.SHA256(password);
    let passwordHashString = passwordHash.toString(CryptoJS.enc.Base64);
console.log(passwordHash)
    if (passwordHashString === users[idpassword].userpassword) {
        console.log('correct PW') //TEST. PLZ REMOVE LATER
        document.getElementById('cardflipper').classList.add('cardflip');
        getActiveUserId(b);
        loginsuccess();
        
    }
    else {
        alert('Incorrect password.');

    }
}

