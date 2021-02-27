import React from 'react'
import CTA from '../CTA'
import style from './heroModule.module.scss'
import heroImage from './landing-page-hero.png'

const HeroModule = () => (
  <section className={style.heroModule}>
    <div className={style.content}>
      <header className={style.header}>
        <h1>Third party cyber risk at the speed of business.</h1>
        <h2>65% of public security breaches occur due to the failure of third parties to make good on their security commitments.</h2>
        <CTA size="large" variant="primary" href="https://calendly.com/visotrust-team/product-demo">Schedule a Demo</CTA>
      </header>
      <img className={style.heroImage} src={heroImage} alt="Demo screenshots of the VISO Trust app in action" />
    </div>
  </section>
)

export default HeroModule
