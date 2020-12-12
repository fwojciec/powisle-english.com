import React from 'react'
import useBackground from '../hooks/useBackground'
import Background from './Background'
import styles from '../styles/Backgrounds.module.css'

interface Props {
  sections: Section[]
}

const Backgrounds: React.FC<Props> = ({ sections }) => {
  const page = useBackground(sections)

  return (
    <div className={styles.background}>
      <Background variant="start" on={page === 'start'} />
      <Background variant="bio" on={page === 'bio'} />
      <Background variant="contact" on={page === 'contact'} />
    </div>
  )
}

export default Backgrounds
