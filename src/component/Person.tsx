import React from 'react'
type propsType={
    name:{
        firstName:String,
        lastName:String
    }
}
function Person(props:propsType) {
  return (
    <div>{props.name.firstName} and {props.name.lastName}</div>
  )
}

export default Person