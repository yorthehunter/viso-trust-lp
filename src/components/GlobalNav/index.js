import React from 'react'
import style from './styles.module.scss'
import logo from './logo-white.png'

const GlobalNav = () => (
  <nav className={style.globalNav}>
    <div className={style.content}>
      <a href="/" className={style.logo}>
        <img src={logo} alt="Logo" />
      </a>
      <ul className={style.navItems}>
        <li>
          <a href="#" className={style.navLink}>Log In</a>
        </li>
        <li>
          <a href="#" className={style.navLink}>Button</a>
        </li>
      </ul>
    </div>
  </nav>
)

export default GlobalNav
