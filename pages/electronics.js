import Image from "next/image";
import SingleItem from "../components/SingleItem";

export async function getServerSideProps() {
    // Instead of the file system,
    // fetch post data from an external API endpoint
    const res = await fetch('https://fakestoreapi.com/products/category/electronics')
    const data=  await res.json()
    

    if (!data) {
        return {
          notFound: true,
        }
      }

    return {
        props: {
            data
        }
    };
  }

  export default function posts({data}) {
   
    const results  = data;
    console.log(results)
    
    return (
      <div>
          
          
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
              {results.map((item) => (

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
      </div>
    );
  }
