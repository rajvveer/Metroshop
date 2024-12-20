import React from 'react'
import Header from "../components/Layout/Header";
import Categories from "../components/Route/Categories/Categories";
import BestDeals from "../components/Route/BestDeals/BestDeals";
import FeaturedProduct from "../components/Route/FeaturedProduct/FeaturedProduct";
import Events from "../components/Events/Events";
import Footer from "../components/Layout/Footer";
import HeroSection from '../components/Route/Hero/Hero2';

const HomePage = () => {
  return (
    <div>
        <Header activeHeading={1} />
        <HeroSection />
        <Categories />
        <BestDeals />
        <Events />
        <FeaturedProduct />
        <Footer />
    </div>
  )
}

export default HomePage