import React from 'react'
import { Link } from 'react-router-dom'

import IconGarbage from './IconGarbage';
import IconProgress from './IconProgress';
import IconEvent from './IconEvent';
import IconInfo from './IconInfo';

const ICON_MAP = [
  { id: 1,  component: IconGarbage, label: 'Déchets', linkTo: '/garbage' },
  { id: 2,  component: IconProgress, label: 'Progression', linkTo: '/progress' },
  { id: 3,  component: IconEvent, label: 'Événements', linkTo: '/events' },
  { id: 4,  component: IconInfo, label: 'Infos', linkTo: '/infos' },
]

const MenuItems = (props) => {
  return ICON_MAP.map(({id, component, label, linkTo}) => {
    const fullLinkTo = props.match.path + linkTo;
    return generateLI(id, component, label, fullLinkTo);
  })
}

const generateLI = (id, component, label, linkTo) => {
  const MyComponent = component;
  return (
    <li className='menu__item' key={id}>
      <Link className='menu__link' to={linkTo}>
        <MyComponent className='menu__icon' />
        <span className='menu__label'>{label}</span>
      </Link>
    </li>
  )
}

export default MenuItems;