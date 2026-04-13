import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.tsx'
import { configureStore } from '@reduxjs/toolkit'
import { Provider } from 'react-redux'
import CounterReducer from './counterSlice.ts'
const store=configureStore({
  reducer:{
counter:CounterReducer
  }
})
export type RootState=ReturnType<typeof store.getState>
createRoot(document.getElementById('root')!).render(
  <Provider store={store}>
    <App />
  </Provider>,
)
