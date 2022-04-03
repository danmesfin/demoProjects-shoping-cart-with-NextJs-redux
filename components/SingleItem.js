import React from 'react'
import Image from 'next/image';
import {useDispatch} from "react-redux" ;
import {addToCart, totalAmount} from "../redux/shop/cartReducerSlice"

function SingleItem(props) {
  const dispatch = useDispatch();
  const onAddtoCartHandler = (item) => {
    dispatch(addToCart(item));
    dispatch(totalAmount());
  };

  return (

        <div className='card col-md-3 m-0 px-1 mx-00 hover'>
          <Image className='img-fluid py-2' src={props.item.image} alt="..." width="100%" height={250} objectFit='contain'/>
          <div className='card-body fw-bold'>
            <div className='card-title  text-600 me-2 text-truncate'><strong>{props.item.title}</strong></div>
            <span>${props.item.price}</span>
          </div>
          <button onClick={() => onAddtoCartHandler(props.item)} className="btn btn-warning">Add To Cart</button>
        </div>

  )
}

export default SingleItem