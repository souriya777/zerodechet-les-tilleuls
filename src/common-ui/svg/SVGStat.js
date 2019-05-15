import React from 'react'

const SVGStat = ({width = 32, height = 32, className = 'svg'}) => 
  <svg className={className} xmlns="http://www.w3.org/2000/svg" width={width} height={height}  viewBox="0 0 600 600">
    <g stroke="none">
      <path d="M50 346 c0 -198 0 -199 77 -194 l48 3 3 183 2 182 -65 0 -65 0 0 -174z"/>
      <path d="M232 378 l3 -143 60 0 60 0 3 143 3 142 -66 0 -66 0 3 -142z"/>
      <path d="M410 301 c0 -241 -3 -231 65 -231 68 0 65 -10 65 231 l0 219 -65 0 -65 0 0 -219z"/>
    </g>
  </svg>

export default SVGStat
