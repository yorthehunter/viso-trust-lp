import React from 'react'
import style from './Footer.module.scss'
import logo from './logos/logo-white.png'

const Footer = () => {
  return (
    <footer className={style.footer}>
      <img src={logo} alt="logo" className={style.logo} />
      <ul className={style.links}>
        <li><a href="https://app.visotrust.com/">Log In</a></li>
        <li><a href="https://calendly.com/visotrust-team/product-demo">Schedule a Demo</a></li>
        <li><a href="#">Contact Us</a></li>
      </ul>
      <h3 className={style.tagline}>Relax. Your next third party due diligence is already done.</h3>
    </footer>
  )
}

export default Footer
