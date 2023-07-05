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
         listCart: [],
      }
   };
   _findIndex = (id) => {
      return this.state.listCart.findIndex((product) => {
         return product.id === id;
      });
   }
   handleAddCart = (product) => {
      const index = this._findIndex(product.id);
      let listCart = [...this.state.listCart];
      if (index !== -1) {
         //tìm thấy => cập nhật SL
         listCart[index].soLuong += 1;
      } else {
         //ko tìm thấy => add to Cart
         const productAddCart = {
            id: product.id,
            name: product.name,
            image: product.image,
            soLuong: 1,
            price: product.price,
         };
         //Tạo mảng listCart mới từ this.state.listCart
         listCart.push(productAddCart);
      }
      //Cập nhật lại state
      this.setState({
         listCart,
      });
   }
   handleUpdateQuantity = (id, isPlus) => {
      let listCartClone = [...this.state.listCart];
      const index = this._findIndex(id);
      if (index !== -1) {
         if (isPlus) {
            //tangSL
            listCartClone[index].soLuong += 1;
         } else {
            //giamSL
            if (listCartClone[index].soLuong > 1) {
               listCartClone[index].soLuong -= 1;
            }
         }
         //cập nhật lại state để component render lại
         this.setState({
            listCart: listCartClone,
         })
      }

   }
   handleDelete = (id) => {
      //Clone mảng listCart
      let listCartClone = [...this.state.listCart];
      //Tìm vị trí
      const index = this._findIndex(id);  
      if(index !== -1 ) {
          //Xoá
         listCartClone.splice(index,1);
         //Update state
         this.setState ({
            listCart: listCartClone,
         })
      }
      
      console.log(id);
   }
   totalQuantity = () => {
      return this.state.listCart.reduce((total, product) =>{
         return total += product.soLuong
      }, 0);
   }
   render() {
      const { listCart } = this.state;
      return (
         <div>
            <Header />
            <button className="btn btn-success my-2 my-sm-0 btnCart" data-toggle="modal" data-target="#modelId">Giỏ hàng ({this.totalQuantity()})</button>
            <Slider />
            <Productlist listProduct={this.state.listProduct}
               getProductAddCart={this.handleAddCart} />
            <Modal listCart={listCart} getProductUpdate={this.handleUpdateQuantity} 
            getDeleteProduct = {this.handleDelete}/>
            <Footer />
         </div>
      )
   }
};
