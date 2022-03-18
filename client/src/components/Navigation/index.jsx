import React, { useRef, useEffect } from 'react'
import { Link, useLocation } from 'react-router-dom'
import logo from "../../assets/images/logo_ptit.png"
import 'boxicons'

const mainNav = [
    {
        display: 'Home',
        path: '/'
    },
    {
        display: 'Products',
        path: '/product'
    },
    {
        display: 'About us',
        path: '/about-us'
    },
    {
        display: 'Contact',
        path: '/contact'
    }
]
const Navigation = (props) => {

    const {pathname} = useLocation()
    const activeNav = mainNav.findIndex(e => e.path === pathname)
    const menuLeft = useRef(null)
    const menuToggle = () => menuLeft.current.classList.toggle('active')
    return (
        <div className='header'>
            <div className="container">

                <div className="header__menu">

                    <div className="header__menu__mobile-toggle" onClick={menuToggle}>
                        <box-icon name='menu'></box-icon>
                    </div>
                    <div className="header__logo">
                        <Link to="/">
                            <img src={logo} alt = "logo" />
                        </Link>
                    </div>
                    <div className="header__menu__left" ref={menuLeft} >
                        <div className="header__menu__left__close" onClick={menuToggle}>
                            <box-icon name='chevron-left' ></box-icon>
                        </div>
                        {
                            mainNav.map((item, index) => (
                                <div key={index} 
                                className={`header__menu__item  header__menu__left__item ${index === activeNav ? 'active' : ''} `}
                                onClick = {menuToggle} >
                                    <Link to={item.path}>
                                        <span>{item.display}</span>
                                    </Link>
                                </div>
                            ))
                        }
                    </div>
                    <div className="header__menu__right">
                        <div className="header__menu__item header__menu__right__item">
                            <box-icon name='search' onClick = {props.onShowSearch} ></box-icon>
                        </div>
                        <div className="header__menu__item header__menu__right__item">
                            <Link to="/cart">
                                <box-icon name='shopping-bag' ></box-icon>
                            </Link>
                        </div>
                        <div className="header__menu__item header__menu__right__item">
                            <Link to = "/login"><box-icon name='user'></box-icon></Link> 
                        </div>
                    </div>

                </div>
            </div>
        </div>
    )
}

export default Navigation