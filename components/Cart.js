import React from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { removeFromCart, totalAmount } from '../redux/shop/cartReducerSlice';
import Image from 'next/image';
import Link from 'next/link';

export default function Cart() {
  const myCart = useSelector((state) => state.cart.cart);
  const totalPrice = useSelector((state) => state.cart.total)
  const dispatch = useDispatch();

  function onRemoveCartHandler(item){
             dispatch(removeFromCart(item));
             dispatch(totalAmount());
  }

  /*
    function cartStat(props){
       const cart = props.cartItem;
      if(cart){
        return (
          cart.map((item) => (
             
            <div className='col-8 border bg-light' key={item.id}>
             <div className='row fw-bold'>
               <Image  src={item.image} alt="..." width={40} height={40} objectFit="contain" /> 
               <span className='col me-2 text-truncate'>{item.title}</span><span className='col'>${item.price}</span>
              <div className='col justify-content-center '><button className='btn btn-warning ' onClick={()=>dispatch(removeFromCart(item))}>remove</button></div> </div>
              
            </div>
    
          ))
        );
       
      } else{
        return <h1>Your CART is Empty !!</h1>;
      }
      
    }*/


  return (

    <div className='conatainer m-2 p-3 bg-sec shadow'>
      {console.log(myCart)}
      {console.log(totalPrice)}
     

<table className="table">
  <thead>
    <tr>
      <th scope="col">#</th>
      <th scope="col">Item</th>
      <th scope="col">Price</th>
      <th scope="col">Quantity</th>
      <th scope="col">Handle</th>
    </tr>
  </thead>
  <tbody>
  {
        myCart.map((item) => (
        
    <tr key={item.id}>
      <th scope="row"><Image src={item.image} alt="..." width={60} height={60} objectFit="contain" /></th>
      <td>{item.title}</td>
      <td>${item.price}</td>
      <td>{1}</td>
      <td><button className='btn btn-danger ' onClick={() => onRemoveCartHandler(item)}>remove</button></td>
    </tr>
     ))
    }
    <tr>
      <td><b>Subtotal</b> : ${totalPrice}</td>
      <td><button className='btn btn-success' onClick={() => dispatch(checkout())}>Check Out</button></td>
    </tr>
  </tbody>
</table>
<div><button className='btn btn-danger'><Link href={'/'}>Continue Shoping</Link></button></div>
     
    </div>
  )
}
