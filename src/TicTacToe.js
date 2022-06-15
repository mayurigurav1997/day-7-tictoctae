import { useState } from "react";
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';
export function TicTacToe() {
    const [isXTurn, setXTurn] = useState(true);
    const [board, setBoard] = useState([null, null, null, null, null, null, null, null, null]);
    return (
        <div className="main-container">
            <h1>Fun Game</h1>
            <h3>It is {isXTurn?"X":"0"} turn</h3>
            <Board isXTurn={isXTurn} setXTurn={setXTurn} board={board} setBoard={setBoard}/>
            <Button variant="contained" size="medium" onClick={() => setBoard([null, null, null, null, null, null, null, null, null])}>Restart</Button>
            
            
        </div>
    );
}

//tie ,whos turn,restart
function Board({isXTurn,setXTurn,board,setBoard}) {
    
    

    const decideWinner = (board) =>{
        const lines = [[0,1,2],[3,4,5],[6,7,8],[0,3,6],[1,4,7],[2,5,8],[0,4,8],[2,4,6]];

        for(let i=0;i<lines.length;i++){
            const [a,b,c]=lines[i];
            console.log(lines[i],a,b,c)
            if(board[a] !== null && board[a]==board[b] && board[b]===board[c]){
                console.log("Winner",board[a]);
                return board[a];
            }
        }
        return null;
    }
    const winner = decideWinner(board);

    const handleClick = (index) => {
        console.log(index);
        if ( winner===null && !board[index] ) {
            const boardCopy = [...board];
            boardCopy[index] = isXTurn ? "X" : "0";
            setBoard(boardCopy);
            setXTurn(!isXTurn);
            
        }
    }
    return (
        <div className="board">
             
            {board.map((val, index) => (<GameBox val={val} onPlayerClick={() => handleClick(index)} />))} <br /><br />
            <h2>Winner is : {winner}</h2> <br />
          <br />
           
            
        </div>
    )
}

function GameBox({ val, onPlayerClick }) {
    // const [val, setVal] = useState("");
    const styles = {
        color: val === "X" ? "green" : "red"
    }
    return (
        <div onClick={onPlayerClick} className="game-box" style={styles}>{val}</div>
    )
}


