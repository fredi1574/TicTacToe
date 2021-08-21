const grid = document.querySelectorAll(".tile");
let xTurn = true;

grid.forEach((tile) => {
  /*
  tile.addEventListener("mouseover", () => {
    if (tile.innerHTML === "") {
      if (xTurn) {
        tile.innerHTML = "<i class='fas fa-times'>";
      } else {
        tile.innerHTML = "<i class='far fa-circle'>";
      }
      tile.style.color = "rgba(255,255,255,0.6)";
    }
  });

  tile.addEventListener("mouseout", () => {
    tile.innerHTML = "";
  }); */

  tile.addEventListener("click", () => {
    if (tile.innerHTML !== "") {
      return;
    }
    xTurn
      ? ((tile.innerHTML = "<i class='fas fa-times'>"), (tile.mark = "X"))
      : ((tile.innerHTML = "<i class='far fa-circle'>"), (tile.mark = "O"));
    xTurn = !xTurn;
  });
});

// function checkIfWin() {
//   for (let i = 0; i < grid.length; i++) {}
// }

document.querySelector("#clearBoard").addEventListener("click", () => {
  grid.forEach((tile) => {
    tile.textContent = "";
  });
});
