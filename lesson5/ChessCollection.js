import Chess from './chess.js';
const columns = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h']; //todo вынести в utils
let ChessCollection = [];

ChessCollection.push(new Chess('K', 'e1', '&#9812;' ));
ChessCollection.push(new Chess('Q', 'd1', '&#9813;' ));
ChessCollection.push(new Chess('R', 'c1', '&#9815;' ));
ChessCollection.push(new Chess('R', 'f1', '&#9815;' ));
ChessCollection.push(new Chess('N', 'b1', '&#9816;' ));
ChessCollection.push(new Chess('N', 'g1', '&#9816;' ));
ChessCollection.push(new Chess('B', 'a1', '&#9814;' ));
ChessCollection.push(new Chess('B', 'h1', '&#9814;' ));
for (let i = 0; i < 8; i++){
    ChessCollection.push(new Chess('P', `${columns[i]}2`, '&#9817;' ));
}

ChessCollection.push(new Chess('K', 'd8', '&#9818;' ));
ChessCollection.push(new Chess('Q', 'e8', '&#9819;' ));
ChessCollection.push(new Chess('R', 'c8', '&#9821;' ));
ChessCollection.push(new Chess('R', 'f8', '&#9821;' ));
ChessCollection.push(new Chess('N', 'b8', '&#9822;' ));
ChessCollection.push(new Chess('N', 'g8', '&#9822;' ));
ChessCollection.push(new Chess('B', 'a8', '&#9820;' ));
ChessCollection.push(new Chess('B', 'h8', '&#9820;' ));
for (let i = 0; i < 8; i++){
    ChessCollection.push(new Chess('P', `${columns[i]}7`, '&#9823;' ));
}


export default ChessCollection