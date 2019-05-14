import React from 'react'
import Carousel from 'nuka-carousel'
import { PagingDots } from 'nuka-carousel'

import TutoSlideItem from './TutoSlideItem'

const TutoSlideList = () => (
  <ul>
    <Carousel
      autoplay={false}
      autoplayInterval={8000}
      enableKeyboardControls={true}
      transitionMode='scroll'
      vertical={true}
      wrapAround={true}
      autoGenerateStyleTag={false}
      renderCenterLeftControls={null}
      renderBottomCenterControls={null}
      renderCenterRightControls={props => <PagingDots {...props} />}
    >
      <TutoSlideItem 
        title='Bienvenue'
        txt='Découvrez notre application Zéro Déchet adaptée pour petits et grands. Optez pour un mode de vie éco-responsable.'
        background='welcome'
      />

      <TutoSlideItem 
        title='Pourquoi?'
        txt='Lorem, ipsum dolor sit amet consectetur adipisicing elit. Sint, architecto eius'
        background='why'
      />

      <TutoSlideItem 
        title='Quoi?'
        txt='Lorem, ipsum dolor sit amet consectetur adipisicing elit. Sint, architecto eius'
        background='what'
      />

      <TutoSlideItem 
        title='Comment?'
        txt='Lorem, ipsum dolor sit amet consectetur adipisicing elit. Sint, architecto eius'
        background='how'
      />

    </Carousel>
  </ul>
)

export default TutoSlideList