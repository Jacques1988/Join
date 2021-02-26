let user = localStorage.getItem('activeuser');

/**
 * This function converts the full path of the uploaded file and save it to the backend
 */
async function uploadImage() {
  console.log('foto');
  let photo = document.getElementById("fileToUpload").files[0];
  let formData = new FormData();
  formData.append("fileToUpload", photo);
  //await fetch('http://yvonne-gamboeck.developerakademie.com/Join/upload.php', { method: "POST", body: formData });   //Yvonne Server
  await fetch('http://@johannes-nissen.developerakademie.com/Modul10_JoinGruppenarbeit/Join/upload.php', { method: "POST", body: formData });   //Johannes Server
  user = localStorage.getItem('activeuser');
  if (photo) {
    users[user]['userimage'] = photo.name;
  }
  backend.setItem('users', JSON.stringify(users));
}


/**
 * This function checks if the user uploaded a profile picture, else this user gets the default picture
 */
function checkUsersImage() {
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
function toBase64 (file) { 
  return new Promise((resolve, reject) => {
  const reader = new FileReader();
  reader.readAsDataURL(file);
  reader.onload = () => resolve(reader.result);
  reader.onerror = error => reject(error);
});
}
async function showMyImage() {
  const file = document.getElementById('fileToUpload').files[0];
  document.getElementById('myimage').src = await toBase64(file);
}

