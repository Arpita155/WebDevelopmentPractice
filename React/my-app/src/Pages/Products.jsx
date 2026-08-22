import React, { useEffect, useState } from 'react'
import ProductCard from '../components/ProductCard'

export default function Products() {

  const [data,setData] = useState([])
  const [pageNo,setPageNo] = useState(1)
  const ITEM_PER_PAGE = 5;
  const pages = data.length/ITEM_PER_PAGE;
  let arr = new Array(pages).fill(0)
  let start = (pageNo-1)*ITEM_PER_PAGE;
  let end = start+ITEM_PER_PAGE;

  useEffect(()=>{
    async function fetchData(){
      let res = await fetch("https://dummyjson.com/products")
      res = await res.json()
      console.log(res)
      setData(res.products)
    }
    fetchData()
  },[])

  function handlePrev(){
    if(pageNo == 1) return
    setPageNo(pageNo-1)
  }

  function handleNext(){
    if(pageNo == pages) return;
    setPageNo(pageNo+1)
  }

  return (
    <div className='productt'>

      <center><h1 className='products-h1'>product page</h1>
      <div>
        <button className='pageNo' onClick={()=>handlePrev()}>&larr;Prev</button>
        {
          data.length != 0 && arr.map((ele,idx)=><button key={idx} className={'pageNo '+ (idx+1==pageNo ? "colorPage" : "")} onClick={()=>setPageNo(idx+1)}>{idx+1}</button>)
        }
        <button className='pageNo' onClick={()=>handleNext()}>Next&rarr;</button>
      </div>
      </center>
      <center>
        <div>
          {
            data.length != 0 && data.slice(start,end).map((product)=> <ProductCard key={product.id} product={product} />)
          }
        </div>
      </center>

    </div>
  )
}
