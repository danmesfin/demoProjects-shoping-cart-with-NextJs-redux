import Image from "next/image";

export async function getServerSideProps() {
    // Instead of the file system,
    // fetch post data from an external API endpoint 
    
    
    const base_url = 'https://fakestoreapi.com/products?limit=12';
    const res = await fetch(base_url)
    const data = await res.json()
   console.log(base_url);

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

const Post = ({ data }) => {


    const results = data;
    console.log(results)

    return (
        <div>
            <section className="py-5 bg-sec">
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

                                                <div className='card col-md-3 m-0 px-1 mx-00 hover' key={item.id}>
                                                    <Image className='img-fluid py-2' src={item.image} alt="..." width="100%" height={250} objectFit='contain' />
                                                    <div className='card-body fw-bold'>
                                                        <div className='card-title  text-600 text-truncate me-2'><strong>{item.title}</strong></div>
                                                        <span>${item.price}</span>
                                                    </div>
                                                    <button onClick={() => onAddtoCartHandler(item)} className="btn btn-warning">Add To Cart</button>
                                                </div>
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
export default Post;