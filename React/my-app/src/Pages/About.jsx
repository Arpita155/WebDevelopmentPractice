import React, { useContext } from 'react'
import ShowUser from '../components/ShowUser'
import ShowPremiumUser from '../components/ShowPremiumUser'
import userContext from '../context/UserContext'

export default function About() {
  const data = useContext(userContext)
  console.log(data);
  
  return (
    <div>
      <h1>About page</h1>
      <ShowUser name={"Arpita"} email={"outgoingkrishna"}/>
      <ShowPremiumUser name={"Arpita"} email={"outgoingkrishna"} />
    </div>
  )
}
