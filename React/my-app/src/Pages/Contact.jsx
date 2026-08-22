import React from 'react'
import Login from '../components/Login'

export default function Contact({user}) {
  return (
    <div>
      
      <center><h1 className='contact-h1'>Contact page</h1></center>
      <center>
        <div className='contact-div'>
         <Login user={user}/>
        </div>
      </center>
      
    </div>
  )
}
