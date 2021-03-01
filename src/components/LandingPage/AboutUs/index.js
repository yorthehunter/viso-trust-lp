import React from 'react'
import style from './styles.module.scss'
import AboutUsMember from './AboutUsMember'
import paul from '../images/visotrust-paul-valente.png';
import russ from '../images/visotrust-russell-sherman.png';

const AboutUsModule = () => {
  return (
    <section className={style.aboutUs}>
      <div className={style.content}>
        <header className={style.header}>
          <h2>About VISO Trust</h2>
          <p className={style.description}> VISO Trust is a social due diligence network powered by AI, backed by people you can count on.
          </p>
        </header>
        <section className={style.members}>
          <AboutUsMember
            image={paul}
            name="Paul Valente"
            role="CEO"
            description="Transformational executive, team builder, product and technology innovator, security thought leader"
          />
          <AboutUsMember
            image={russ}
            name="Russell Sherman"
            role="CTO"
            description="Technologist, team builder, security product innovator in highly regulated technology companies"
          />
        </section>
      </div>
    </section>
  )
}

export default AboutUsModule
