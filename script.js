const backgroundSquare = document.querySelector('.background-square');
const container = document.querySelector('#container');
const body = document.querySelector('body');
const size = document.querySelector('#size');


let box = [], square = [];

for(let i = 0; i < 20; i++) {           //  loop draws background squares
    square[i] = document.createElement('div');
    square[i].setAttribute('class', 'background-square');
    let rozmiar = Math.floor(Math.random() * 100) + 10;
    let posX = Math.floor(Math.random() * window.innerHeight);
    let posY = Math.floor(Math.random() * window.innerWidth);
    square[i].style.width = rozmiar + "px";
    square[i].style.height = rozmiar + "px";
    square[i].style.marginLeft = posY + "px";
    square[i].style.marginTop = posX + "px";
    body.appendChild(square[i]);
}

function calcBoxShadow(value) { // ( container width / number of squares per edge )
    let size = (container.offsetWidth / value) * 0.94 * 0.1; //  - margin 6% * 10% - size of boxShadow
    return size;
}

function createSquares() {
    let num = +size.value;
    if(num > 30) {
        num = 30;
        size.value = 30;
    }
    if(!num || num == 0) {
        num = 0;
    }
    let boxShadowSize = calcBoxShadow(num);
    while(container.lastChild) {
        container.lastChild.remove();
    }
    for(let i = 0; i < num * num; i++) {
        box[i] = document.createElement('div');
        box[i].setAttribute('class', 'box');
        box[i].style.boxShadow = "inset rgb(40, 94, 175)" 
                                + boxShadowSize + "px "
                                + boxShadowSize + "px "
                                + boxShadowSize + "px, inset rgb(154, 194, 255) "
                                + -boxShadowSize + "px "
                                + -boxShadowSize + "px "
                                + boxShadowSize + "px"; 
        container.appendChild(box[i]);
    }
    container.style.gridTemplateColumns = "repeat(" + num + ", 1fr)";
    container.style.gridTemplateRows = "repeat(" + num + ", 1fr)";
    
}

size.value = 2; // default number of playing squares
createSquares();
size.onkeyup = createSquares;

