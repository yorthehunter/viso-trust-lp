import React from 'react'
import style from './styles.module.scss'

const TestimonialCard = ({ logo, body, author }) => {
  return (
    <article className={style.testimonialCard}>
      {
        logo &&
          <img src={logo} className={style.cardLogo} alt="" />
      }
      <p className={style.cardBody}>{body}</p>
      <footer className={style.cardAuthor}>{author}</footer>
    </article>
  )
}

export default TestimonialCard
