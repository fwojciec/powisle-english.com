import React from 'react'
import useScrollOpacity from '../hooks/useScrollOpacity'
import styles from '../styles/Header.module.css'

const Header = React.forwardRef<HTMLDivElement>((_, outerRef) => {
  const innerRef = React.useRef<HTMLDivElement>()
  const opacity = useScrollOpacity(innerRef)

  return (
    <section className={styles.root} ref={outerRef}>
      <div ref={innerRef} style={{ height: '100%' }}>
        <header className={styles.header} style={{ opacity }}>
          <h1 className="major">Powiśle English Lessons</h1>
          <p>
            <span>Learn from a native speaker</span>
            <br />
            <span>Feel more confident about your English</span>
          </p>
        </header>
        <div className={styles.container}>
          <a href="#two">Find out more</a>
        </div>
      </div>
    </section>
  )
})

Header.displayName = 'Header'

export default Header
