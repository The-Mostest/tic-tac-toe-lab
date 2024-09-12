/*-------------------------------- Constants --------------------------------*/
const winningCombos = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8], 
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 6],
    [2, 4, 8],
  ]



/*---------------------------- Variables (state) ----------------------------*/
let board
let turn
let winner
let tie


/*------------------------ Cached Element References ------------------------*/

const messageEl = document.querySelector('#message');
const squareEls = document.querySelectorAll('.sqr');



// console.log(squareEls)
/*-------------------------------- Functions --------------------------------*/




const updateBoard = () => {
    board.forEach((cell, idx) => {
        if (cell === 'X') {
            squareEls[idx].textContent = 'X'}
            else if (cell === 'O') {
                squareEls[idx].textContent = 'O'}
                else {
                    squareEls[idx].textContent = ''
                }
            }
    )}

    const updateMessage = () => {
        if (!winner  && !tie) {
            if (turn === 'X')
                messageEl.textContent = 'Xs turn'
        } else if (!winner  && !tie) {
            if (turn === 'O')
                messageEl.textContent = 'Os turn'
    }   else if (!winner && tie) {
            messageEl.textContent = "It's a Tie!"
    } else {
        if (turn === 'X') {
            messageEl.textContent ='X won!'
        } else {
            messageEl.textContent = 'O won!'
        }
    }
    }

    const render = () => {
        updateBoard();
        updateMessage();
    };

    
function init() {
    board = ['','','','','','','','','']
    turn = 'X';
    winner = false;
    tie = false;
    render();
    }
 
    init();






const handleClick = (event) => {
 const squareIndex = event.target.id;
    if(winner === true || board[squareIndex] === '')
        placePiece(squareIndex);
        checkForWinner();
        checkForTie();
        console.log(tie)
}




const placePiece = (index) => {
    board[index] = turn;
    console.log(board)
}


const checkForWinner = () => {
    if  (
        ((board[0] !== '') && (board[0] === board[1]) && (board[0] === board[2])) ||  
        ((board[3] !== '') && (board[3] === board[4]) && (board[3] === board[5])) ||  
        ((board[6] !== '') && (board[6] === board[7]) && (board[6] === board[8])) ||  
        ((board[0] !== '') && (board[0] === board[3]) && (board[0] === board[6])) ||  
        ((board[1] !== '') && (board[1] === board[4]) && (board[1] === board[7])) ||  
        ((board[0] !== '') && (board[0] === board[4]) && (board[0] === board[8])) ||  
        ((board[2] !== '') && (board[2] === board[5]) && (board[2] === board[8])) ||  
        ((board[2] !== '') && (board[2] === board[4]) && (board[2] === board[6]))     
    ) { winner = true} ;
}


// const checkForWinner = () => {
//    winningCombos.forEach ((combo) => {
    
//    console.log('winner')
//     })};


    
// const checkForWinner = () => {
//     winningCombos.forEach((combo) => {
//         if(board.indexOf[0] === combo[0])
//             console.log('wonner')
//     })
// };




const checkForTie = () => {
    if (winner === true )
        return;
     else if (!board === '') {
        tie ===
     }
}


const switchPlayerTurn = () => {
    if (winner === true) {
        return;
    } else if ( winner === false && turn === 'X') { 
        turn = 'O'
    } else if (winner === false && turn === 'O') {
        turn = 'X'
    }
}





/*----------------------------- Event Listeners -----------------------------*/

squareEls.forEach((square) => {
    square.addEventListener('click', handleClick)


});






//1) Define the required variables used to track the state of the game.

//2) Store cached element references.

//3) Upon loading, the game state should be initialized, and a function should 
//   be called to render this game state.

//4) The state of the game should be rendered to the user.

//5) Define the required constants.

//6) Handle a player clicking a square with a `handleClick` function.

//7) Create Reset functionality.
