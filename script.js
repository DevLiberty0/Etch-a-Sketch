const container = document.querySelector('#container');
let box = [];

container.style.cssText = `display: grid; grid-template-columns: 1fr 1fr 1fr 1fr`;


for(let i = 0; i < 16; i++) {
    box[i] = document.createElement('div');
    box[i].style.cssText = 'width: 50px; height: 50px; background-color: black';
    container.appendChild(box[i]);
}