import React,{useState} from 'react'

export default function LoggedIn() {
  const [isLoggedIn, setIsLoggedIn] = useState<boolean>(false)
  const handleLogIn=()=>{
     setIsLoggedIn(true)
  }
  const handleLoggedOut=()=>{
    setIsLoggedIn(false)
  }
  return (
    <div>
      <button onClick={handleLogIn}>logged in</button>
      <button onClick={handleLoggedOut}>logged out</button>
      <div>user is {isLoggedIn?"user is logged In":"user is logged out"}</div>
    </div>
  )
}
