import React, { useEffect, useState } from 'react'
import axios from 'axios';
import { useQuery } from '@tanstack/react-query';
import ProductCard from '../../Components/ProductCard/ProductCard';
import Styles from './Products.module.css'

export default function Products() {
  const [allProducts, setAllProducts] = useState([]);

  const { isPending: isProductsPending, error: productsError, data: productsData } = useQuery({
    queryKey: ["productsData"],
    queryFn: async () => {
      try {
        const res = await axios.get(`${process.env.REACT_APP_BACKEND_ENDPOINT}/product`);
        setAllProducts(res.data);
        console.log(res.data);
        return res.data;

      } catch (error) {
        console.error("Error fetching products:", error);
        throw error; // Re-throw the error to let React Query handle it
      }
    },
  });

  useEffect(()=>{
    
  },[])

  return (
    <>
    {
      productsData ? (
        <main className={Styles.productsPageMain}>
          {productsData.map((element, index)=>{
             return <ProductCard key={index} element={element}/>
          })}
        </main>
      ):(
        isProductsPending ? (
          <p>loading...</p>
        ) : (
          productsError ? (
            <p>error in products</p>
          ) : (
            <p>not to execute...</p>
          )
        )
        )
    }
    </>
  )
}
