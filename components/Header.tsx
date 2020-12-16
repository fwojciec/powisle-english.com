import { forwardRef, useRef } from 'react'
import useScrollOpacity from '../hooks/useScrollOpacity'

interface Props {
  translations: Translations
}

const Header = forwardRef<HTMLDivElement, Props>(
  ({ translations }, outerRef) => {
    const innerRef = useRef<HTMLDivElement>()
    const opacity = useScrollOpacity(innerRef)

    return (
      <header className="header" ref={outerRef}>
        <div className="header--inner" ref={innerRef}>
          <div className="header--text" style={{ opacity }}>
            <h1 className="header--title">{translations.title}</h1>
            <p className="header--subtitle">
              <span>{translations.subtitle1}</span>
              <br />
              <span>{translations.subtitle2}</span>
            </p>
          </div>
          <div className="container container--header">
            <a className="button button--primary" href="#testimonials">
              {translations.more}
            </a>
          </div>
        </div>
      </header>
    )
  }
)

Header.displayName = 'Header'

export default Header
