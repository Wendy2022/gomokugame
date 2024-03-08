import { useState } from "react";
import Board from "./Board";
import History from "./History"

function calWinner(squares){
    let winner=null
    const winConditions=[
        [0,1,2],
        [3,4,5],
        [6,7,8],
        [0,3,6],
        [1,4,7],
        [2,5,8],
        [0,4,8],
        [2,4,6]
    ]
    winConditions.map(([a,b,c])=>{
        if (squares[a]!==null && squares[a]===squares[b] && squares[a]===squares[c]) {
            winner=squares[a]
        }
    })
    return winner
}

function Game(){
    const [squares,setSquares]=useState(Array(9).fill(null))
    const winner=calWinner(squares)
    return (
        <div className="game">
            <div className="board">
                <Board squares={squares} setSquares={setSquares} winner={winner}/>
            </div>
            <div className="history">
               { winner !==null ? <History/>:null}
            </div>
        </div>
    )
}

export default Game