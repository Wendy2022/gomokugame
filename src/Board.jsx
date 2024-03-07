import Square from "./Square"
import { useState } from "react"

function Board(){
    const [squares,setSquares]=useState(Array(9).fill(null))
    let square='X'
    let squareNum=squares.filter(val=>val==="X"||val==="O").length
    
    if (squareNum%2===1) {
        square='O'
    }else{
        square='X'
    }
    const clickHandler=(index)=>{
        const newSquares=squares.slice()
        newSquares[index]=square
        setSquares(newSquares)
    }
    return (
        <>
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