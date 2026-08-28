import axios from "axios";
import React, { useEffect, useRef, useState } from "react";
import ProductCard from '../components/ProductCard';
import { BiLaptop } from "react-icons/bi";

export default function Search() {
    
    const [input,setInput] = useState("")
    const [data,setData] = useState([]);

    let cache = useRef({})
    useEffect(()=>{

        async function fetchData(){
            if(cache.current[input.trim()]){
                console.log("Returned From cache : "+input.trim());
                setData(cache.current[input.trim()])
                return
            }

            const res = await axios.get("https://dummyjson.com/products/search?q=" + input.trim(),);
            console.log("Fetched data for : "+input.trim());
            cache.current[input.trim()] = res.data.products
            setData(res.data.products);
        }

        let timer = setTimeout(()=>{
            fetchData()
        },300);

        return()=>{
            clearTimeout(timer);
        }
    },[input]);

  return (
    <div>
      
      <center>
        <input type="text" className='inp' placeholder="Search here..." value={input} onChange={(e)=>setInput(e.target.value)} />
      </center>

      <div className="show">
        {
            data.map((product, idx)=> <ProductCard key={idx} product={product} />)
        }
      </div>
    </div>
  )
}


// // import React, { useRef, useState } from 'react'
// export default function Search() {

//   const [cnt , setCount] = useState(0)
//   let  ref =  useRef(10)
//   return (
//     <div>
//       <h1>Count : {cnt}</h1>
//       <button className="" onClick={()=> setCount(c=>c+1)}>Add Count</button>

//        <h1>Data : {ref.current}</h1>
//       <button className="" onClick={()=>{
//          ref.current = ref.current + 1
//          console.log(ref.current);

//       }}>Add Data</button>
//     </div>
//   )
// }
