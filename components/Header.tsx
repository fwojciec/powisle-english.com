import { forwardRef, useRef } from 'react'
import useScrollOpacity from '../hooks/useScrollOpacity'

const Header = forwardRef<HTMLDivElement>((_, outerRef) => {
  const innerRef = useRef<HTMLDivElement>()
  const opacity = useScrollOpacity(innerRef)

  return (
    <header className="header" ref={outerRef}>
      <div className="header--inner" ref={innerRef}>
        <div className="header--text" style={{ opacity }}>
          <h1 className="header--title">Powiśle English Lessons</h1>
          <p className="header--subtitle">
            <span>Learn from a native speaker</span>
            <br />
            <span>Feel more confident about your English</span>
          </p>
        </div>
        <div className="container container--header">
          <a className="button button--primary" href="#testimonials">
            Find out more
          </a>
        </div>
      </div>
    </header>
  )
})

Header.displayName = 'Header'

export default Header
