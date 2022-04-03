 
 import { NextApiRequest, NextApiResponse } from "next";


 export async function getServerSideProps() {
    // Instead of the file system,
    // fetch post data from an external API endpoint
    const res = await fetch('https://fakestoreapi.com/products?limit=5')
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

 export default async function getData(req, res)
{


  res.json({data});
}