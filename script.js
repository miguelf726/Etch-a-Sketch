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

function createGrid() {
  let row;

  for (let i = 0; i < 16; i++) {
    row = createRows();

    for (let j = 0; j < 16; j++) {
      createCells(row);
    }
  }
}
createGrid()

// const btn = document.querySelector(".newGrid");
// btn.addEventListener("click", () => {
//   gridSize = prompt("Grid size?", "")
  
// let oldRow = document.querySelector(".cell")
// oldRow.forEach(row=>{
//     row.remove()
// })

// createGrid(gridSize)
  
//   ;
// });
