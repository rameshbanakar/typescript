import React, { useState } from 'react'
type AuthUser = {
  name: String,
  email: String
}
export default function User() {
  const [user, setUser] = useState<AuthUser | null>(null)
  const handleLogIn=()=>{
    setUser({
      name:"Ramesh",
      email:"ramesh@gmail.com"
    })
  }
  const handleLogout=()=>{
    setUser(null)
  }
  return (
    <div>
      <button onClick={handleLogIn}>Log In</button>
      <button onClick={handleLogout}>Log out</button>
      <div>
        <h3>{user?.name}</h3>
        <h3>{user?.email}</h3>
      </div>
    </div>
  )
}
