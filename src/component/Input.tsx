import React,{useState} from 'react'
type inputProps = {
    value: string,
    handleChange: (event: React.ChangeEvent<HTMLInputElement>) => void
}
export default function Input(props: inputProps) {
    
    const handleChange = (event: React.ChangeEvent<HTMLInputElement>)=>{
       console.log(event);
       
       
    }
    return (
        <div>
            <input type="text" onChange={handleChange} value={props.value} />
        </div>
    )
}
