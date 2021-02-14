

/*
*sets URL for Server connection (the php backend will refer to this url)
*/
setURL('/Modul10_JoinGruppenarbeit/Join/DATA/');

/*
*temporary id and array storage (only needed for local functions, no permanent storage necessary)
*/
let latesttuserid;
let latesttaskid;
let newid;  //might be redundant if functions are updated, caused by latesttuserid
let newtaskid; //might be redundant if functions are updated, caused by latesttaskid
let currenttaskusers = [];

/*
*users: array stored on server and here
*structure elements: userid, username, usermail, userphone, userdepartment, userposition, useroffice, userpassword, userimage, usercategory, usertasks
*/
//let users = [];

//Example users (testing): ///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////TESTING ONLY
let password = "password0"
let passwordHash = CryptoJS.SHA256(password);
let passwordHashString = passwordHash.toString(CryptoJS.enc.Base64);

let users = [
  {
    "userid": 0,
    "username": 'Name0',
    "usermail": 'Mailadresse0',
    "userphone": 'phonenumber0',
    "userdepartment": 'department0',
    "userposition": 'position0',
    "useroffice": 'office0',
    "userpassword": passwordHashString,
    // "userdescription": 'Heidiho 0',
    "userimage": 'user_default-forLinuxServer.JPG',
    "usercategory": 'default',
    "usertasks": [0, 1]
  },
  {
    "userid": 1,
    "username": 'Name1',
    "usermail": 'Mailadresse1',
    "userphone": 'phonenumber1',
    "userdepartment": 'department1',
    "userposition": 'position1',
    "useroffice": 'office1',
    "userpassword": 'password1',
    //  "userdescription": 'Heidiho 1',
    "userimage": 'user_default-forLinuxServer.JPG',
    "usercategory": 'default',
    "usertasks": [1],
  },
  {
    "userid": 2,
    "username": 'Yvonne',
    "usermail": 'yvonnegamboeck@web.de',
    "userphone": '0173/9000000',
    "userdepartment": 'Marketing',
    "userposition": 'Media Designer',
    "useroffice": '108',
    "userpassword": 'yvonne123',
    //  "userdescription": 'Heidiho 1',
    "userimage": 'Yvonne.JPG',
    "usercategory": 'default',
    "usertasks": [0],
  }];

/*
*alltasks: array stored on server and here
*structure elements: taskid, taskname, taskdate, taskcategory, taskstatus, taskurgency, taskdescription, taskusers
*/
//let alltasks = [];

//example alltasks (testing)) ///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////TESTING ONLY
let alltasks = [
  {
    "taskid": 0,
    "taskname": 'yvonnes task',
    "taskdate": 'undefined',
    "taskcategory": 'Sales',
    "taskstatus": 'todo',
    "taskurgency": 'low',
    "taskdescription": 'Taskdescription',
    "taskusers": [0],
    "taskauthorid": 0
  },
  {
    "taskid": 1,
    "taskname": 'task2',
    "taskdate": 'undefined',
    "taskcategory": 'Marketing',
    "taskstatus": 'testing',
    "taskurgency": 'middle',
    "taskdescription": 'testing,middle,marketing',
    "taskusers": [0, 1],
    "taskauthorid": 1
  }

];