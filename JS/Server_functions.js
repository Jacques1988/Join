/*Save
*Add a user with this function:
*/
function addUser() {
  let namecheck = newusername.value;
  let mailcheck = newusermail.value;
  let passwordcheck = newuserpassword.value;

  if (namecheck.length > 0 && mailcheck.length > 0 && passwordcheck.length > 0) {
    BuildUser();
    UploadUserToServer();
    updatedropdown();
    newid = newid + 1;
  }
  else {
    alert('Please add all necessary information.')
  }
}

function BuildUser() {

  let newimage = 'user_default.jpg';

  //addUserImage();

  users.push({
    "userid": newid,
    "username": document.getElementById('newusername').value,
    "usermail": document.getElementById('newusermail').value,
    "userpassword": document.getElementById('newuserpassword').value,
    "userimage": newimage,
    "usercategory": 'default',
    "usertasks": []
  });
}

function UploadUserToServer() {
  backend.setItem('users', JSON.stringify(users));
}

function addUserImage() {
  //check einbauen, ob bild vorhanden. Wenn nicht, default bild?
  //let newimage = ; //TO DO: eingefügtes Bild referenzieren + Bild umwandeln in Text 

}


/*
*addTask: Add new task and store it in array alltasks
*/
function addTask() {
  let namecheck = newtaskname.value;
  let datecheck = newtaskdate.value;
  let passwordcheck = newuserpassword.value;
  let descriptioncheck = newtaskdescription.value;

  if (namecheck.length > 0 && datecheck.length > 0 && passwordcheck.length > 0 && descriptioncheck.length > 0) {
    BuildTask();
    UploadTaskToServer();
    newtaskid = newtaskid + 1;
  }
  else {
    alert('Please add all necessary information.')
  }
}

function BuildTask() {

  //array currenttaskusers MUST be filled before push!

  alltasks.push({
    "taskid": newtaskid,
    "taskname": document.getElementById('newtaskname').value,
    "taskdate": document.getElementById('newtaskdate').value,
    "taskcategory": document.getElementById('newtaskcategory').value,
    "taskurgency": document.getElementById('newtaskurgency').value,
    "taskdescription": document.getElementById('newtaskdescription').value,
    "taskusers": currenttaskusers
  });
}

function UploadTaskToServer() {
  backend.setItem('alltasks', JSON.stringify(alltasks));
}

/*Load
*Fill your empty array with users and tasks from the Server, preferably set to body onload
*/
async function initserver() {
  await downloadFromServer();
  users = JSON.parse(backend.getItem('users')) || [];
  alltasks = JSON.parse(backend.getItem('alltasks')) || [];
  updatedropdown();
  updatenewid();
  updatetaskid()
}

function updatenewid() {
  if (users.length > 0) {
    newid = users.length;
  }
  else {
    newid = 0;
  }
}

function updatetaskid() {
  if (alltasks.length > 0) {
    newtaskid = alltasks.length;
  }
  else {
    newtaskid = 0;
  }
}

/*Delete
*Delete all users from your array:
*/
function deleteUser(name) {
  backend.deleteItem('users');

  updatedropdown();
}

/*
*populate Dropdownmenu: adds values of username to dropdown options https://www.codebyamir.com/blog/populate-a-select-dropdown-list-with-json
*/
function updatedropdown() {
  let dropdown = document.getElementById('locality-dropdown');
  dropdown.length = 0;

  let defaultOption = document.createElement('option');
  defaultOption.text = 'Choose Name';

  dropdown.add(defaultOption);
  dropdown.selectedIndex = 0;

  const url = './DATA/my_json.json';

  const request = new XMLHttpRequest();
  request.open('GET', url, true);

  request.onload = function () {
    if (request.status === 200) {
      const data = JSON.parse(request.responseText);
      let option;
      for (let i = 0; i < data.length; i++) {
        option = document.createElement('option');
        option.text = data[i].username;
        option.value = data[i].userid;
        dropdown.add(option);
      }
    } else {
      // Reached the server, but it returned an error
    }
  }

  request.onerror = function () {
    console.error('An error occurred fetching the JSON from ' + url);
  };

  request.send();
}

