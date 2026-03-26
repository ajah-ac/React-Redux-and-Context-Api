import React from 'react'
import { productList } from './Products'

const ProductList = () => {
    return (
        <ul className='flex flex-wrap gap-5 m-auto max-w-6xl p-5 '>
            {productList
            .map(product => <li key={product.id} className='flex wrap max-w-50 shadow-md flex-col p-5'> <Product name={product.name} image={product.image} price={product.price} /></li>)}


        </ul>
    )
}

export default ProductList
const Product = ({ name, price, image }) => {
    return (
        <>
            <div className='max-w-40 flex '><img src={image} alt="image here" /></div>
            <div className=''><h2>{name}</h2>
                <span>{price}</span></div>
            <button className='border-1 rounded-xl m-2' >Add to cart</button> </>
    )
}

