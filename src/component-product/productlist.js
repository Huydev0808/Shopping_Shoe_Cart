import React, { Component } from 'react'
import Product from './product';

export default class Productlist extends Component {
   renderListShoe = () => {
      const {listProduct, getProductAddCart} = this.props;
      return listProduct.map((product) => {
         return (
            <Product key={product.id} 
            product={product}
            getProductAddCart = {getProductAddCart}
            />
         )
      })
   }
   //justify-content-between
   render() {
      console.log(this.props);
      return (
         <div className='container'>
            <h3>BEST SHOE</h3>
            <div className='row '>
               {this.renderListShoe()}
               {/* <Product />
               <Product />
               <Product /> */}
            </div>
         </div>
      )
   }
};
