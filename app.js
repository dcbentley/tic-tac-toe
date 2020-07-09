
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
        if (currentPlayer === gamePieceX) {
            playerTWOSelection = gamePieceO
        } else currentPlayer = gamePieceX;
        
        // extra ternary operator
        // currentPlayer = currentPlayer === gamePieceX ? gamePieceO : gamePieceX;
    }
    
    
    // Target boxes and add data-numbers
    // let buttons = document.querySelectorAll('.js-button');
    //     for (let i = 0; i < buttons.length; i++) {
        //         buttons[i].setAttribute('data-number', i + 1);
        //     }
        
        
// Click handler function for boxes
function clickBoxHandler (e) {
        e.preventDefault();
    // let increment = parseInt(e.target.dataset.increment);
        console.log(e);
}
// Click handler for Start and Reset button
function clickStartResetHandler (e) {
console.log({e})
}
        
function checkBoxNotOccupied () {
    // Check if game space if NOT occupied 
    // let isBoxOccupied = document.querySelectorAll
}
        
function startOrRestartGame () {
    // Way to start or restart game
    // Target boxes when clicked
    let playerBoxes = document.querySelectorAll('.box');
        playerBoxes.forEach((box) => {
        box.addEventListener('click', clickBoxHandler)
        });
        if (currentPlayer === gamePieceX) {
            // document.querySelectorAll(e.srcElement)
            // document.querySelectorAll(e.target.dataset);
        }

    let startORReset = document.querySelectorAll('.control-panel');
        startORReset.forEach((GoReset) => {
            GoReset.addEventListener('click', clickStartResetHandler)
            // ADD FUNCTIONALITY
            // clear all spaces on the board
            let playerBoxes = ' ';
        });

}
        
function turnSequence () {
    // All the things that happen when a user takes a turn
    // 1)
    // 2)
    switchPlayers();
}

function writeMessage () {
    // update the game board message with game status
}

// check to see if switch player is working
// console.log((currentPlayer));

startOrRestartGame();

console.log()