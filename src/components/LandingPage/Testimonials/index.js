import React from 'react'
import CTA from '../../CTA'
import Testimonials from './Testimonials'
import style from './styles.module.scss'

const TestimonialsModule = () => (
  <section className={style.testimonialsModule}>
    <div className={style.content}>
      <header className={style.header}>
        <h2>Easy, actionable, and automated</h2>
        <p className={style.description}>
          We built a platform for a rationalized approach to vendor security due diligence that delivers the depth, and accuracy necessary to make sound security decisions at the speed of business.
        </p>
        <h3>Here’s What Our Clients Are Saying</h3>
      </header>
    </div>
    <Testimonials />
    <footer className={style.ctaContainer}>
      <CTA size="large" variant="secondary" href="https://calendly.com/visotrust-team/product-demo">Schedule a Demo</CTA>
    </footer>
  </section>
)

export default TestimonialsModule
