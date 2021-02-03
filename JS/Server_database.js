/*
*sets URL for Server connection
*/
setURL('/Modul10_JoinGruppenarbeit/Join/DATA/');

/*
*temporary id and array storage 
*/
let newid = 0;
let newtaskid = 0;
let currenttaskusers = []
let activeuser;

/*
*users: array stored on server and here
*structure elements: userid, username, usermail, userpassword, userimage, usercategory, usertasks
*/
//let users = [];

//Example users (testing):
let users = [
    {
        "userid": 0,
        "username": 'Name0',
        "usermail": 'Mailadresse0',
        "userpassword": 'password0',
        "userdescription": 'Heidiho 0',
        "userimage": 'user_default.jpg',
        "usercategory": 'default',
        "usertasks": [0]
    },
    {
        "userid": 1,
        "username": 'Name1',
        "usermail": 'Mailadresse1',
        "userpassword": 'password1',
        "userdescription": 'Heidiho 1',
        "userimage": 'user_default.jpg',
        "usercategory": 'default',
        "usertasks": []
    }];

//let alltasks = [];

//alltasks Beispiel
let alltasks = [
    {
        "taskid": 0,
        "taskname": 'yvonnes task',
        "taskdate": 'undefined',
        "taskcategory": 'Sales',
        "taskstatus" : 'todo',
        "taskurgency": 'low',
        "taskdescription": 'Taskdescription',
        "taskusers": [0]
      }

];