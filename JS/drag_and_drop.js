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
}
