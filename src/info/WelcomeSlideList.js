import React from 'react'
import Carousel from 'nuka-carousel'
import { PagingDots } from 'nuka-carousel'

import WelcomeSlideItem from './WelcomeSlideItem'

const WelcomeSlideList = () => (
  <ul>
    <Carousel
      enableKeyboardControls={true}
      transitionMode='scroll'
      vertical={true}
      renderCenterLeftControls={null}
      renderBottomCenterControls={null}
      renderCenterRightControls={props => <PagingDots {...props} />}
    >
      <WelcomeSlideItem 
        title='Bienvenue'
        txt='Découvrez notre application Zéro Déchet adaptée pour petits et grands. Optez pour un mode de vie éco-responsable.'
        backgnd='welcome'
      />

      <WelcomeSlideItem 
        title='Pourquoi?'
        txt='Lorem, ipsum dolor sit amet consectetur adipisicing elit. Sint, architecto eius'
        backgnd='why'
      />

      <WelcomeSlideItem 
        title='Quoi?'
        txt='Lorem, ipsum dolor sit amet consectetur adipisicing elit. Sint, architecto eius'
        backgnd='what'
      />

      <WelcomeSlideItem 
        title='Comment?'
        txt='Lorem, ipsum dolor sit amet consectetur adipisicing elit. Sint, architecto eius'
        backgnd='how'
      />

    </Carousel>
  </ul>
)

export default WelcomeSlideList