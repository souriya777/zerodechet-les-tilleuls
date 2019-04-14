import React from 'react'

import User from './User'

const Navigation = () => {
  return (
    <nav className='main-nav'>
      <User />
      <ul className='main-nav__list'>
        <li className='main-nav__item'>
          <a href="/garbage" className='main-nav__link'>
            {/* <svg className='main-nav__i.con'>
              <use xlink:href="img/sprite.svg#icon-cup'></use>
            </svg> */}
            Déchets
          </a>
        </li>
        <li className='main-nav__item'>
          <a href="/challenge" className='main-nav__link'>
            {/* <svg className='main-nav__icon'>
              <use xlink:href="img/sprite.svg#icon-medal'></use>
            </svg> */}
            Défi
          </a>
        </li>
        <li className='main-nav__item'>
          <a href="/event" className='main-nav__link'>
            {/* <svg className='main-nav__icon'>
              <use xlink:href="img/sprite.svg#icon-calendar'></use>
            </svg> */}
            Événements
          </a>
        </li>
        <li className='main-nav__item'>
          <a href="/info" className='main-nav__link'>
            {/* <svg className='main-nav__icon'>
              <use xlink:href="img/sprite.svg#icon-open-book'></use>
            </svg> */}
            Infos
          </a>
        </li>
      </ul>
    </nav>
  )
}

export default Navigation;