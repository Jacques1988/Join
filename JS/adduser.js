
/**
 * This function converts the full path of the uploaded file
 */
function uploadImage() {
    console.log('filename');
    let fullPath = document.getElementById('fileToUpload').value;
    if (fullPath) {
        let startIndex = (fullPath.indexOf('\\') >= 0 ? fullPath.lastIndexOf('\\') : fullPath.lastIndexOf('/'));
        let filename = fullPath.substring(startIndex);
        if (filename.indexOf('\\') === 0 || filename.indexOf('/') === 0) {
            filename = filename.substring(1);
        }
        users[0]['userimage'] = filename;
        //  Save user to backend
    }
    showCurrentImage();
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
    async  function showCurrentImage() {
        const file = document.getElementById('fileToUpload').files[0];
        document.getElementById('myimage').src = await toBase64(file);
    }


/**
 * function ContinueToMain: waits and sends user to mainpage
 */
function ContinueToMain() {
    setTimeout(function () { window.open('board.html', '_self'); }, 500);
}


