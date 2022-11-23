let canvasSize = 16;
const canvasContainer = document.querySelector('.canvas-container');
const canvasElements = [];


function createGrid(size){
    for(let i= 0; i < size*size; i++){
        const canvasElement = document.createElement('div');
        canvasElement.style = `border: 1px solid`;
        canvasElement.classList.add('canvas-element');
        canvasElement.addEventListener('mouseover', fill);
        canvasElements.push(canvasElement);
        canvasContainer.appendChild(canvasElement);            
        
    }
}

function fill() {
    this.style = 'background-color: black';
}

createGrid(canvasSize);

