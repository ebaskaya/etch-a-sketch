let canvasSize = 16;
const canvasContainer = document.querySelector('.canvas-container');
const sizeSelector = document.querySelector('.size-select');
const MAX_SIZE = 600;



sizeSelector.addEventListener('click', getSize);




function getSize(){
    canvasContainer.replaceChildren();
    let size = parseInt(prompt('Enter size(Max: 100): '));
    createGrid(size);
}

function createGrid(size){
    setSize(size);

    
    for(let i= 0; i < size*size; i++){
        const canvasElement = document.createElement('div');
        canvasElement.style = `border: 1px solid`;
        canvasElement.classList.add('canvas-element');
        canvasElement.addEventListener('mouseover', fill);
        
        canvasContainer.appendChild(canvasElement);            
        
    }
}

function setSize(size) {
    canvasContainer.style.setProperty('--size', size);
    canvasContainer.style.setProperty('--element-size', (MAX_SIZE/size) + "px");
}

function fill() {
    this.style = 'background-color: black';
}

createGrid(canvasSize);

