// import React from 'react'
import FeaturedProduct from '../../components/FeaturedProduct/FeaturedProduct'
import Slider from '../../components/Slider/Slider'
import Categories from "../../components/Categories/Categories"
import "./Home.scss"
import Contacts from '../../components/Contacts/Contacts'
const Home = () => {
  return (
    <div className="home">
      <Slider/>
      <FeaturedProduct type="Featured"/>
      <Categories/>
      <FeaturedProduct type="Trending"/>
      <Contacts/>
    </div>
  )
}

export default Home