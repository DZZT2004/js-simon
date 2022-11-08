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
var punteggio = 0;

// mette i div nell'html
var container = document.getElementById("contenitore");
insert(div1, n1);
insert(div2, n2);
insert(div3, n3);
insert(div4, n4);
insert(div5, n5);

// timer
setTimeout(remove, 5000);


// function che mette i div nell'html
function insert(div, n){
    div.innerHTML = n;
    container.appendChild(div);
}

// function che toglie i numeri
function remove(){
    container.removeChild(div1);
    container.removeChild(div2);
    container.removeChild(div3);
    container.removeChild(div4);
    container.removeChild(div5);
    setTimeout(()=> {
        let risposta1 = prompt("Inserisci il primo numero ");
        let risposta2 = prompt("Inserisci il secondo numero ");
        let risposta3 = prompt("Inserisci il terzo numero ");
        let risposta4 = prompt("Inserisci il quarto numero ");
        let risposta5 = prompt("Inserisci il quinto numero ");
        controlloRisposta(risposta1, n1);
        controlloRisposta(risposta2, n2);
        controlloRisposta(risposta3, n3);
        controlloRisposta(risposta4, n4);
        controlloRisposta(risposta5, n5);
        alert("Hai indovinato " + punteggio + " numeri");
    }, 100);
}

function controlloRisposta(risposta, pos){
    if(risposta == pos) {
        let sol = document.createElement("div");
        sol.innerHTML = risposta + "<br> Hai indovinato questo numero";
        container.appendChild(sol);
        punteggio++;
        return true;
    }else{
        let sol = document.createElement("div");
        sol.innerHTML = risposta + "<br> Il numero è sbagliato";
        container.appendChild(sol);
        return false;
    }
}