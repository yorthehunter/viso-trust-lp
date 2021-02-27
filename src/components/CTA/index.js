import React from 'react'
import style from './styles.module.scss'
import PropTypes from 'prop-types'

const CTA = ({ className, children, size, variant, href, ...otherProps }) => {
  const classes = `${style[size]} ${style[variant]} ${className}`

  return (
    <a className={classes} href={href} {...otherProps}>
      {children}
    </a>
  )
}

CTA.propTypes = {
  size: PropTypes.string,
  href: PropTypes.string.isRequired,
  variant: PropTypes.string,
  children: PropTypes.node.isRequired,
}

CTA.defaultProps = {
  size: 'medium',
  variant: 'primary',
  className: null,
}

export default CTA
