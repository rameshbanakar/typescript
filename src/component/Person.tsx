import React from 'react'
import { personProps} from './Person.type'
function Person(props: personProps) {
  return (
    <div>{props.name.firstName} and {props.name.lastName}</div>
  )
}

export default Person