import React from 'react'
type propsType={
    children:React.ReactNode
}
export const Oscar = (props:propsType) => {
  return (
      <div>{props.children}</div>
  )
}
