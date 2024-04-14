const container = document.querySelector("#container");
const body = document.querySelector("body")
const button = document.createElement("button")


function createGrid() {
  for (let r = 0; r < 16; r++) {
    for (let c = 0; c < 16; c++) {
      const cell = document.createElement("div");

      container.appendChild(cell);
    }
  }
}

createGrid();
