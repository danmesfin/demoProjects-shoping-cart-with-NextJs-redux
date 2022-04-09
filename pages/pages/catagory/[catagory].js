import { useRouter } from 'next/router'
import Image from "next/image";
import SingleItem from '../../components/SingleItem';
//import SingleItem from '../components/SingleItem';

export const Cat = () => {
    const router = useRouter()
    const { catagory } = router.query

    





    return (

        {catagory}
    ) ;
}



export async function getServerSideProps({params}) {
    // Instead of the file system,
    // fetch post data from an external API endpoint 
    
    
    const base_url = `https://fakestoreapi.com/products/category/${params.catagory}`;
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

                                            <SingleItem item={item} key={item}></SingleItem>
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