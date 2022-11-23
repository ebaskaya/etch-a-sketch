let canvasSize = 16;
const canvasContainer = document.querySelector('.canvas-container');
const canvasElements = [];


function createGrid(size){
    for(let i= 0; i < size; i++){
        for(let j=0; j<size; j++){
            const canvasElement = document.createElement('div');
            canvasElement.style = `border: 1px solid`;
            canvasElements.push(canvasElement);
            canvasContainer.appendChild(canvasElement);
        }
    }
}

createGrid(canvasSize);

