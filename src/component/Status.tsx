import React from 'react'
type propsType = {
    status: "loading" | "success" | "Error"
}
export const Status = ({ status }: propsType) => {
    let message
    if (status === "loading") {
        message = "data getting loading......"
    } else if (status === "success") {
        message = "data get fetched"
    } else if (status === "Error") {
        message = "Somthing Error Occured"
    }
    return (
        <div>
            <h2>{message}</h2>

        </div>
    )
}
