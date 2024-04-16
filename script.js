const container = document.querySelector("#container");

function createRows() {
  let row = document.createElement("div");

  container.appendChild(row);
  return row;
}

function createCells(row) {
  const cell = document.createElement("div");
  cell.classList.add("cell");
  row.appendChild(cell);
  cell.addEventListener("mouseover", () => {
    cell.style.backgroundColor = "black";
  });
}

function createGrid(gridSize) {
  let row;

  for (let i = 0; i < gridSize; i++) {
    row = createRows();

    for (let j = 0; j < gridSize; j++) {
      createCells(row);
    }
  }
}
let gridSize = 16;
createGrid(gridSize);

function removeGrid() {
  container.remove();
}
const btn = document.querySelector(".newGrid");
btn.addEventListener("click", () => {
  gridSize = prompt("Grid size?", "");
  removeGrid();

  createGrid(gridSize);
});

//   ;
// });
