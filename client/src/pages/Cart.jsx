import React from 'react'
import Breadcrumb from '../components/Breadcrumb'
import Helmet from '../components/Helmet'

const Cart = () => {
  return (
    <Helmet title = "Cart">
      <Breadcrumb title = {"Shopping Cart"} />
    </Helmet>
  )
}

export default Cart