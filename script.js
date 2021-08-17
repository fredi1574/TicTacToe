const grid = document.querySelectorAll(".tile");
let xTurn = true;

let tile = {
  marked: false,
  innerHTML: "",
};

grid.forEach((elem) => {
  elem = new tile();
  elem.addEventListener("click", () => {
    if (elem.innerHTML !== "") {
      return;
    }
    xTurn === true
      ? ((elem.innerHTML = "<i class='fas fa-times'>"), (elem.mark = "X"))
      : ((elem.innerHTML = "<i class='far fa-circle'>"), (elem.mark = "O"));
    xTurn = !xTurn;
  });
});

function checkIfWin() {
  for (let i = 0; i < grid.length; i++) {}
}
