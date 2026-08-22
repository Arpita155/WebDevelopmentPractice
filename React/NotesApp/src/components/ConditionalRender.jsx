import React from 'react'

export default function ConditionalRender({age}) {
  return (

    // ---- Using Ternary Operator --------

    // <div className='flex justify-center h-80 items-center'>
    //     { age >= 18 ? (
    //         <span className='text-3xl font-semibold text-green-700 text-shadow-lg/30'>You are eligible</span>
    //     ) : (<span className='text-3xl font-semibold text-red-500 text-shadow-lg/30'>You are not eligible</span>
    //     )}
    // </div>

    
    <div className='flex justify-center h-80 items-center'>
        <span className={"text-3xl font-semibold text-shadow-lg/30 " +(age >= 18 ? 'text-green-700' : 'text-red-700' )}>
          you are {age >= 18 ? "":"not"} eligible for vote
        </span>
    </div>
  )
}
