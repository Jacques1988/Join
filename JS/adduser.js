/**
 * This function converts the full path of the uploaded file and save it to the backend
 */
function uploadImage() {
    let fullPath = document.getElementById('fileToUpload').value;
    if (fullPath) {
        let startIndex = (fullPath.indexOf('\\') >= 0 ? fullPath.lastIndexOf('\\') : fullPath.lastIndexOf('/'));
        let filename = fullPath.substring(startIndex);
        if (filename.indexOf('\\') === 0 || filename.indexOf('/') === 0) {
            filename = filename.substring(1);
        }
        localStorage.setItem('users', JSON.stringify(users));
        backend.setItem('users', JSON.stringify(users));
        users[0]['userimage'] = filename;
        alert(filename + ' was uploaded successfully.');
    }
    showMyImage()
}

/**
 * The file is displayed, so the user can see if the upload was successfull
 */
const toBase64 = file => new Promise((resolve, reject) => {
    const reader = new FileReader();
    reader.readAsDataURL(file);
    reader.onload = () => resolve(reader.result);
    reader.onerror = error => reject(error);
});

async function showMyImage() {
    const file = document.getElementById('fileToUpload').files[0];
    /*     console.log(await toBase64(file)); */
    document.getElementById('myimage').src = await toBase64(file);
}


/**
 * function ContinueToMain: waits and sends user to mainpage
 */


/* function ContinueToMain() {
    setTimeout(function () { window.open('board.html', '_self'); }, 500);
} */
