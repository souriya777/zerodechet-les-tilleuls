import React from 'react'
import Carousel from 'nuka-carousel'
import { PagingDots } from 'nuka-carousel'

import TutoSlideItem from './TutoSlideItem'

const TutoSlideList = () => (
  <ul>
    <Carousel
      enableKeyboardControls={true}
      transitionMode='scroll'
      vertical={true}
      renderCenterLeftControls={null}
      renderBottomCenterControls={null}
      renderCenterRightControls={props => <PagingDots {...props} />}
    >
      <TutoSlideItem 
        title='Bienvenue'
        txt='Découvrez notre application Zéro Déchet adaptée pour petits et grands. Optez pour un mode de vie éco-responsable.'
        backgnd='welcome'
      />

      <TutoSlideItem 
        title='Pourquoi?'
        txt='Lorem, ipsum dolor sit amet consectetur adipisicing elit. Sint, architecto eius'
        backgnd='why'
      />

      <TutoSlideItem 
        title='Quoi?'
        txt='Lorem, ipsum dolor sit amet consectetur adipisicing elit. Sint, architecto eius'
        backgnd='what'
      />

      <TutoSlideItem 
        title='Comment?'
        txt='Lorem, ipsum dolor sit amet consectetur adipisicing elit. Sint, architecto eius'
        backgnd='how'
      />

    </Carousel>
  </ul>
)

export default TutoSlideList