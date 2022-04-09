import viewProduct from "../../components/viewProduct";
import { useRouter } from 'next/router'
import { useDispatch } from "react-redux";
import { addToCart, totalAmount } from "../../redux/shop/cartReducerSlice"
import { increment, decrement } from "../../redux/counter/counterSlice";
import { useSelector } from 'react-redux'
import Image from "next/image";
import Link from "next/link";

const Product = () => {

  const router = useRouter()
  const { id } = router.query


  const dispatch = useDispatch();
  const myProducts = useSelector((state) => state.product.product.slice());
  const count = useSelector((state) => state.counter.value);
  const onAddtoCartHandler = (item) => {
    dispatch(addToCart(item));
    dispatch(totalAmount());
  };
  const onIncrementHandler = () => {
    dispatch(increment())
  };
  const onDecrementHandler = () => {
   dispatch(decrement())
  };


  return (<section className="py-5">

    <div className="container ">
      <div className="row ">
        <div className="col-lg-7 mx-auto text-center mt-7 mb-5">
          <h5 className="fw-bold fs-3 fs-lg-5 lh-sm">product detail</h5>
        </div>
        <div className="col-12">
          <div className="row h-100 align-items-center g-2">

            {myProducts.map((item) => item.id == id ? (
              <div className=' row m-0 px-1 mx-00 hover' >
               <div className="col-md-6"> <Image className='img-fluid py-2' src={item.image}
                 alt="..." width={350} height={350}
                  objectFit='contain' /> </div>
                  <div className="col-md-6">
                <div className=''>
                  <div className='card-title  text-600 me-2 text-truncate'><strong>{item.title}</strong></div>
                  <span>${item.price}</span><hr></hr>
                  <div><span className="fw-bold">category </span>: {item.category}</div>
                  <div className="m-1">
                    <span className="fw-bold">About this Item</span>
                    <div>{item.description}</div></div>

                  <div className=" m-2">
                    <button className="fw-bold m-1" onClick={() => onIncrementHandler()}>+</button>
                    <span>{count}</span>
                    <button className="fw-bold m-1" onClick={() => onDecrementHandler()}>-</button>
                  </div>

                  <button onClick={() => onAddtoCartHandler(item)}   className="btn btn-warning"><Link href='/mycart'>Add To Cart</Link></button>
                </div>
               </div>
            </div>
            ) : (<></>))}
          </div>
        </div>
      </div>
      <div className="row my-5">
        <hr></hr>
        <h5 className="fw-bold me-2">Brands related to this category on Myshop</h5>

      </div>
    </div>
  </section>
  );
}

export default Product