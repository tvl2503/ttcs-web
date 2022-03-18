import React from 'react'
import Breadcrumb from '../components/Breadcrumb'
import Helmet from '../components/Helmet'

const Products = () => {
  return (
    <Helmet title='product'>
      <Breadcrumb title = {'Products'} />
    </Helmet>
  )
}

export default Products