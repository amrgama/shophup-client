import React from 'react'
import HeroSection from '../../components/hero-section/HeroSection'
import Features from '../../components/features/Features'
import Brands from '../../components/brands/Brands'
import TopSelling from '../../components/top-selling/TopSelling'
import FeaturedProducts from '../../components/featured-products/FeaturedProducts'
import ExplorPopularCat from '../../components/explor-popular-categories/ExplorPopularCat'
import LatestAndGreatestTech from '../../components/latest-and-greatest-tech/LatestAndGreatestTech'
import ElectronicProducts from '../../components/electronic-products/ElectronicProducts'
import RecentViewed from '../../components/recent-viewed/RecentViewed'

const Home = () => {
  return (
    <div id="home">
        <HeroSection />
        <Features />
        <Brands />
        <TopSelling />
        <FeaturedProducts />
        <ExplorPopularCat />
        <ElectronicProducts />
        <LatestAndGreatestTech />
        <RecentViewed />
    </div>
  )
}

export default Home