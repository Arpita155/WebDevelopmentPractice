import React, { useState } from 'react'
import HeavyCalculation from '../Pages/HeavyCalculation'

export default function Login({user}) {

    const [email, setEmail] = useState("")
    const [pass, setPass] = useState("")
    console.log(user)

  return (
    <div className='login-div'>
      
        <center>
        <h3>Login</h3>
        <input type="text" value={email} onChange={(e)=>{setEmail(e.target.value)}} placeholder='Set Email...' /><br></br>
        <input type="text" value={pass} onChange={(e)=>{setPass(e.target.value)}} placeholder='Enter Password ...' /><br></br>
        <button>Login</button>
      </center>

      {/* <HeavyCalculation /> */}
      

    </div>
  )
}
