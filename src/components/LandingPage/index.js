import React from 'react'
import HeroModule from './HeroModule'
import TestimonialsModule from './TestimonialsModule'
import FeaturesModule from './FeaturesModule'
import AboutUsModule from './AboutUsModule'
import Footer from './Footer'

const LandingPage = () => {
  return (
    <main>
      <HeroModule />
      <TestimonialsModule />
      <FeaturesModule />
      <AboutUsModule />
      <Footer />
    </main>
  )
}

export default LandingPage
