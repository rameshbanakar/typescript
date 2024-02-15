import React from 'react'
type propsTypes = {
    name: {
        firstName: string;
        lastName: string;
    }[]
}
function PersonList(props: propsTypes) {
    return (
        <div>
            {props.name.map(name => <h3 >{name.firstName} and {name.lastName}</h3>)}
        </div>
    )
}

export default PersonList