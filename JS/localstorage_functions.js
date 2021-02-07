/**
 * IMPORTANT: THOSE FUNCTIONS ARE BUILT ONLY FOR LOCAL TESTING. DO NOT USE THEM IN FINISHED VERSION!
 * REMOVE ANY TRACES OF THEM IN ALL HTML AND JS !
 *  */


/**
 * Save to and load arrays from local storage
 * @param {} key name of array
 * @param {*} array name of array (same as key)
 */

function setArray(key, array) {
    localStorage.setItem(key, JSON.stringify(array));
}

function getArray(key) {
    return JSON.parse(localStorage.getItem(key));
}

/**
 * LocalLoad/LocalSave: Each function specifies targets for setArray() and getArray() and runs them. Those functions are included in other javascripts.
 */

function LocalLoadUsers() {
    users = getArray('users');
}

function LocalSaveUsers() {
    setArray('users', users);
}

function LocalLoadTasks() {
    alltasks = getArray('alltasks');
}

function LocalSaveTasks() {
    setArray('alltasks', alltasks);
}


/**
 * InitLocal: creates localstorage items (only used at Login)
 */
function InitLocal() {
    LocalSaveUsers();
    LocalSaveTasks();
}

/**
 * LoadLocal: updates localstorage items
 */
 function LoadLocal() {
    LocalLoadUsers();
    LocalLoadTasks();
 }

 /**
  * SetLocal: overwrites old arrays with current arrays in local storage
  */
 function SetLocal() {
    LocalSaveUsers();
    LocalSaveTasks();
 }