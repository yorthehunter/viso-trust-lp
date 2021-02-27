import React from 'react'
import style from './style.module.scss'
import heroImage from './landing-page-hero.png'
import CTA from '../CTA'

const LandingPage = () => {
  return (
    <main>
      <article className={style.heroModule}>
        <div className={style.content}>
          <header className={style.header}>
            <h1>Third party cyber risk at the speed of business.</h1>
            <h2>65% of public security breaches occur due to the failure of third parties to make good on their security commitments.</h2>
            <CTA size="large" variant="primary">Schedule a Demo</CTA>
          </header>
          <img className={style.heroImage} src={heroImage} alt="Demo screenshots of the VISO Trust app in action" />
        </div>
      </article>
    </main>
  )
}

export default LandingPage
