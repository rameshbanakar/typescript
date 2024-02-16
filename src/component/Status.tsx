import React from 'react'
type propsType = {
    status: "loading" | "success" | "Error"
}
export const Status = (props: propsType) => {
    let message
    if (props.status === "loading") {
        message = "data getting loading......"
    } else if (props.status === "success") {
        message = "data get fetched"
    } else if (props.status === "Error") {
        message = "Somthing Error Occured"
    }
    return (
        <div>
            <h2>{message}</h2>

        </div>
    )
}
