let canvasSize = 16;
const canvasContainer = document.querySelector('.canvas-container');
const canvasElements = [];

for(let i= 0; i < 16; i++){
    for(let j=0; j<16; j++){
        const canvasElement = document.createElement('div');
        canvasElement.style = `background-color: red; border: 1px solid`;
        canvasElements.push(canvasElement);
        canvasContainer.appendChild(canvasElement);
    }
}