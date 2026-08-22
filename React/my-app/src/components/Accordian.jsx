import React, { act, useState } from 'react'
import { MdExpandLess } from "react-icons/md";
import { MdExpandMore } from "react-icons/md";

export default function Accordian() {
    const [active, setActive] = useState(-1)
    const details = [
        {title: "Item -1", value:
        "This is the first item's accordion body. It is shown by default, until the collapse plugin adds the appropriate classes that we use to style each element. "},
        {title: "Item -2", value:
        "This is the first item's accordion body. It is shown by default, until the collapse plugin adds the appropriate classes that we use to style each element. "},
        {title: "Item -3", value:
        "This is the first item's accordion body. It is shown by default, until the collapse plugin adds the appropriate classes that we use to style each element. "},
        {title: "Item -4", value:
        "This is the first item's accordion body. It is shown by default, until the collapse plugin adds the appropriate classes that we use to style each element. "},
    ];

  return (
    <div>

      <center><h3>Accordian</h3></center>

      {details.map((detail,idx) => (
        <div key={idx} onClick={()=>{setActive((prev)=>{
            if(prev == idx) return -1;
            return idx;});
            }} className='box'>

            <div className='box-head'>
                <span >{detail.title}</span>
                <button className=''>{" "} {idx == active ? <MdExpandLess /> : <MdExpandMore /> }</button>
            </div>
            <p className={idx == active ? "" : "box-desc"}>{detail.value}</p>
        </div>
      ))}

    </div>
  );
}
