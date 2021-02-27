import React from 'react'
import style from './styles.module.scss'
import PropTypes from 'prop-types'

const Button = ({ children, size, variant, as, ...otherProps }) => (
  as === 'link' ?
    <a className={`${style.button} ${style[size]} ${style[variant]}`} {...otherProps}>
      {children}
    </a>
    :
    <button className={`${style.button} ${style[size]} ${style[variant]}`} {...otherProps}>
      {children}
    </button>
)

Button.propTypes = {
  size: PropTypes.string,
  variant: PropTypes.string,
  children: PropTypes.node.isRequired,
  as: PropTypes.string,
}

Button.defaultProps = {
  size: 'medium',
  variant: 'primary',
  as: 'button',
}

export default Button
