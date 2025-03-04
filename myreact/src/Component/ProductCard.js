import React from 'react'

const ProductCard = ({product, addToCart}) => {
  return (
    <>
      <div className='col-md-4 mb-3'>
        <div className='card'>
            <img src={product.thumbnail} alt='products' width={'350px'} height={'200px'} className='rounded-top'/>
            <div className='card-body'>
                <h5 className='card-title'>{product.title}</h5>
                <p className='card-title'>{product.description}</p>
                <h5 className='card-title'>$ {product.price}</h5>
                <h5 className='card-title'>Rating: {product.rating}</h5>
                <h5 className='card-title'>Quantity: {product.stock}</h5>

                <button className='btn btn-primary' onClick={()=>addToCart(product)}>Add To Cart</button>
            </div>
        </div>
      </div>
    </>
  )
}

export default ProductCard
