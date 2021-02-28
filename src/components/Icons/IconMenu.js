import React from 'react'
import PropTypes from 'prop-types'

const IconMenu = ({ size, color }) => {
  return (
    <svg width={size} height={size} viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
      <rect x="6" y="10" width="36" height="4" rx="2" fill={color}/>
      <rect x="6" y="22" width="36" height="4" rx="2" fill={color}/>
      <rect x="6" y="34" width="36" height="4" rx="2" fill={color}/>
    </svg>
  )
}

IconMenu.propTypes = {
  size: PropTypes.string,
  color: PropTypes.string,
}

IconMenu.defaultProps = {
  size: "32",
  color: "#000000",
}


export default IconMenu


