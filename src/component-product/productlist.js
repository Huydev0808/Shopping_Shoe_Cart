import React, { Component } from 'react'
import Product from './product';

export default class Productlist extends Component {
   render() {
      return (
         <div className='container'>
            <h3>BEST SHOE</h3>
            <div className='row justify-content-between'>
               <Product />
               <Product />
               <Product />
            </div>
         </div>
      )
   }
};
