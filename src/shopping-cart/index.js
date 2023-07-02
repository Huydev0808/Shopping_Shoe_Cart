import React, { Component } from 'react'
import Danhsachsanpham from './danhsachsanpham';
import Modal from './modal';
import data from './data.json';
export default class Shoecart extends Component {
  constructor(props) {
    super(props);
    this.state = {
      listProduct: data,
      productDetail: data[0],
      listCart: [],
    }
  }
  render() {
    return (
      <div>
        <h3>Shopping Shoe</h3>
        <div className="container">
          <button className='btn btn-success' data-toggle="modal" data-target="#modelID">Giỏ hàng</button>
        </div>
        <Danhsachsanpham/>
        <Modal/>
      </div>
    )
  }
};
