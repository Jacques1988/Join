let images = [];

/**
 * This function converts the uploaded file to a string using Base64 and the file is displayed, 
 * so the user can see if the upload was successfully
 */
 async function uploadImage() {
/*     const toBase64 = file => new Promise((resolve, reject) => {
        const reader = new FileReader();
        reader.readAsDataURL(file);
        reader.onload = () => resolve(reader.result);
        reader.onerror = error => reject(error);
    });  */

    const file = document.getElementById('fileToUpload').files[0];
    document.getElementById('myimage').src = file;
} 

/**
 * function ContinueToMain: waits and sends user to mainpage
 */
function ContinueToMain() {
    setTimeout(function () { window.open('board.html', '_self'); }, 500);
}