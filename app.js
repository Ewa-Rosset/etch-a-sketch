
const container = document.getElementById('gridContainer');
const reset = document.getElementById('reset');
const blackBtn = document.getElementById('black');
const retroBtn = document.getElementById('retro');



for (i=0; i < 256; i++) {
    childDiv = document.createElement('div');
    
    childDiv.setAttribute('id', 'newDiv'+i);
    childDiv.setAttribute('class', 'grid-item');

    container.append(childDiv);  
} 


function clear() {
    console.log("works");

    childDivs = document.querySelectorAll('.grid-item');

    for (i=0; i < 256; i++) {
        
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

container.addEventListener("mouseover", function(event) {
    event.target.style.backgroundColor = 'black';
  });

reset.addEventListener("click", clear);

blackBtn.addEventListener("click", paintBlack);

retroBtn.addEventListener("click", paintRetro);






