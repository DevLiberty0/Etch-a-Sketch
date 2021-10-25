const backgroundSquare = document.querySelector('.background-square');
const container = document.querySelector('#container');
const body = document.querySelector('body');
const size = document.querySelector('#size');


let box = [], square = [];

for(let i = 0; i < 20; i++) {
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
function createSquares() {
    let sqPerEdge = +size.value;
    if(sqPerEdge > 30) {
        sqPerEdge = 30;
        size.value = 30;
    }
    if(!sqPerEdge || sqPerEdge == 0) {
        sqPerEdge = 0;
    }
    while(container.lastChild) {
        container.lastChild.remove();
    }
    for(let i = 0; i < sqPerEdge * sqPerEdge; i++) {
        box[i] = document.createElement('div');
        box[i].setAttribute('id', 'box');
        container.appendChild(box[i]);
    }
    console.log(sqPerEdge);
}
createSquares();
//size.addEventListener('change', createSquares);