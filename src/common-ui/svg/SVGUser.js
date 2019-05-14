import React from 'react'

const SVGUser = ({width = 32, height = 32, className = 'svg'}) => 
  <svg className={className} xmlns="http://www.w3.org/2000/svg" width={width} height={height} viewBox="0 0 640 640" preserveAspectRatio="xMidYMid meet">
  <g stroke="none">
    <path d="M120 507 c0 -40 46 -117 83 -136 l26 -14 -24 -29 c-20 -24 -25 -40 -25 -89 0 -53 3 -63 34 -96 30 -33 39 -37 92 -40 36 -2 69 1 84 9 70 37 95 157 45 216 l-24 29 26 14 c37 19 83 96 83 136 0 29 -3 33 -25 33 -19 0 -25 -5 -25 -22 0 -64 -76 -128 -150 -128 -74 0 -150 64 -150 128 0 17 -6 22 -25 22 -22 0 -25 -4 -25 -33z m265 -202 c19 -18 25 -35 25 -65 0 -56 -34 -90 -90 -90 -56 0 -90 34 -90 90 0 56 34 90 90 90 30 0 47 -6 65 -25z"/>
    </g>
  </svg>

export default SVGUser
