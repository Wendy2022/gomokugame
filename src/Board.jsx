import Square from "./Square"
import { useState } from "react"
function getNextLetter(squares){
    let square='X'
    let squareNum=squares.filter(val=>val==="X"||val==="O").length
    if (squareNum!==9) {
        if (squareNum%2===1) {
            square='O'
        }else{
            square='X'
        }
    }else{
        square=null
    }
    
    return square
}
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

function Board(){
    let status='The next player is X'

    const [squares,setSquares]=useState(Array(9).fill(null))
    const newLetter=getNextLetter(squares)
    const winner=calWinner(squares)
    if (winner) {
        status=`the winner is ${winner}`
    }else if(newLetter==null){
        status='nobody wins'
    }else{
        status=`the next player is ${newLetter}`
    }
    
    const clickHandler=(index)=>{
        if (squares[index]==null && winner==null) {
            const newSquares=squares.slice()
            newSquares[index]=newLetter
            setSquares(newSquares)
    }
        }
        
    return (
        <>  
            {status}
            <div className="board">
                <Square value={squares[0]} index={0} onClick={()=>clickHandler(0)}></Square>
                <Square value={squares[1]} index={1} onClick={()=>clickHandler(1)}></Square>
                <Square value={squares[2]} index={2} onClick={()=>clickHandler(2)}></Square>
            </div>
            <div className="board">
                <Square value={squares[3]} index={3} onClick={()=>clickHandler(3)}></Square>
                <Square value={squares[4]} index={4} onClick={()=>clickHandler(4)}></Square>
                <Square value={squares[5]} index={5} onClick={()=>clickHandler(5)}></Square>
            </div>
            <div className="board">
                <Square value={squares[6]} index={6} onClick={()=>clickHandler(6)}></Square>
                <Square value={squares[7]} index={7} onClick={()=>clickHandler(7)}></Square>
                <Square value={squares[8]} index={8} onClick={()=>clickHandler(8)}></Square>
            </div>
        </>
        
    )
}

export default Board