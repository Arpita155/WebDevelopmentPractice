import React from 'react'

export default function ShowUser({name,email}) {
  return (
    <div className='card'>
      <h3>Name : {name}</h3>
      <h5>Email : {email}</h5>
    </div>
  )
}
