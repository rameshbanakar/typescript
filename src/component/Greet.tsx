import React from 'react'
import Person from './Person'
type greetType = {
  name: String
  messageCount: number
  isLoggedIn: boolean
}
export default function Greet(props: greetType) {
  const personName={
    firstName:"Ramesh",
    lastName:"Banakar"
  }
  return (
    <>
    {props.isLoggedIn ? <div>welcome {props.name}! you have {props.messageCount} unread messages</div> : <div>welcome Guest! you have {props.messageCount} unread messages</div>}
    <Person name={personName}/>
    </>
  )
}
