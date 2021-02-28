import React from 'react'
import style from './AboutUs.module.scss'

const AboutUsMember = ({ image, imageAlt, name, role, description }) => (
  <article className={style.aboutUsMember}>
    <img src={image} alt={imageAlt} className={style.image} />
    <h3 className={style.name}>{name}</h3>
    <h4 className={style.role}>{role}</h4>
    <p className={style.description}>{description}</p>
  </article>
)

export default AboutUsMember
