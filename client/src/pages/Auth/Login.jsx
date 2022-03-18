import React from 'react'
import Breadcrumb from '../../components/Breadcrumb'
import Helmet from '../../components/Helmet'
import Button from '../../components/Button'
const Login = () => {
  return (
    <Helmet title='Login'>
      <Breadcrumb title = {"Login"} />
      <div className="form--content">
        <div className="container">
          <form action="">
            <div className="form--title">
              <h1>Login</h1>
            </div>
            <div className="form--input">
              <input type="text" placeholder='Your Email' />
            </div>
            <div className="form--input">
              <input type="password" placeholder='Password' />
            </div>
            <div className="login--footer">
              
            </div>
            <div className="form-submit">
              <Button className = "btn">Login</Button>
            </div>
            
          </form>
        </div>
      </div>
    </Helmet>
  )
}

export default Login