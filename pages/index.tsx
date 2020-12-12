import React from 'react'
import styles from '../styles/Index.module.css'
import { MotionConfig, AnimationFeature, ExitFeature } from 'framer-motion'
import { NextPage } from 'next'
import Backgrounds from '../components/Backgrounds'
import Header from '../components/Header'
import Section from '../components/Section'

const Home: NextPage = () => {
  const headerRef = React.useRef<HTMLDivElement>()
  const oneRef = React.useRef<HTMLDivElement>()
  const twoRef = React.useRef<HTMLDivElement>()

  const sections: Section[] = [
    { ref: headerRef, page: 'start' },
    { ref: oneRef, page: 'bio' },
    { ref: twoRef, page: 'contact' },
  ]

  return (
    <MotionConfig features={[AnimationFeature, ExitFeature]}>
      <div className={styles.containter}>
        <Backgrounds sections={sections} />
        <Header ref={headerRef} />
        <Section ref={oneRef} id="one">
          ONE
        </Section>
        <Section ref={twoRef} id="three">
          TWO
        </Section>
      </div>
    </MotionConfig>
  )
}

export default Home
