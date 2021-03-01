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
 * LocalLoad/LocalSave: Remodeled to Server Upload. Each function specifies targets for setArray() and getArray() and runs them. Those functions are included in other javascripts.
 */

function LocalLoadUsers() {
    //users = getArray('users');
    initserver();
}

function LocalSaveUsers() {
    //setArray('users', users);
    backend.setItem('users', JSON.stringify(users));
}

function LocalLoadTasks() {
    //alltasks = getArray('alltasks');
    initserver();
}

function LocalSaveTasks() {
    //setArray('alltasks', alltasks);
    backend.setItem('alltasks', JSON.stringify(alltasks));
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