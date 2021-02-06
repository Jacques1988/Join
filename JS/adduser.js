let images = [];

/* function formPhp() {
    let images = document.getElementById("fileToUpload").files[0];
    console.log(files[0]);
    let formData = new FormData();
    formData.append("fileToUpload", fileToUpload);
}
 */
const toBase64 = file => new Promise((resolve, reject) => {
    const reader = new FileReader();
    reader.readAsDataURL(file);
    reader.onload = () => resolve(reader.result);
    reader.onerror = error => reject(error);
});
async function uploadImage() {
    const file = document.getElementById('fileToUpload').files[0];
    console.log(await toBase64(file));
    document.getElementById('myimage').src = await toBase64(file);
}

function uploadImage() {
images.push('http://yvonne-gamboeck.developerakademie.com/Join/uploads/' + fileToUpload.value.split('\\')[2]);
alert('Datei wurde erfolgreich hochgeladen'); 
}

/* let images = document.getElementById("fileToUpload").files[0];
let formData = new FormData();
formData.append("fileToUpload", images);
fetch('upload.php', { method: "POST", body: formData });

images.push('http://yvonne-gamboeck.developerakademie.com/Instagram/uploads/' + fileToUpload.value.split('\\')[2]);
alert('Datei wurde erfolgreich hochgeladen'); */

/**
 * function ContinueToMain: waits and sends user to mainpage
 */
 function ContinueToMain() {
    setTimeout(function(){ window.open('board.html', '_self'); }, 500);
 }