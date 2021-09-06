const grid = document.querySelectorAll(".tile");
let xTurn = true;

grid.forEach((tile) => {
  tile.addEventListener("mouseover", () => {
    if (tile.innerHTML === "") {
      xTurn
        ? (tile.innerHTML = "<i class='fas fa-times'>")
        : (tile.innerHTML = "<i class='far fa-circle'>");
      tile.classList.add("hoverAnimation");
    }
  });
  tile.addEventListener("mousedown", () => {
    xTurn ? (tile.mark = "X") : (tile.mark = "O");
    tile.classList.remove("hoverAnimation");
    tile.style.color = "rgb(255,255,255)";

    if (checkIfWin()) {
      alert("banana");
    }
    xTurn = !xTurn;
  });

  tile.addEventListener("mouseleave", () => {
    if (tile.mark != "X" && tile.mark != "O") {
      tile.textContent = "";
    }
  });
});

function checkIfWin() {
  const winningOptions = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6],
  ];

  winningOptions.forEach((option) => {
    if (grid[option[0]].mark === grid[option[1]].mark && grid[option[2]].mark) {
      return true;
    }
  });
}

document.querySelector("#clearBoard").addEventListener("click", () => {
  grid.forEach((tile) => {
    tile.innerHTML = "";
    tile.mark = "";
    tile.style.color = "";
    xTurn = true;
  });
});

document.querySelector("#resetScore").addEventListener("click", () => {
  document.querySelector("#xScore").textContent = "0";
  document.querySelector("#oScore").textContent = "0";
});
