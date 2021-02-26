import React from 'react'
import style from './style.module.scss'
import heroImage from './landing-page-hero.png'

const LandingPage = () => {
  return (
    <main>
      <article className={style.heroModule}>
        <div className={style.content}>
          <header>
            <h1>Third party cyber risk at the speed of business.</h1>
            <h2>65% of public security breaches occur due to the failure of third parties to make good on their security commitments.</h2>
            <button>Schedule a Demo</button>
          </header>
          <img src={heroImage} alt="Demo screenshots of the VISO Trust app in action" />
        </div>
      </article>
    </main>
  )
}

export default LandingPage