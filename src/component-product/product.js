import React, { Component } from 'react'

export default class Product extends Component {
   render() {
      const {product} = this.props;

      //console.log(this.props);
      return (
         <div className="col-xs-12 col-sm-6 col-md-6 col-lg-3 card border-dark productItem">
            <img className="card-img-top productImg" src={product.image} alt="" />
            <div className="card-body text-left">
               <h4 className="card-title">{product.name}</h4>
               <p className="card-text">{product.price} $</p>
            </div>
            <div className="d-flex justify-content-start mb-3">
               <button className='btn btn-primary mx-3'>Detail</button>
               <button className='btn btn-danger'>Add to Cart</button>
            </div>
         </div>
      )
   }
};
