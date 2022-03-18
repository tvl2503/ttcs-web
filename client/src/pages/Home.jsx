import React from 'react'
import Helmet from '../components/Helmet'
import heroSilderData from '../assets/data/hero-silder'
import SwiperSlider from '../components/SwiperSlider'
const Home = () => {
  return (
    <Helmet title='Home'>
       {/* <HeroSlider data = {heroSilderData} /> */}
       <SwiperSlider data = {heroSilderData} />
    </Helmet>
  )
}

export default Home