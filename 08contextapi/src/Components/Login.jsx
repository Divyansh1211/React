import React, { useState, useContext } from 'react'
import UserContext from '../context/UserContext'

function Login() {
    const [username, setusername] = useState('')
    const [password, setpassword] = useState('')

    const {setUser} = useContext(UserContext)

    const handleSubmit = (e) => {
        e.preventDefault()
        setUser({username, password})
    }
  return (
    <div>
        <h1>Login</h1>
        <input 
        type = 'text'
        placeholder = 'Username'
        value = {username}
        onChange = {(e) => setusername(e.target.value)}
        />
        {" "}
        <input
        type='password'
        placeholder='Password'
        value={password}
        onChange={(e) => setpassword(e.target.value)} />
        <button onClick={handleSubmit}>Submit</button>
    </div>
  )
}

export default Login