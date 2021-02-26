

/*
*sets URL for Server connection (the php backend will refer to this url)
*/
setURL('/Join/DATA/');  //Johannes Server
//setURL('/Join/DATA/');  // Yvonne Server
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
/*let password = "password0"
let passwordHash = CryptoJS.SHA256(password);
let passwordHashString = passwordHash.toString(CryptoJS.enc.Base64);*/

let users;
let alltasks;
/*let users = [
  {
    "userid": 0,
    "username": 'Johannes',
    "usermail": 'nijo',
    "userphone": 'phonenumberJo',
    "userdepartment": 'Chefetage',
    "userposition": 'Backend-Developer',
    "useroffice": '42',
    "userpassword": 'aTYXAi/7rcltDFysLGEmRouhxyJjcADOs6+VZXrrqyo=',
    "userimage": 'user_default-forLinuxServer.JPG',
    "usercategory": 'default',
    "usertasks": [] //[0, 1]
  },
  {
    "userid": 1,
    "username": 'Jacques Van Luyck',
    "usermail": 'Mailadresse1',
    "userphone": 'phonenumber1',
    "userdepartment": 'Chefetage',
    "userposition": 'Frontend-Developer',
    "useroffice": 'office1',
    "userpassword": 'aIuTofPDZyZedv0/jm/IyHKauFYV911DI++//ScVFCI=',
    "userimage": 'Jacques.JPG',
    "usercategory": 'default',
    "usertasks": [] //[1]
  },
  {
    "userid": 2,
    "username": 'Yvonne',
    "usermail": 'yvonnegamboeck@web.de',
    "userphone": '0173/9000000',
    "userdepartment": 'Chefetage',
    "userposition": 'Media Designer',
    "useroffice": '108',
    "userpassword": 'rEVQPkysK9XnNmb43VyBJWIjsfCz8SbDCr7yBS+bRdU=',
    "userimage": 'Yvonne.JPG',
    "usercategory": 'default',
    "usertasks": []//[0]
  }];*/

/*
*alltasks: array stored on server and here
*structure elements: taskid, taskname, taskdate, taskcategory, taskstatus, taskurgency, taskdescription, taskusers
*/
/*let alltasks = [{
  "taskid": 0,
  "taskname": 'Test',
  "taskdate": 'undefined',
  "taskcategory": 'Sales',
  "taskstatus": 'TaskDeleted',
  "taskurgency": 'low',
  "taskdescription": 'TEST TASK',
  "taskusers": [],
  "taskauthorid": 0
}

];*/

//example alltasks (testing)) ///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////TESTING ONLY
/*let alltasks = [
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

];*/