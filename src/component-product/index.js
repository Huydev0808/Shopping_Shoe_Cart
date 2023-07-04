import React, { Component } from 'react'
import data from "./data.json";
import Header from './header';
import Slider from './slider';
import Productlist from './productlist';
import Modal from './modal';
import Footer from './footer';
export default class Shoppingshoe extends Component {
   //Index chịu trách nhiệm quản lý state
   constructor(props) {
      super(props);
      this.state = {
         listProduct: data,
      }
   }
   render() {
      return (
         <div>         
            <Header />
            <button className="btn btn-success my-2 my-sm-0 btnCart" data-toggle="modal" data-target="#modelId">Giỏ hàng (0)</button>
            <Slider />
            <Productlist listProduct={this.state.listProduct}/>
            <Modal/>
            <Footer/>
         </div>
      )
   }
};
