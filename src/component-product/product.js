import React, { Component } from 'react'

export default class Product extends Component {
   render() {
      const {product, getProductAddCart} = this.props;

      //console.log(this.props);
      return (
         <div className="col-xs-12 col-sm-6 col-md-6 col-lg-3 card border-dark productItem">
            <img className="card-img-top productImg" src={product.image} alt="" />
            <div className="text-left">
               <h4 className="card-title">{product.name}</h4>
               <p className="card-text">{product.price} $</p>
               <button className='btn btn-danger mb-3' onClick={() => {getProductAddCart(product);}}>Add to Cart</button>
            </div>
         </div>
      )
   }
};
