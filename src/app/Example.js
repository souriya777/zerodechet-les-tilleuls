import React from 'react'
import { Route, Link } from 'react-router-dom'
import { CSSTransition } from 'react-transition-group'

import '../_resources/sass/main.scss'

const routes = [
  { path: '/', name: 'Home', Component: Home },
  { path: '/about', name: 'About', Component: About },
  { path: '/contact', name: 'Contact', Component: Contact },
]

function Example() {
  return (
    <>
      <Menu />
      <div className="container">
        {routes.map(({ path, Component }) => (
          <Route key={path} exact path={path}>
            {({ match }) => (
              <CSSTransition
                in={match != null}
                timeout={300}
                classNames="page"
                unmountOnExit
              >
                <div className="page">
                  <Component />
                </div>
              </CSSTransition>
            )}
          </Route>
        ))}
      </div>
    </>
  )
}

export default Example

function Home() {
  return (
    <>
      <h1>Home</h1>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam aliquet,
        purus vitae eleifend tristique, lorem magna volutpat orci, et vehicula
        erat erat nec elit. Aenean posuere nunc ac cursus facilisis. Aenean vel
        porta turpis, ut iaculis justo.
      </p>
    </>
  )
}

function Contact() {
  return (
    <>
      <h1>Contact</h1>
      <p>
        Aliquam iaculis a nisi sed ornare. Sed venenatis tellus vel consequat
        congue. In bibendum vestibulum orci et feugiat.
      </p>
    </>
  )
}

function About() {
  return (
    <>
      <h1>About</h1>
      <p>
        Donec sit amet augue at enim sollicitudin porta. Praesent finibus ex
        velit, quis faucibus libero congue et. Quisque convallis eu nisl et
        congue. Vivamus eget augue quis ante malesuada ullamcorper. Sed orci
        nulla, eleifend eget dui faucibus, facilisis aliquet ante. Suspendisse
        sollicitudin nibh lacus, ut bibendum risus elementum a.
      </p>
    </>
  )
}

class Menu extends React.Component {
  state = {
    effect: 'init'
  }
  handleClicked = () => {
    this.setState({effect: 'active'})
  }
  handleClicked2 = () => {
    this.setState({effect: 'init'})
  }


  render() {
    const { effect } = this.state

    return(
      <>
        <div classNames={`mon-bouton`}>
          <Link to='/' onClick={this.handleClicked}>HOME (switch)</Link>
          <Link to='/about' onClick={this.handleClicked2}>ABOUT (switch)</Link>
        </div>
        <div className={`my-effect my-effect--${effect}`}>ZONE DE OUF</div>
      </>
    )
  }
}