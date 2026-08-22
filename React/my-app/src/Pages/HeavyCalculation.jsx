import React from 'react'

export default function HeavyCalculation() {

  let sum  = useMemo(()=>{
      let sum  = 0
    for(let i = 0 ; i< 1000000000 ;i++){
        sum+=i
    }
     
      return sum
    
    },[])
 

    console.log("Heavy component Rendered");
    
   
    
  return (
    <div>HeavyCalculation : {sum}</div>
  )
}
