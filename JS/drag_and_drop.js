// Drag and Drop functions 
let id;

//if start dragging, id of dragelement is declared by global variable id
function dragstart(ev) {
    id = ev.target.id;
}

// allows to drop the dragelement in area
function allowDrop(ev) {
    ev.preventDefault();
}
// place event on dropdown area and get id reference
// drop(event, 'Todo')
function drop(ev, taskstatus) {
    ev.target.append(document.getElementById(id));
    console.log(id);
    checkId(id, taskstatus);

}

function checkId(id, taskstatus) {
    let number = +id.split('-')[1];
    console.log(number);

    let targetobject = document.getElementById('dropcontainer-todo');

    //if(targetobject.contains(id)) {
    alltasks[number].taskstatus = taskstatus;


    //}

    //3 restliche Varianten
    updateBoard();
} 

