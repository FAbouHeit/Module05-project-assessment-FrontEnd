import { useQuery } from '@tanstack/react-query';
import React, { useContext, useState } from 'react'
import { AuthContext } from "../../Context/AuthContext.js";
import Styles from './ProductDetails.module.css'
import axios from 'axios';
import { useParams } from 'react-router-dom';
import image from '../../Images/image.png'

export default function ProductDetails() {

    const { slug } = useParams();
    console.log("slug: ", slug)
    const [product, setProduct] = useState({});
    const { user } = useContext(AuthContext);

    const { isPending: isProductPending, error: productError, data: productData } = useQuery({
        queryKey: ["OneProductData"],
        queryFn: async () => {
          try {
            const res = await axios.get(`${process.env.REACT_APP_BACKEND_ENDPOINT}/product/${slug}`);
            setProduct(res.data);
            console.log(res.data);
            return res.data;
    
          } catch (error) {
            console.error("Error fetching products:", error);
          }
        },
      });


  return (
    <>
    {
      productData ? (
        <main>
            <section className={Styles.productPageMain}>
                <img src={image} width={300}/>
                <ul className={Styles.infoList}>
                    <li>{product.title}</li>
                    <li>{product.price}</li>
                    <li>{product.description}</li>
                </ul>
            </section>
            {user}
            <section></section>
        </main>
      ):(
        isProductPending ? (
          <p>loading...</p>
        ) : (
          productError ? (
            <p>error in one product</p>
          ) : (
            <p>not to execute...</p>
          )
         )
        )
    }
    </>
  )
}
