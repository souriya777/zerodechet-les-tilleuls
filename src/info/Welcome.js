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
        backgnd='welcome'
      >
        <p>
          Découvrez notre application Zéro Déchet adaptée pour petits et grands. Optez pour un mode de vie éco-responsable 🙏
        </p>
      </WelcomeSlideItem>

      <WelcomeSlideItem 
        title='Pourquoi?'
        backgnd='why'
      >
        {/* <p>
          Vous vous êtes engagé dans notre aventure en commun.
        </p>
        <br /> */}
        <p>Rome ne s’étant pas construite en un jour, cette application (et les différents ateliers) vous aideront à changer vos habitudes tout en apprenant de nouveaux gestes 🌱
        </p>
      </WelcomeSlideItem>

      <WelcomeSlideItem 
        title='Quoi?'
        backgnd='what'
        >
        <p>
          Vous pourrez peser vos déchets en 1 clic, savoir tout de suite où vous en êtes dans votre défi, apprendre pleins d'astuces hyper pratiques, et surtout  échanger et rencontrer d'autres participants ❤️
        </p>
      </WelcomeSlideItem>

      <WelcomeSlideItem 
        title='Comment?'
        backgnd='how'
        >
        <p>
          Il suffit de vous connecter (ou de vous inscrire) et d'utiliser notre application 💡
        </p>
      </WelcomeSlideItem>
    </SlideList>
  </div>
)

export default Welcome