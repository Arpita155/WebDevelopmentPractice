import React from 'react'

export default function ProductCard({product}) {
  return (
    <div className='product-card'>

      <h3>{product.id}</h3>
      <img src={product.thumbnail} alt="" />
      <span className='title'>{product.title}</span>
      <div className='left'><button>Go</button></div>
    </div>
  )
}
