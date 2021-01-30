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
let users = [];

let alltasks = [];