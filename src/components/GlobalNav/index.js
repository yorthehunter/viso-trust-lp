import React from 'react'
import style from './styles.module.scss'
import logo from './logo-white.png'
import CTA from '../CTA'

const GlobalNav = () => (
  <nav className={style.globalNav}>
    <div className={style.content}>
      <div>
        <a href="/" className={style.logo}>
          <img src={logo} alt="Logo" />
        </a>
      </div>
      <ul className={style.navItems}>
        <li className={style.navItem}>
          <a href="https://app.visotrust.com/" className={style.navLink}>Log In</a>
        </li>
        <li className={style.navItem}>
          <CTA size="small" variant="primary" href="https://calendly.com/visotrust-team/product-demo">Schedule a Demo</CTA>
        </li>
      </ul>
    </div>
  </nav>
)

export default GlobalNav
