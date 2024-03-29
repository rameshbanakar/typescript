import React from 'react'
type buttonProps={
    handleClick:(event:React.MouseEvent<HTMLButtonElement>,id:number)=>void
}
function Button(props:buttonProps) {
  return (
    <button onClick={(event)=>props.handleClick(event,1)}>click</button>
  )
}

export default Button