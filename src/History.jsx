

function History({history,handleClick}){
    const list=history.map((item,index)=>{
      return  <li key={index} onClick={()=>handleClick(index)}> this is step {index+1}</li>
    })

    return(
        <div>
            <h2>history</h2>
            <ul>
                {list}
            </ul>
        </div>
    )
}

export default History