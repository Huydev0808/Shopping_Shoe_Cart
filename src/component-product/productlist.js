import React, { Component } from 'react'
import Product from './product';

export default class Productlist extends Component {
   renderListShoe = () => {
      const {listProduct} = this.props;
      return listProduct.map((product) => {
         return (
            <Product key={product.id} 
            product={product}
            />
         )
      })
   }
   render() {
      console.log(this.props);
      return (
         <div className='container'>
            <h3>BEST SHOE</h3>
            <div className='row justify-content-between'>
               {this.renderListShoe()}
               {/* <Product />
               <Product />
               <Product /> */}
            </div>
         </div>
      )
   }
};
