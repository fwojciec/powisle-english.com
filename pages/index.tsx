import { useRef } from 'react'
import { MotionConfig, AnimationFeature, ExitFeature } from 'framer-motion'
import { NextPage } from 'next'
import Backgrounds from '../components/Backgrounds'
import Header from '../components/Header'
import Section from '../components/Section'
import Testimonial from '../components/Testimonial'
import { Services } from '../components/Services'
import Head from 'next/head'

const Home: NextPage = () => {
  const headerRef = useRef<HTMLDivElement>()
  const testimonialsRef = useRef<HTMLDivElement>()
  const bioRef = useRef<HTMLDivElement>()
  const servicesRef = useRef<HTMLDivElement>()
  const whereRef = useRef<HTMLDivElement>()

  const sections: Section[] = [
    { ref: headerRef, page: 'start' },
    { ref: testimonialsRef, page: 'testimonials' },
    { ref: bioRef, page: 'bio' },
    { ref: servicesRef, page: 'services' },
    { ref: whereRef, page: 'where' },
  ]

  return (
    <>
      <Head>
        <title>Powiśle English Lessons</title>
        <meta name="viewport" content="width=device-width,initial-scale=1" />
      </Head>
      <MotionConfig features={[AnimationFeature, ExitFeature]}>
        <Backgrounds sections={sections} />
        <Header ref={headerRef} />
        <Section
          ref={testimonialsRef}
          id="testimonials"
          title="Testimonials"
          scrollTo="bio"
        >
          <Testimonial text="Ali is an enthusiastic, funny, and enjoyable teacher." />
          <Testimonial text="She was indispensable as I prepared for job interviews." />
          <Testimonial text="Ali was especially great in helping me make information accessible and compelling to a variety of audiences." />
          <Testimonial text="Great: sincere, hard-working, very accessible, very nice, and helpful." />
          <Testimonial text="Ali was terrific at helping me organize my thoughts and claims in writing." />
        </Section>
        <Section ref={bioRef} id="bio" title="Who I am" scrollTo="services">
          <p>
            I was born in New Zealand and have spent many years living in the UK
            and USA. I studied at Cambridge University (B.A. Hons, Social and
            Political Sciences) and University of California, Berkeley (Ph.D.,
            Political Science). I’ve taught university classes in academic
            writing (as well as philosophy and politics) and moved to Warsaw to
            work on a book manuscript. Everything is great about Warsaw, except
            I really miss working with students!
          </p>
        </Section>
        <Section
          ref={servicesRef}
          id="services"
          title="What I teach"
          scrollTo="where"
        >
          <p>
            I would be delighted to help you with your English goals. These
            might include:
          </p>
          <Services />
        </Section>
        <Section ref={whereRef} id="where" title="Where and how">
          <p>
            All levels are welcome – beginners as well as advanced students.
          </p>
          <br />
          <p>
            I’ll develop lesson plans based on your goals - whatever you want to
            learn, we’ll learn it.
          </p>
          <br />
          <p>I teach in person in Warsaw&apos;s city center or by Skype.</p>
        </Section>
      </MotionConfig>
    </>
  )
}

export default Home
