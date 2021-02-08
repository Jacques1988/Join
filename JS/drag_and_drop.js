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
function drop(ev) {
    ev.target.append(document.getElementById(id));
    console.log(id);
    checkId(id);

}


function checkId (id){
let number = id.charAt(12); //geht nur bis 9; erweitern?
console.log(number);

let targetobject = document.getElementById('dropcontainer-todo');

if(targetobject.contains(id)) {
        alltasks[number].taskstatus = "Todo";

        
}

//3 restliche Varianten
updateBoard();
} 