import React from 'react';
import {useSelector} from 'react-redux';



export default function Carts(props) {
   
   return (
      <div>
         <table className='table'>
            <thead>
               <tr>
                  <th>Id</th>
                  <th>Name</th>
                  <th>Image</th>
                  <th>Price</th>
                  <th>Quantity</th>
                  <th>Total</th>
                  <th></th>
               </tr>
            </thead>
            <tbody>
               <td>1</td>
               <td>Adidas</td>
               <td><img src="https://i.pravatar.cc/150?u=3" alt="/" style={{width:50}} /></td>
               <td>1000</td>
               <td>10</td>
               <td>10.000</td>
               <td>
                  <button className='btn btn-danger'>Delete</button>
               </td>
            </tbody>
         </table>
      </div>
   )
}
