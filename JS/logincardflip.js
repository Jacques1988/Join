
//cardflipanimation Sign In link

function openAddUser() {

    document.getElementById('signuplink').addEventListener('click', cardflip);

    function cardflip() {
        document.getElementById('cardflipper').classList.add('cardflip');
        setTimeout(function () { window.open('adduser.html', '_self') }, 350);
    }
}

function pressKeyLogin() {
    document.getElementById('passwordinput').addEventListener('keydown', pressToLogin);
    
    function pressToLogin(key) {
        if (key.keyCode == '13') {
            login();
        }
    }
}
