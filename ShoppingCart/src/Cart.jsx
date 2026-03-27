import React from 'react'
import {useSelector} from 'react-redux'
import { useDispatch } from 'react-redux'
import { deleteFromCart } from './produceSlice'
const Cart = () => {
    const items=useSelector(state=>state.product.items)
  return (
    <section className=''>
        <ul>
            { items.length>0 &&  (<> 
            {items.map(item=><li className='flex items-center justify-evenly'
             key={item.id}><CartItem image={item.image} quantity={item.quantity} id={item.id} name={item.name} price={item.price}/></li>)}
             <h2><span>Items</span>Total :{ items
             .map(products=>products.quantity *products.price)
             .reduce((a,c)=>a+c,0)}</h2>
             <button>Checkout</button></>)
             }

        </ul>
    </section>
  )
}

export default Cart
const CartItem =({id,quantity,name,image,price})=>{
    const dispatch=useDispatch()
    return (
        <>
        <div className='flex items-centers jusfify-evenly'>
<div className='max-w-10 flex '><img src={image} alt="image here" /></div>
            <div className=''><h2>{name}</h2>
                <div className='flex space-x-5'><span>x{quantity}</span><span>{price}</span></div> </div></div>
<button onClick={()=>dispatch(deleteFromCart(id))}>Remove</button>
                    </>
    )

}