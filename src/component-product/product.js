import React, { Component } from 'react'

export default class Product extends Component {
   render() {
      return (
         <div className="col-xs-12 col-sm-6 col-md-6 col-lg-3 card border-dark productItem">
            <img className="card-img-top productImg" src="http://svcy3.myclass.vn/images/adidas-prophere.png" alt="" />
            <div className="card-body text-left">
               <h4 className="card-title">Adidas Prophere</h4>
               <p className="card-text">350</p>
            </div>
            <div className="d-flex justify-content-start mb-3">
               <button className='btn btn-primary mx-3'>Detail</button>
               <button className='btn btn-danger'>Add to Cart</button>
            </div>
         </div>
      )
   }
};
