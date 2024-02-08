let title = document.querySelector(".title");
let turn = "x";
let square = [];
let count = 0;
function game(id) {
  let element = document.getElementById(id);
  if (turn === "x" && element.innerHTML == "") {
    element.innerHTML = "X";
    turn = "o";
    title.innerHTML = "O turn";
  } else if (turn === "o" && element.innerHTML == "") {
    element.innerHTML = "O";
    turn = "x";
    title.innerHTML = "X turn";
  }
  winner();
}

function winner() {
  for (let i = 1; i < 10; i++) {
    square[i] = document.getElementById("item" + i).innerHTML;
  }
  // horizontal
  if (square[1] == square[2] && square[2] == square[3] && square[1] != "") {
    newGame(1, 2, 3);
    count++;
  }
  if (square[4] == square[5] && square[5] == square[6] && square[4] != "") {
    newGame(4, 5, 6);
      count++;
  }
  if (square[7] == square[8] && square[8] == square[9] && square[7] != "") {
    newGame(7, 8, 9);
        count++;
  }

  // vertical
  if (square[1] == square[4] && square[4] == square[7] && square[1] != "") {
    newGame(1, 4, 7);
        count++;
  }
  if (square[2] == square[5] && square[5] == square[8] && square[2] != "") {
    newGame(2, 5, 8);
        count++;
  }
  if (square[3] == square[6] && square[6] == square[9] && square[3] != "") {
    newGame(3, 6, 9);
    count++;
  }

  //cros
  if (square[1] == square[5] && square[5] == square[9] && square[1] != "") {
    newGame(1, 5, 9);
        count++;
  }
  if (square[3] == square[5] && square[5] == square[7] && square[3] != "") {
    newGame(3, 5, 7);
        count++;
  } 
  if ( count == 0  ) {
    title.innerHTML = "Drow";
    setInterval(function () {
      title.innerHTML += ".";
    }, 1000);
    setTimeout(function () {
      location.reload();
    }, 4000);
  }
}

function newGame(num1, num2, num3) {
  document.getElementById("item" + num1).style.background = "#25db86";
  document.getElementById("item" + num2).style.background = "#25db86";
  document.getElementById("item" + num3).style.background = "#25db86";

  title.innerHTML = `${square[num1]} Winner`;
  setInterval(function () {
    title.innerHTML += ".";
  }, 1000);
  setTimeout(function () {
    location.reload();
  }, 4000);

  for (let i = 1; i < 10; i++) {
    document.getElementById("item" + i).removeAttribute("onclick");
  }
}
