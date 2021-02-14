/**
 * This function converts the full path of the uploaded file and save it to the backend
 */
function uploadImage() {
    fetchAPI();
    let fullPath = document.getElementById('fileToUpload').value;
    if (fullPath) {
        let startIndex = (fullPath.indexOf('\\') >= 0 ? fullPath.lastIndexOf('\\') : fullPath.lastIndexOf('/'));
        let filename = fullPath.substring(startIndex);
        if (filename.indexOf('\\') === 0 || filename.indexOf('/') === 0) {
            filename = filename.substring(1);
        }
        /* users[1]['userimage'] = filename; */
        users[+localStorage.getItem('activeuser')]['userimage'] = filename;
        backend.setItem('users', JSON.stringify(users));
        alert(filename + ' was uploaded successfully.');
    }
    checkUsersImage(); 
}

/**
 * This function checks if the user uploaded a profile picture, else this user gets the default picture
 */
function checkUsersImage() {
    let imagecheck = document.getElementById("fileToUpload");
    if (imagecheck.value.length < 1) {
        return '/user_default-forLinuxServer.JPG';
    }
    return imagecheck.filename; // Filename von der Datei zurückgeben
}

/**
 * The file is displayed, so the user can see which picture is uploaded
 */
const toBase64 = file => new Promise((resolve, reject) => {
    const reader = new FileReader();
    reader.readAsDataURL(file);
    reader.onload = () => resolve(reader.result);
    reader.onerror = error => reject(error);
});

async function showMyImage() {
    const file = document.getElementById('fileToUpload').files[0];
    document.getElementById('myimage').src = await toBase64(file);
}

/**
 * This function sends a request on the php file for the upload
 * https://stackoverflow.com/questions/36067767/how-do-i-upload-a-file-with-the-js-fetch-api
 */
function fetchAPI() {
    const input = document.getElementById('fileToUpload');

    // This will upload the file after having read it
const upload = (file) => {
    fetch('http://yvonne-gamboeck.developerakademie.com/Join/upload.php', { // Your POST endpoint
      method: 'POST',
      headers: {
        // Content-Type may need to be completely **omitted**
        // or you may need something
        "Content-Type": "You will perhaps need to define a content-type here"
      },
      body: file // This is your file object
    }).then(
      response => response.json() // if the response is a JSON object
    ).then(
      success => console.log(success) // Handle the success response object
    ).catch(
      error => console.log(error) // Handle the error response object
    );
  };
}

/**
 * function ContinueToMain: waits and sends user to mainpage
 */


/* function ContinueToMain() {
    setTimeout(function () { window.open('board.html', '_self'); }, 500);
} */


