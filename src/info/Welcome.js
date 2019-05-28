import React from 'react'

import Logo from '../common-ui/Logo'
import SlideList from '../common-ui/SlideList'
import WelcomeSlideItem from './WelcomeSlideItem'

const Welcome = () => (
  <div className='welcome'>

    <div className='welcome__logo'>
      <Logo />
    </div>

    <SlideList>
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
    </SlideList>
  </div>
)

export default Welcome