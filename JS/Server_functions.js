/**
 * function checks if username already exists in database and runs addUser() if not true
 * @param {} name : name from input field
 */
function checkUseralreadyexists() {
  let name = newusername.value;
  let check = false;
  for (i = 0; i < users.length; i++) {
    if (users[i].username == name) {
      alert('User already exists.');
      return;
    }
    else { check = true; }
  }
  if (check = true) {
    addUser();
  }
}

/*Save
*Add a user with this function (initiated by checkUseralreadyexists()):
*/

function addUser() {
  let namecheck = newusername.value;
  let mailcheck = newusermail.value;
  let passwordcheck = newuserpassword.value;
  let passwordrepeatcheck = passwordrepeat.value;
  let emailstringatcheck = document.getElementById('newusermail').value;

  if (namecheck.length > 0 && mailcheck.length > 0 && passwordcheck.length > 0 && passwordrepeatcheck == passwordcheck && emailstringatcheck.includes('@')) {
    BuildUser();
    SetLocal(); //////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////TESTING ONLY. DELETE LATER.
    UploadUserToServer();
    //updatedropdown(); //not necessary yet
    //newid = newid + 1;

    setTimeout(function () { window.open('board.html', '_self'); }, 500);
  }
  else {
    alert('Please add all necessary information, enter an valid Email or match passwords.')
  }
}

function BuildUser() {

  checklatestuserid();
  uploadImage(); 
  let newimage = checkUsersImage();
  let password = document.getElementById('newuserpassword').value;

  let passwordHash = CryptoJS.SHA256(password);
  let passwordHashString = passwordHash.toString(CryptoJS.enc.Base64);

  //console.log("Password: ", password, "Password HASH: ", passwordHash,"Password HASH String:", passwordHashString );

  users.push({
    "userid": latesttuserid + 1,
    "username": document.getElementById('newusername').value,
    "usermail": document.getElementById('newusermail').value,
    "userphone": document.getElementById('phonenumber').value,
    "userdepartment": document.getElementById('department').value,
    "userposition": document.getElementById('position').value,
    "useroffice": document.getElementById('office').value,
    "userpassword": passwordHashString,
    // "userdescription": document.getElementById('newuserdescription').value,
    "userimage": newimage, 
    "usercategory": 'default',
    "usertasks": []
  });
  setActiveUser();
}

function UploadUserToServer() {
  backend.setItem('users', JSON.stringify(users));
}


/*
*addTask: Add new task and store it in array alltasks
*/
function addTask() {
  let namecheck = newtaskname.value;
  //let datecheck = getTime(newtaskdate);
  let descriptioncheck = newtaskdescription.value;

  //if (datecheck == 'NaN') {   /*checks if information is in valid date format*/
  //  alert('Please add all necessary information.')
  //}
  //else {
  if (namecheck.length > 0 && descriptioncheck.length > 0) { /*checks if fields are not empty */
    checklatesttaskid();
    BuildTask();
    SetLocal(); //////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////TESTING ONLY. DELETE LATER.
    UploadTaskToServer();
    //let last_element = alltasks[alltasks.length - 1];
    //newtaskid = last_element.taskid + 1;
    currenttaskusers = [];
    alert('Task was created successfully')
  }
  else {
    alert('Please add all necessary information.')
  }
  location.reload();
  //}
}

function BuildTask() {

  //array currenttaskusers MUST be filled before finishing this section!
  let activeuser = localStorage.getItem('activeuser');

  alltasks.push({
    "taskid": latesttaskid + 1, //newtaskid,
    "taskname": document.getElementById('newtaskname').value,
    "taskdate": document.getElementById('newtaskdate').value,
    "taskcategory": document.getElementById('newtaskcategory').value,
    "taskstatus": 'todo',
    "taskurgency": document.getElementById('newtaskurgency').value,
    "taskdescription": document.getElementById('newtaskdescription').value,
    "taskusers": currenttaskusers,
    "taskauthorid": activeuser
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
  updatetaskid();
}

/**
 * ID counters
 */
function checklatesttaskid() {

  latesttaskid = alltasks[alltasks.length - 1].taskid;
}

function checklatestuserid() {
  latesttuserid = users[users.length - 1].userid;
}

/**
 * Update ID functions (might be redundant if functions above are updated!)
 */
function updatenewid() {
  if (users.length > 0) {
    newid = latesttuserid + 1;
  }
  else {
    newid = 0;
  }
}

function updatetaskid() {
  if (alltasks.length > 0) {

    newtaskid = latesttaskid + 1;
  }
  else {
    console.log('ZERO');
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

/**
 * ClearServer: Deletes all saved data from server. 
 */
function deleteAll(name) {
  backend.deleteItem('users');
  backend.deleteItem('alltasks');
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
