let images = [];

/* function formPhp() {
    let images = document.getElementById("fileToUpload").files[0];
    console.log(files[0]);
    let formData = new FormData();
    formData.append("fileToUpload", fileToUpload);
}
 */

 /**
  * This function converts the uploaded file to a string using Base64 and the file is displayed, 
  * so the user can see if the upload was successfully
  */
async function uploadImage() {
    const toBase64 = file => new Promise((resolve, reject) => {
        const reader = new FileReader();
        reader.readAsDataURL(file);
        reader.onload = () => resolve(reader.result);
        reader.onerror = error => reject(error);
    });
    
    const file = document.getElementById('fileToUpload').files[0];
    console.log(await toBase64(file));
    document.getElementById('myimage').src = await toBase64(file);

    pushImagetoArray(); 
}

function pushImagetoArray() {
file.push(images);
alert('Datei wurde erfolgreich hochgeladen'); 
}


/**
 * function ContinueToMain: waits and sends user to mainpage
 */
 function ContinueToMain() {
    setTimeout(function(){ window.open('board.html', '_self'); }, 500);
 }