import React from 'react'
import styles from '../styles/Section.module.css'

const Section = React.forwardRef<HTMLDivElement, React.HTMLProps<HTMLElement>>(
  ({ children, id }, ref) => {
    return (
      <div className={styles.root} ref={ref} id={id}>
        {children}
      </div>
    )
  }
)

Section.displayName = 'Section'

export default Section
