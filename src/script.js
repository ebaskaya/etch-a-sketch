let canvasSize = 16;
const canvasContainer = document.querySelector('.canvas-container');
const sizeSelector = document.querySelector('.size-select');
const MAX_SIZE = 600;



sizeSelector.addEventListener('click', getSize);




function getSize(){
    let size = parseInt(prompt('Enter size(Max: 100): '));
    if(size > 100 || size < 0 || isNaN(size)){
        alert('Invalid entry.');
        return;
    }
    canvasContainer.replaceChildren();
    createGrid(size);
}

function createGrid(size){
    setSize(size);

    
    for(let i= 0; i < size*size; i++){
        const canvasElement = document.createElement('div');
        canvasElement.style = `border: 1px solid`;
        canvasElement.classList.add('canvas-element');
        canvasElement.addEventListener('mousemove', function(e){
            fill(e);
        });
        canvasElement.addEventListener('mousedown', fill);
        
        canvasContainer.appendChild(canvasElement);            
        
    }
}

function setSize(size) {
    canvasContainer.style.setProperty('--size', size);
    canvasContainer.style.setProperty('--element-size', (MAX_SIZE/size) + "px");
}

function fill(e) {
    if(e.buttons == 1){
        e.target.style = 'background-color: black';
        e.preventDefault();
        
        console.log('cizdik');
        
    }
    
}

createGrid(canvasSize);

