const container = document.querySelector("#container");
const body = document.querySelector("body");


function createGrid() {
  for (let r = 0; r < 16; r++) {
    for (let c = 0; c < 16; c++) {
      let cell = document.createElement("div");
      container.appendChild(cell);
      cell.addEventListener("mouseover", () => {
        cell.style.backgroundColor = "black";
      });
    }
  }
}

createGrid();
