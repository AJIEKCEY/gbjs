import ChessCollection from "./ChessCollection.js";


// todo Вынести в отдельный класс ChessBoard
function drawChessBoard() {
    const columns = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h'];
    const rows = []

    let board = document.createElement("div");
    board.setAttribute('id','chessBoard');

    for (let i = 8; i >= 1; i--){
        let row = document.createElement("div");
        row.setAttribute('class','chessRow');

        for (let j = 1; j <= 8; j++){
            let cell = document.createElement("div");
            cell.setAttribute('class','chessCell');
            cell.dataset.adress = columns[j-1] + i;
            row.appendChild(cell);

            if (j === 1 ){
                let rowSpan = document.createElement('span');
                rowSpan.innerText = i;
                rowSpan.setAttribute('class','rowSpan');
                cell.appendChild(rowSpan);
            }

            if (i === 8 ){
                let colSpan = document.createElement('span');
                colSpan.innerText = columns[j-1];
                colSpan.setAttribute('class','colSpan');
                cell.appendChild(colSpan);

            }
        }
        board.appendChild(row);
    }

    const content = document.getElementById('content');
    content.appendChild(board);
}

drawChessBoard();

function placeChessOnBoard(collection){
    for (let item of collection){
        let targetEl = document.querySelector(`[data-adress = ${item.initialPosition}]`);
        let chessWrap = document.createElement('span');
        chessWrap.setAttribute('class', 'chessFigure');
        chessWrap.innerHTML = item.picture
        targetEl.appendChild(chessWrap);
    }
}

placeChessOnBoard(ChessCollection);
