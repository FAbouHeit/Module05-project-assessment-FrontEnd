import React from 'react'
import Styles from './ProductCard.module.css'
import image from '../../Images/image.png'
import { Link } from 'react-router-dom'

export default function ProductCard({element}) {
  return (
    <Link 
         to={`/products/${element.slug}`}
         className={Styles.linkStyles}
        >
    <div className={Styles.productCardContainer}>
        <img src={image} alt="product image" height={200}/>
        <p className={Styles.productName}>{element.title}</p>
    </div>
    </Link>
  )
}
