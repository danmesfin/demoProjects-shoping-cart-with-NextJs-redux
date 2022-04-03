import { useDispatch } from "react-redux";
import { addToCart } from "../redux/shop/cartReducerSlice"
import { useSelector } from 'react-redux'
import SingleItem from "./SingleItem";
import FavoriteButton from "./FavoriteButton";


function Products() {
  const dispatch = useDispatch();
  const myProducts = useSelector((state) => state.product.product.slice());
  const pr = useSelector((state) => state.product.product[0]);

  const onAddtoCartHandler = (item) => {
    dispatch(addToCart(item));
  };
  return (
    
      <section className="py-5">

        <div className="container ">
          <div className="row ">
            <div className="col-lg-7 mx-auto text-center mt-7 mb-5">
              <h5 className="fw-bold fs-3 fs-lg-5 lh-sm">Best Deals</h5>
            </div>
            <div className="col-12">
              <div className="carousel slide" id="carouselBestDeals" data-bs-touch="false" data-bs-interval="false">
                <div className="carousel-inner">
                  <div className="carousel-item active" data-bs-interval="10000">
                    <div className="row h-100 align-items-center g-2">
                      {myProducts.map((item) => (

                        <SingleItem item={item} key={item.Id} >
                        </SingleItem>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div> 
          </div>
        </div>
      </section>

    
  );
}

export default Products