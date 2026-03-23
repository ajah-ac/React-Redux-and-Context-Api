import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import {Provider} from 'react-redux'
import App from './App.jsx'
import {configureStore} from '@reduxjs/toolkit'
import CounterReducer from './counter.js'
const store=configureStore({
  reducer:{
counter:CounterReducer
  }
})

createRoot(document.getElementById('root')).render(
  <StrictMode>

<Provider store={store}>
      <App />

  </Provider>  </StrictMode>,
)
