import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import '../node_modules/bootstrap/dist/js/bootstrap.bundle'
import './index.css'
import { BrowserRouter } from 'react-router-dom'
import { Provider } from 'react-redux'
import store from "./store.js"
import cartConfig from './config/initialCartConfig.js'

// if(!!!JSON.parse(window.localStorage.getItem("cart"))){
//   window.localStorage.setItem("cart", JSON.stringify(cartConfig));
// }

ReactDOM.createRoot(document.getElementById('root')).render(
  <BrowserRouter>
    <Provider store={store}>
      <App />
    </Provider>
  </BrowserRouter>,
)
