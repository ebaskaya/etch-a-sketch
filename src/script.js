let canvasSize = 16;
const canvasContainer = document.querySelector('.canvas-container');
const sizeSelector = document.querySelector('.size-select');

sizeSelector.addEventListener('click', getSize);


const canvasElements = [];

function getSize(){
    prompt('Enter size(Max: 100): ');
}

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

