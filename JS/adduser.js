let user = localStorage.getItem('activeuser');

/**
 * This function converts the full path of the uploaded file and save it to the backend
 */
async function uploadImage() {
  console.log('foto');
  let photo = document.getElementById("fileToUpload").files[0];
  let formData = new FormData();
  formData.append("fileToUpload", photo);
  await fetch('http://yvonne-gamboeck.developerakademie.com/Join/upload.php', { method: "POST", body: formData });
  users[user]['userimage'] = document.getElementById("fileToUpload").files[0].name;
  /* users[user]['userimage'] = filename; */
  backend.setItem('users', JSON.stringify(users));
  /* alert(filename + ' was uploaded successfully.'); */
}


/**
 * This function checks if the user uploaded a profile picture, else this user gets the default picture
 */
async function checkUsersImage() {
  let imagecheck = document.getElementById("fileToUpload");
  console.log(imagecheck);
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

