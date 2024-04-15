const container = document.querySelector("#container");
const body = document.querySelector("body");
const button = document.createElement("button");
const cell = document.createElement("div");
cell.setAttribute("class", "cell");

function createGrid() {
  for (let r = 0; r < 16; r++) {
    for (let c = 0; c < 16; c++) {
      let cell = document.createElement("div");
      container.appendChild(cell);
      cell.addEventListener('mouseover',()=> {
       cell.style.backgroundColor="black"
    })
    }
    
  }
 
}

createGrid()


