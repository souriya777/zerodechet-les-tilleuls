import React from 'react'
import { Link } from 'react-router-dom'

import IconGarbage from './icons/IconGarbage';
import IconProgress from './icons/IconProgress';
import IconEvent from './icons/IconEvent';
import IconInfo from './icons/IconInfo';

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
        {label}
      </Link>
    </li>
  )
}

export default MenuItems;