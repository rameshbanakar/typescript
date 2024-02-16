import React from 'react'
type styleProps={
    style:React.CSSProperties
}
export default function Style(props:styleProps) {
  return (
    <div style={props.style}></div>
  )
}
