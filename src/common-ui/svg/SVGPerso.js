import React from 'react'

const SVGPerso = ({width = 32, height = 32, className = 'svg'}) => 
  <svg className={className} xmlns="http://www.w3.org/2000/svg" width={width} height={height}  viewBox="0 0 480 480" preserveAspectRatio="xMidYMid meet">
    <g stroke="none">
      <path d="M44 387 c-2 -7 -3 -78 -2 -157 l3 -145 195 0 195 0 0 155 0 155 -193 3 c-152 2 -194 0 -198 -11z m356 -147 l0 -120 -160 0 -160 0 0 120 0 120 160 0 160 0 0 -120z"/>
      <path d="M120 301 c0 -21 19 -31 60 -31 41 0 60 10 60 31 0 17 -8 19 -60 19 -52 0 -60 -2 -60 -19z"/>
      <path d="M280 280 c0 -17 7 -20 40 -20 33 0 40 3 40 20 0 17 -7 20 -40 20 -33 0 -40 -3 -40 -20z"/>
      <path d="M144 226 c-3 -8 -4 -25 -2 -38 2 -19 9 -23 38 -23 33 0 35 2 35 35 0 32 -3 35 -33 38 -21 2 -34 -2 -38 -12z"/>
      <path d="M280 200 c0 -17 7 -20 40 -20 33 0 40 3 40 20 0 17 -7 20 -40 20 -33 0 -40 -3 -40 -20z"/>
    </g>
  </svg>

export default SVGPerso
