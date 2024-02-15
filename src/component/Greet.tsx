import React from 'react'
type greetType={
  name:String
}
export default function Greet(props:greetType) {
  return (
    <div>welcome {props.name}! you have 10 unread messages</div>
  )
}
