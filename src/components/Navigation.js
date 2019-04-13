import React from 'react'

import User from './User'

const Navigation = () => {
  return (
    <nav class="main-nav">
      <User />
      <ul class="main-nav__list">
        <li class="main-nav__item">
          <a href="/garbage" class="main-nav__link">
            {/* <svg class="main-nav__i.con">
              <use xlink:href="img/sprite.svg#icon-cup"></use>
            </svg> */}
            Déchets
          </a>
        </li>
        <li class="main-nav__item">
          <a href="/challenge" class="main-nav__link">
            {/* <svg class="main-nav__icon">
              <use xlink:href="img/sprite.svg#icon-medal"></use>
            </svg> */}
            Défi
          </a>
        </li>
        <li class="main-nav__item">
          <a href="/event" class="main-nav__link">
            {/* <svg class="main-nav__icon">
              <use xlink:href="img/sprite.svg#icon-calendar"></use>
            </svg> */}
            Événements
          </a>
        </li>
        <li class="main-nav__item">
          <a href="/info" class="main-nav__link">
            {/* <svg class="main-nav__icon">
              <use xlink:href="img/sprite.svg#icon-open-book"></use>
            </svg> */}
            Infos
          </a>
        </li>
      </ul>
    </nav>
  )
}

export default Navigation;