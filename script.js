const container = document.querySelector('#container');
const body = document.querySelector('body');
const size = document.querySelector('#size'); //playing board - squares per edge
const clearButton = document.querySelector("#clear-button");
const colorButton = document.querySelector("#color-button");

let box = [], square = [];
let color = "random";
let red = "red";

for(let i = 0; i < 30; i++) {           //  loop draws background squares
    square[i] = document.createElement('div');
    square[i].setAttribute('class', 'background-square');
    let rozmiar = Math.floor(Math.random() * 150) + 20;
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

function boxUp(obj, boxShadowSize, index) {
    obj.style.boxShadow = "rgb(40, 94, 175)" 
                                + boxShadowSize + "px "
                                + boxShadowSize + "px "
                                + boxShadowSize*2 + "px, rgb(154, 194, 255) "
                                + -boxShadowSize + "px "
                                + -boxShadowSize + "px "
                                + boxShadowSize*2 + "px";
    obj.style.backgroundColor = "rgb(103, 164, 255)";
    obj.style.zIndex = index;
    obj.className = 'box';
}

let boxDown = function(boxShadowSize) {
    if(this.className != 'boxD, box'){
        let colorForThis = paintBox(color);
        let darkColor = colorForThis.replace('50', '45').replace('70', '50');
        let lightColor = colorForThis.replace('50', '75').replace('70', '80');
        console.log(colorForThis);
        console.log(lightColor);
        this.style.boxShadow = "inset "
                                + darkColor + " " 
                                + boxShadowSize + "px "
                                + boxShadowSize + "px "
                                + boxShadowSize + "px, inset "
                                + lightColor + " "
                                + -boxShadowSize + "px "
                                + -boxShadowSize + "px "
                                + boxShadowSize + "px";
        this.style.backgroundColor = colorForThis; 
        this.className = 'boxD, box';
    }
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
    for(let i = 0, x = 50; i < num * num; i++, x--) {
        box[i] = document.createElement('div');
        box[i].className = 'box';
        boxUp(box[i], boxShadowSize, x);
        box[i].addEventListener( 'mouseenter', boxDown.bind(box[i], boxShadowSize) );
        container.appendChild(box[i]);
    }
    container.style.gridTemplateColumns = "repeat(" + num + ", 1fr)";
    container.style.gridTemplateRows = "repeat(" + num + ", 1fr)";
    
}

function changeColor() {
    if(colorButton.textContent == "RAINBOW") {
        colorButton.textContent = "RANDOM";
        color = "rainbow";
    }
    else {
        colorButton.textContent = "RAINBOW";
        color = "random";
    }
}

function paintBox(style) {
    if(style == "rainbow") {
        let num = Math.floor(Math.random() * 361);
        return "hsl(" + num + ", 100%, 50%)";
    } else return "hsl(216, 100%, 70%)";
}

size.value = 2; // default number of playing squares
createSquares();
size.onkeyup = createSquares;
clearButton.onclick = createSquares;
colorButton.onclick = changeColor;
