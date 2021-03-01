import React from 'react'
import TestimonialCard from './TestimonialCard'
import style from './styles.module.scss'
import cruise from '../logos/cruise.png'
import illumio from '../logos/illumio.png'

const Testimonials = () => {
  const testimonials = [
    {
      logo: cruise,
      body: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Orci metus aliquam euismod dictum fames. Nunc cras malesuada vivamus tortor quisque. Amet, id facilisis neque sed tempor. Egestas sem diam egestas cras.",
      author: "Jeff Goldblum, Security Engineer",
    },
    {
      logo: cruise,
      body: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Orci metus aliquam euismod dictum fames. Nunc cras malesuada vivamus tortor quisque. Amet, id facilisis neque sed tempor. Egestas sem diam egestas cras.",
      author: "Jeff Goldblum, Security Engineer",
    },
    {
      logo: illumio,
      body: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Orci metus aliquam euismod dictum fames. Nunc cras malesuada vivamus tortor quisque. Amet, id facilisis neque sed tempor. Egestas sem diam egestas cras.",
      author: "Jeff Goldblum, Security Engineer",
    },
    {
      logo: illumio,
      body: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Orci metus aliquam euismod dictum fames. Nunc cras malesuada vivamus tortor quisque. Amet, id facilisis neque sed tempor. Egestas sem diam egestas cras.",
      author: "Jeff Goldblum, Security Engineer",
    },
  ]

  return (
    <section className={style.testimonials}>
      {
        testimonials.map(testimonial => (
          <TestimonialCard logo={testimonial.logo} body={testimonial.body} author={testimonial.author} />
        ))
      }
    </section>
  )
}

export default Testimonials
