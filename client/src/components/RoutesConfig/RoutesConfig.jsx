import React from 'react'
import Contact from '../../pages/Contact'
import Home from '../../pages/Home'
import Products from '../../pages/Products'
import About from '../../pages/About'
import Cart from '../../pages/Cart'
import { HOME_PAGE, ABOUT_US, PRODUCT, CONTACT, CART, LOGIN_PAGE, REGISTER_PAGE} from '../../constants/routes'
import Login from '../../pages/Auth/Login'
import Register from '../../pages/Auth/Register'
const Layout = [
  {
    path: HOME_PAGE,
    element : <Home/>
  },
  {
    path: PRODUCT ,
    element :<Products/>
  },
  {
    path: ABOUT_US ,
    element :<About/>
  },
  {
    path: CONTACT ,
    element :<Contact/>
  },
  {
      path: CART,
      element: <Cart />
  },
  {
    path: LOGIN_PAGE,
      element: <Login />
  },
  {
    path: REGISTER_PAGE,
    element: <Register />
  }
]

export default Layout