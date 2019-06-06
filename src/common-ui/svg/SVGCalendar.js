import React from 'react'

const SVGCalendar = ({width = 32, height = 32, className = 'svg'}) => 
  <svg className={className} xmlns="http://www.w3.org/2000/svg" width={width} height={height}  viewBox="0 0 480 480">
  <g stroke="none">
    <path d="M65 407 c-3 -7 -4 -87 -3 -177 l3 -165 28 -3 c19 -2 27 -9 27 -23 0 -12 7 -19 20 -19 13 0 20 7 20 20 0 18 7 20 80 20 73 0 80 -2 80 -20 0 -13 7 -20 20 -20 13 0 20 7 20 19 0 14 8 21 28 23 l27 3 0 175 0 175 -173 3 c-135 2 -174 0 -177 -11z m315 -137 l0 -110 -140 0 -140 0 0 110 0 110 140 0 140 0 0 -110z"/>
    <path d="M210 340 c0 -11 7 -37 15 -57 19 -45 20 -43 -15 -43 -23 0 -30 -4 -30 -20 0 -18 7 -20 61 -20 l62 0 -6 33 c-10 58 -46 127 -67 127 -13 0 -20 -7 -20 -20z"/>
  </g>
  </svg>

export default SVGCalendar
