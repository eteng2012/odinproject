//IIFE for Gameboard

const Gameboard = (function () {

  function initalize() {
    const table = document.querySelector(".table");
    table.innerHTML = "";
    for (let i=0; i<9; i++) {
      const item = document.createElement("div");
      item.classList.add("item");
      item.innerHTML = "";
      table.appendChild(item);
    }
  }

  function check_win(Player) {
    for (let i=0; i<3; i++) {
      //check rows
      let win = true;
      for (let j=0; j<3; j++) {
        const symbol = document.querySelector(`.item:nth-child(${i*3 + j + 1})`);
        if (symbol.innerHTML != Player.getType()) {
          win = false;
          break;
        }
      }
      if (win) {
        initalize();
        return win;
      }
      //check columns
      win = true;
      for (let j=0; j<3; j++) {
        const symbol = document.querySelector(`.item:nth-child(${j*3 + i + 1})`);
        if (symbol.innerHTML != Player.getType()) {
          win = false;
          break;
        }
      }
      if (win) {
        initalize();
        return win;
      }
    }
    return false;
  }

  function move(player) {
    const to_change = document.querySelector(`.item:nth-child(${player.get_row()*3 + player.get_col() + 1})`);
    if (to_change.innerHTML == '') {
      to_change.innerHTML = player.getType();
      return true;
    }
    else {
      return false;
    }
  }

  return { check_win, move,initalize }

})();


// Factory Function for Player
function createPlayer (type) {
  function getType() {
    return type;
  }
  let row = -1;
  let col = -1;
  function getCoords() {
    let row_element = document.querySelector("input#row");
    let col_element = document.querySelector("input#col");
    // Need to be numbers
    if (row_element.value == "" || col_element.value == "") {
      return;
    }
    row = Number(row_element.value);
    col = Number(col_element.value);
    row_element.value = "";
    col_element.value = "";
  }
  function get_row() {
    return row;
  }
  function get_col() {
    return col;
  }
  return { getType, getCoords, get_row, get_col};
}

const Game = (function () {
  let turn = "X";
  let player_x = createPlayer("X");
  let player_y = createPlayer("Y");
  function reset_turn() {
    const turn_element = document.querySelector(".turn");
    turn_element.innerHTML = "X's Turn";
    turn = "X";
  }
  function display_win(player) {
    const win_element = document.querySelector(".win");
    win_element.innerHTML = player.getType() + " wins";
  }
  function play() {
    if (turn == "X") {
      if (player_x.getCoords() == false) {
        console.log("Enter Input");
        return;
      }
      if (Gameboard.move(player_x) == false) {
        console.log("Try Valid Space");
        return;
      }
      const turn_element = document.querySelector(".turn");
      turn_element.innerHTML = "Y's Turn";
      turn = "Y";
      if (Gameboard.check_win(player_x)) {
        display_win(player_x);
        Game.reset_turn()
      }
    }
    else if (turn == "Y") {
      player_y.getCoords();
      if (Gameboard.move(player_y) == false) {
        console.log("Try Valid Space");
        return;
      }
      const turn_element = document.querySelector(".turn");
      turn_element.innerHTML = "X's Turn";
      turn = "X";
      if (Gameboard.check_win(player_y)) {
        display_win(player_y);
        Game.reset_turn()
      }
    }
  }
  return { play, reset_turn }
})();




Gameboard.initalize();

function button_press(event) {
  // NEED PREVENT DEFAULT TO STOP PAGE RELOADING!!!
  event.preventDefault();
  Game.play();
}

const button = document.querySelector("button");
button.addEventListener("click", button_press);

const restart = document.querySelector(".restart");
restart.addEventListener("click", () => {Gameboard.initalize(); Game.reset_turn()});