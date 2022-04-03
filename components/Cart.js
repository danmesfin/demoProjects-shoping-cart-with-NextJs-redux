import React from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { removeFromCart, totalAmount } from '../redux/shop/cartReducerSlice';
import Image from 'next/image';


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

    <div className='conatainer m-2 p-3 bg-light shadow'>
      {console.log(myCart)}
      {console.log(totalPrice)}
      {
        myCart.map((item) => (
          <div className='col-8 border bg-light' key={item.id}>
            <div className='row fw-bold'>
              <Image src={item.image} alt="..." width={40} height={40} objectFit="contain" />
              <span className='col me-2 text-truncate'>{item.title}</span><span className='col'>${item.price}</span>
              <div className='col justify-content-center '><button className='btn btn-warning ' onClick={() => onRemoveCartHandler(item)}>remove</button></div>
            </div>
          </div>
        ))
      }
      <div className='row fw-bold'>
        <span className='col-md-6'>Total</span> <span className='col-md-6'>${totalPrice}</span></div>
      <button className='btn btn-success' onClick={() => dispatch(checkout())}>Check Out</button>
    </div>
  )
}
