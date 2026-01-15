import React from 'react'
import HeroSection from '../Component/HeroSection'
import ScrollingText from '../Component/ScrollingText'
import AboutUs from '../Component/AboutUs'
import ReviewsSection from '../Component/ReviewsSection'
import LoginPage from '../Component/LoginPage'
import Features from '../Component/Features'
import FloatingWhatsAppButton from '../Component/FloatingWhatsAppButton'
import BetaFileSection from '../Component/betaFileSection'

const Home = () => {
  return (
    <div>
        <HeroSection/>
        <FloatingWhatsAppButton/>
        <ScrollingText/>
        <Features/>
        <AboutUs/>
        <LoginPage/>
        {/* <BetaFileSection/> */}
        <ReviewsSection/>
    </div>
  )
}

export default Home