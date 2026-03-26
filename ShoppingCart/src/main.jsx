import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './output.css'
import App from './App.jsx'
import {configureStore} from '@reduxjs/toolkit'
import {Provider} from 'react-redux'
import productReducer from './produceSlice.js'
const store=configureStore({
  reducer:{
product:productReducer
  }
})
createRoot(document.getElementById('root')).render(
  <StrictMode>

    <Provider store={store}>
      <App />
    </Provider>
  </StrictMode>,
)
