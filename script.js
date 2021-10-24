const backgroundSquare = document.querySelector('.background-square');
const container = document.querySelector('#container');
const body = document.querySelector('body');
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

for(let i = 0; i < 25; i++) {
    box[i] = document.createElement('div');
    box[i].setAttribute('id', 'box');
    container.appendChild(box[i]);
}