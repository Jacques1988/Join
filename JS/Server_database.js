/*
*sets URL for Server connection
*/
setURL('/Modul10_Server/DATA/');

/*
*temporary id and array storage 
*/
let newid = 0;
let newtaskid = 0;
let currenttaskusers = []

/*
*users: array stored on server and here
*structure elements: userid, username, usermail, userpassword, userimage, usercategory, usertasks
*/
let users = [];

let alltasks = [];