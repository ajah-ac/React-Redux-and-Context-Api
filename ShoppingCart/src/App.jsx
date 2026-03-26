import { useState } from 'react'

import './output.css'
import ProductList from './ProductList'
import Cart from './Cart'
function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <h1 className='bg-green-100'>hello</h1>
    <Cart/>
    <ProductList/>
      
    </>
  )
}

export default App
