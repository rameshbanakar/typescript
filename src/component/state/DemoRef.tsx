import React, { useEffect, useRef } from 'react'

export default function DemoRef() {
    const inputRef = useRef<HTMLInputElement>(null)
    useEffect(() => {
        inputRef.current?.focus()
    },[])
    return (
        <div>
            <input type="text" ref={inputRef} />
        </div>
    )
}
