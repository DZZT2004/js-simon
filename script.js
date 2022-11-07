// genera i div
const div1 = document.createElement("div");
const div2 = document.createElement("div");
const div3 = document.createElement("div");
const div4 = document.createElement("div");
const div5 = document.createElement("div");
// gemera i numeri casuali
var n1 = Math.floor(Math.random() * 100) + 1;
var n2 = Math.floor(Math.random() * 100) + 1;
var n3 = Math.floor(Math.random() * 100) + 1;
var n4 = Math.floor(Math.random() * 100) + 1;
var n5 = Math.floor(Math.random() * 100) + 1;

// mette i div nell'html
var container = document.getElementById("contenitore");
insert(div1, n1);
insert(div2, n2);
insert(div3, n3);
insert(div4, n4);
insert(div5, n5);


// function che mette i div nell'html
function insert(div, n){
    div.innerHTML = n;
    container.appendChild(div);
}