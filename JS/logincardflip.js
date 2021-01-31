
//cardflipanimation Sign In link

function openAddUser() {

    document.getElementById('signuplink').addEventListener('click', cardflip);

    function cardflip() {
        document.getElementById('cardflipper').classList.add('cardflip');
        setTimeout(function() {window.open('adduser.html', '_self')}, 350);
    }
}


