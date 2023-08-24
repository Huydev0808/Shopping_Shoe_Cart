import React from 'react'

export default function ProductItem(props) {
   return (
         <div className="card p-3 text-center">
            <img className="card-img-top" src="https://i.pravatar.cc/150?u=asdsdad" style={{width:"100%"}} alt='/' />
            <div className="card-body">
               <h4 className="card-title">Product</h4>
               <p className="card-text">Price</p>
               <button className='btn btn-secondary'>Add <i class="fa fa-cart-plus"></i></button>
            </div>
         </div>
   )
};
