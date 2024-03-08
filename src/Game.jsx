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
    const [history,setHistory]=useState([Array(9).fill(null)])
    const [winner,setWinner]=useState(undefined)
    if (!winner) {
        const result=calWinner(squares)
        result && setWinner(result)
    }
    
    function handleSquareChange(newSquare){
        setSquares(newSquare)
        setHistory([...history,newSquare])
    }
    function handleClick(index){
        const newSquares=history[index]
        setSquares(newSquares)
    }
    return (
        <div className="game">
            <div className="board">
                <Board squares={squares} handleSquareChange={handleSquareChange} winner={winner}/>
            </div>
            <div className="history">
               { winner ? <History history={history} handleClick={handleClick}/>:null}
            </div>
        </div>
    )
}

export default Game