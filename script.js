const grid = document.querySelectorAll(".tile");
let xScore = document.querySelector("#xScore");
let oScore = document.querySelector("#oScore");
let turnCounter = 0;

grid.forEach((tile) => {
  tile.addEventListener("mouseover", () => {
    if (tile.innerHTML === "") {
      turnCounter % 2 == 0
        ? (tile.innerHTML = "<i class='fas fa-times'>")
        : (tile.innerHTML = "<i class='far fa-circle'>");
      tile.classList.add("hoverAnimation");
    }
  });
  tile.addEventListener("click", () => {
    if (tile.hasAttribute("mark")) {
      return;
    }
    turnCounter % 2 == 0
      ? tile.setAttribute("mark", "X")
      : tile.setAttribute("mark", "O");
    tile.classList.remove("hoverAnimation");
    tile.style.color = "white";

    turnCounter++;

    if (checkIfWin()) {
      let winner = turnCounter % 2 === 1 ? "X" : "O"; //fix this issue
      if (winner === "X") {
        xScore.textContent++;
      } else {
        oScore.textContent++;
      }
      alert(winner + " has won!");
      clearBoard();
      return;
    }

    if (turnCounter === 9) {
      alert("Tie!");
      clearBoard();
      return;
    }
  });

  tile.addEventListener("mouseleave", () => {
    if (tile.getAttribute("mark") != "X" && tile.getAttribute("mark") != "O") {
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

  for (let i = 0; i < winningOptions.length; i++) {
    let [a, b, c] = winningOptions[i];
    if (
      grid[a].getAttribute("mark") !== null &&
      grid[a].getAttribute("mark") === grid[b].getAttribute("mark") &&
      grid[b].getAttribute("mark") === grid[c].getAttribute("mark")
    ) {
      return true;
    }
  }
  return false;
}

document.querySelector("#clearBoard").addEventListener("click", clearBoard);

document.querySelector("#resetScore").addEventListener("click", () => {
  xScore.textContent = 0;
  oScore.textContent = 0;
});

function clearBoard() {
  turnCounter = 0;
  grid.forEach((tile) => {
    tile.innerHTML = "";
    tile.removeAttribute("mark");
    tile.style.color = "";
  });
}
