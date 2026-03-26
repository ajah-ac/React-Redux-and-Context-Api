import React from 'react'
import {useSelector} from 'react-redux'
const Cart = () => {
    const items=useSelector(state=>state.product.items)
  return (
    <>
        <ul>
            { items &&  items.map(item=><li key={item.id}><CartItem image={item.image} quantity={item.quantity} name={item.name} price={item.price}/></li>)}
        </ul>
    </>
  )
}

export default Cart
const CartItem =({quantity,name,image,price})=>{
    return (
        <>
        <div className='flex'>
<div className='max-w-10 flex '><img src={image} alt="image here" /></div>
            <div className=''><h2>{name}</h2>
                <span>{price}</span> <span>{quantity}</span></div></div>

                    </>
    )

}