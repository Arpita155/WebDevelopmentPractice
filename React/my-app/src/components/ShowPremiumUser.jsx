import React from 'react'
import ShowUser from './ShowUser'

export default function ShowPremiumUser({name,email}) {
  return (
    <div className='premium'>
      <span className='premium-text'></span>
      <ShowUser name={name} email={email} />
    </div>
  )
}
