import React from 'react'

const SVGHuman = ({width = 24, height = 24, className = 'svg'}) => 
  <svg className={className} xmlns="http://www.w3.org/2000/svg" width={width} height={height}  viewBox="0 0 500 500" preserveAspectRatio="xMidYMid meet">
  <g stroke="none">
    <path d="M197 463 c-4 -3 -7 -34 -7 -69 0 -54 -2 -62 -21 -67 -20 -5 -21 -11 -17 -71 4 -73 28 -110 76 -119 34 -7 87 15 101 41 17 32 14 139 -4 150 -10 5 -17 31 -22 75 l-6 67 -47 0 c-26 0 -50 -3 -53 -7z"/>
    <path d="M206 104 c-19 -18 -20 -38 -6 -65 12 -22 68 -27 88 -7 15 15 15 61 0 76 -17 17 -64 15 -82 -4z"/>
    </g>
  </svg>

export default SVGHuman
