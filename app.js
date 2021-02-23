
const container = document.getElementById('gridContainer');
const reset = document.getElementById('reset');
const blackBtn = document.getElementById('black');
const retroBtn = document.getElementById('retro');
const sizeBtn = document.getElementById('sizer');
let gridSize = 16;



for (i=0; i < (gridSize*gridSize); i++) {
    childDiv = document.createElement('div');

    childDiv.setAttribute('class', 'grid-item');

    container.append(childDiv);  
} 


function clear() {
    console.log("works");

    childDivs = document.querySelectorAll('.grid-item');

    for (i=0; i < (gridSize*gridSize); i++) {
        
        childDivs[i].style.backgroundColor ="white";   
}}


function paintRetro(){
    container.addEventListener("mouseover", function(event) {
        const retroColors = ["#ff48c4", "#2bd1fc", "#f3ea5f", "#c04df9", "#c04df9", "#ff3f3f"];
        let randomRetro = retroColors[~~(Math.random() * retroColors.length)];
        event.target.style.backgroundColor = randomRetro;
      });
    
}

function paintBlack(){
    container.addEventListener("mouseover", function(event) {
        event.target.style.backgroundColor = 'black';
      });
    
}

function prompter(){
    
    chooseSize = true;

    while (chooseSize) { 

        gridSize = prompt("Please enter a number of squares you'd like in the grid between 10 and 100");

        if (gridSize < 10 || gridSize > 100) {
            alert("Incorrect number. Please Try again.")
        }

        else {
            chooseSize = false;

            container.textContent = "";

            container.style.gridTemplateColumns = `repeat(${gridSize}, 1fr)`;
        
            console.log(container);

            for (i=0; i < (gridSize*gridSize); i++) {
                childDiv = document.createElement('div');
                
                childDiv.setAttribute('class', 'grid-item');
    
                container.append(childDiv);  
                }     
        }}

        
}

container.addEventListener("mouseover", function(event) {
    event.target.style.backgroundColor = 'black';
  });

reset.addEventListener("click", clear);

blackBtn.addEventListener("click", paintBlack);

retroBtn.addEventListener("click", paintRetro);

sizeBtn.addEventListener("click", prompter);


