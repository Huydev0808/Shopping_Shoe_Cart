import React from 'react'
import Carts from './Carts'
import ProductItem from './ProductItem'

export default function Products(props) {
   return (
      <div className='container'>
         <h3>Shoe Shop</h3>
         <Carts />
         <h3>Product List</h3>
         <div className='row'>
            <div className='col-3'>
               <ProductItem />
            </div>        
         </div>
      </div>
   )
};
