import {Routes, Route} from "react-router-dom"
import './App.css'
import MainLayout from './components/layouts/main-layout/MainLayout'
import Home from './pages/home/Home'
import Login from './pages/auth/Login'
import SignUp from "./pages/auth/SingUp"
import Shop from './pages/shop/Shop'
import SingleProduct from './pages/single-product/SingleProduct'
import Cart from './pages/cart/Cart'
import Order from "./pages/order/Order"
import AccountLayout from './components/layouts/account-layout/AccountLayout'
import Account from './pages/account'
import Address from './pages/address'
import Orders from './pages/orders'
import Invoices from './pages/invoices'
import Wishlist from './pages/wishlist'
import AccountForm from "./components/account/AccountForm"
import PasswordForm from "./components/account/PasswordForm"
import BillingAddress from "./components/address/billing-address"
import ShippingAddress from "./components/address/shipping-address"
import About from "./pages/about"
import Contact from "./pages/contact"

function App() {

  return (
    <div className='d-flex flex-column bg-white min-vh-100'>
      <Routes>
        <Route index path="/sign-in" element={<Login />}></Route>
        <Route index path="/sign-up" element={<SignUp />}></Route>
        <Route path='/' element={<MainLayout />}>
          <Route index element={<Home />}></Route>
          <Route path='my-account' element={<AccountLayout />}>
            <Route path="edit" element={<Account />}>
              <Route path="profile-information" element={<AccountForm />}/>
              <Route path="password" element={<PasswordForm />}/>
            </Route>
            <Route path="edit-address">
              <Route path="billing" element={<BillingAddress />}/>
              <Route path="shipping" element={<ShippingAddress />}/>
            </Route>
            <Route path='address' element={<Address />} />
            <Route path='orders' element={<Orders />} />
            <Route path='invoices' element={<Invoices />} />
            <Route path='wishlist' element={<Wishlist />} />
          </Route>
          <Route path='shop' element={<Shop />}></Route>
          <Route path='shop/single-product/:id' element={<SingleProduct />}></Route>
          <Route path='order' element={<Order />}></Route>
          <Route path='cart' element={<Cart />}></Route>
          <Route path='about' element={<About />} />
          <Route path='contact' element={<Contact />} />
        </Route>
      </Routes>
    </div>
  )
}

export default App
