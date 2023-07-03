import React, { Component } from 'react'
import Header from './header';
import Slider from './slider';
import Productlist from './productlist';
import Modal from './modal';
import Footer from './footer';
export default class Shoppingshoe extends Component {
   render() {
      return (
         <div>
            <Header />
            <Slider />
            <Productlist/>
            <Modal/>
            <Footer/>
         </div>
      )
   }
};
