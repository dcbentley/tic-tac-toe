
// user selects human or AI for player seats
let playerONESelection;
let playerTWOSelection;

// Player game piece selection
// ask the player to select x or o OR randomize the selection or who goes first
let gamePieceX = 'X';
let gamePieceO = 'O';

// Current players
let currentPlayer = gamePieceX;
let totalCount = 1;

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
        
// Click handler function for boxes
function clickBoxHandler (e) {
        e.preventDefault();
        // console.log({e});
        totalCount += 1;
    if (e.target.innerText) {
        console.log("There is text already there")
    } else {
        if (totalCount % 2) {
                e.target.innerText = 'O';
        document.querySelector('.current-player').innerText = 'Player One'; 
        } else {
            e.target.innerText = 'X';
        document.querySelector('.current-player').innerText = 'Player Two';
        }
    }

}

// Click handler for Start and Reset button
function clickStartResetHandler (e) {
    console.log({e})
    let clearAllTheThings = document.querySelectorAll('.box');
    console.log({ clearAllTheThings });
    clearAllTheThings.forEach((eachThing) => {
        eachThing.innerText = ' ';
    })
}

        
function startOrRestartGame () {
    // Way to start or restart game and target boxes when clicked
    let playerBoxes = document.querySelectorAll('.box');
        playerBoxes.forEach((box) => {
        box.addEventListener('click', clickBoxHandler)
        });

    let startORReset = document.querySelectorAll('.start-reset');
        startORReset.forEach((GoReset) => {
            GoReset.addEventListener('click', clickStartResetHandler)
            
        });

}
        
function turnSequence () {
    // All the things that happen when a user takes a turn
    // 1)
    // 2)
    switchPlayers();
}

startOrRestartGame();