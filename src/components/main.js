import React from 'react'
import Product from './product';


export default function Main(props){

    const { products, onAdd, onRemove } = props;
    
    return(
        <div className='block col-2'>
           <h2>Products</h2>

          <div className='row'>
          {products.map((product) => (
             <Product key={product.id} product={product} onAdd={() => onAdd(product)} onRemove={() => onRemove(product)} />
          ))}
          </div>
        </div>
    )
}