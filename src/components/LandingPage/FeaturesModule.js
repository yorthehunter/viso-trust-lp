import React from 'react'
import CTA from '../CTA'
import style from './featuresModule.module.scss'
import SimpleCarousel from 'simple-react-carousel';
import product1 from './visotrust-product-shot-1.png'
import product2 from './visotrust-product-shot-2.png'
import product3 from './visotrust-product-shot-3.png'

const FeaturesModule = () => (
  <section className={style.featuresModule}>
    <div className={style.content}>
      <header className={style.header}>
        <h2>VISO Trust Features</h2>
      </header>
      <section className={style.features}>
        <h3>Directly Engage Third Parties</h3>
        <ul>
          <li>Effortlessly interact with thousands of third parties</li>
          <li>Third parties can fulfill assessment requests in minutes</li>
          <li>Continually engaging third parties keeps data fresh</li>
        </ul>
        <h3>Accurate Risk Intelligence via Curated AI</h3>
        <ul>
          <li>Leveraging source documents and audit reports delivers accurate results</li>
          <li>An expert team curates assessments using AI and document heuristics</li>
          <li>Risk assessments are delivered at the speed of business</li>
        </ul>
      </section>
      <section className={style.productCarousel}>
        <SimpleCarousel itemFit="contain" indicatorOptions={{ shape: 'circle' }}>
          <img src={product1} alt="Screenshot of the app"/>
          <img src={product2} alt="Screenshot of the app"/>
          <img src={product3} alt="Screenshot of the app"/>
        </SimpleCarousel>
      </section>
      <section className={style.ctaContainer}>
        <CTA size="large" variant="primary" href="https://calendly.com/visotrust-team/product-demo">Schedule a Demo</CTA>
      </section>
    </div>
  </section>
)

export default FeaturesModule
