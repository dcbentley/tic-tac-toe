// user selects human or AI for player seats
let playerONESelection;
let playerTWOSelection;

// Player game piece selection
// ask the player to select x or o OR randomize the selection or who goes first
let gamePieceX = 'X';
let gamePieceO = 'O';

// Current players
let currentPlayer = gamePieceX;

// Computer player
let virtualPlayer00;
let virtualPlayer01;

// Current representation of the game board
// let gameBoard= [
//                 [aa, bb, cc],
//                 [dd, ee, ff],
//                 [gg, hh, ii]
//                 ];

function checkWinCondition () {
    // Check for win conditions function
}

function checkTieCondition () {
    // Check for tieCondition
}

function switchPlayers () {
    // Switch or select different player 'x' vs 'o'
    // store user selections to variables
    // if player selects x assign other game piece to other player
    // currentPlayer = currentPlayer === gamePieceX ? gamePieceO : gamePieceX;
   
   
    if (currentPlayer === gamePieceX) {
        playerTWOSelection = gamePieceO
    } else currentPlayer = gamePieceX;

    /*
    if (currentPlayer === "X"){
        currentPlayer = "O";
    } else {
        currentPlayer = "X";
    }
    currentPlayer = currentPlayer ==== "X" ? "O" : "x" // ternary operator 
    */

}

function clickBoxHandler (){}

function checkBoxNotOccupied () {
    // Check if game space if NOT occupied 
}

function startOrRestartGame () {
    // Way to start or restart game
}

function turnSequence () {
    // All the things that happen when a user takes a turn
}

function writeMessage () {
    // update the game board message with game status
}

// check to see if switch player is working
console.log((currentPlayer));