import { useEffect, useRef, useState } from 'react'
import { MotionConfig, AnimationFeature, ExitFeature } from 'framer-motion'
import { GetStaticProps, NextPage } from 'next'
import Backgrounds from '../components/Backgrounds'
import Header from '../components/Header'
import Section from '../components/Section'
import Testimonial from '../components/Testimonial'
import { Services } from '../components/Services'
import Head from 'next/head'
import Footer from '../components/Footer'
import Notification from '../components/Notification'
import { Translations, English, Polish } from '../translations'

interface Props {
  locale: 'en' | 'pl'
  translations: Translations
}

const Home: NextPage<Props> = ({ translations, locale }) => {
  const [formState, setFormState] = useState<FormState>('ready')

  useEffect(() => {
    let id: number
    if (formState === 'success' || formState === 'error') {
      id = window.setTimeout(() => {
        setFormState('ready')
      }, 10000)
    }
    return function cleanup() {
      window.clearTimeout(id)
    }
  }, [formState, setFormState])

  const headerRef = useRef<HTMLDivElement>()
  const testimonialsRef = useRef<HTMLDivElement>()
  const bioRef = useRef<HTMLDivElement>()
  const servicesRef = useRef<HTMLDivElement>()
  const whereRef = useRef<HTMLDivElement>()
  const footerRef = useRef<HTMLDivElement>()

  const sections: Section[] = [
    { ref: headerRef, page: 'start' },
    { ref: testimonialsRef, page: 'testimonials' },
    { ref: bioRef, page: 'bio' },
    { ref: servicesRef, page: 'services' },
    { ref: whereRef, page: 'where' },
    { ref: footerRef, page: 'start' },
  ]

  return (
    <>
      <Head>
        <title>{translations.title}</title>
        <meta name="viewport" content="width=device-width,initial-scale=1" />
        <meta name="description" content={translations.description} />
        <meta name="keywords" content={translations.keywords} />
        <link
          rel="alternate"
          hrefLang={locale === 'en' ? 'pl' : 'en'}
          href={`https://powisle-english.com${locale === 'en' ? '/pl' : ''}`}
        />
        <link
          href="https://fonts.googleapis.com/css?family=Raleway:400,700,800&display=swap"
          rel="stylesheet"
        />
      </Head>
      <MotionConfig features={[AnimationFeature, ExitFeature]}>
        <Backgrounds sections={sections} />
        <Header ref={headerRef} translations={translations} />
        <Section
          ref={testimonialsRef}
          id="testimonials"
          title={translations.testimonialsTitle}
          thumbnail={'/assets/img/testimonials.jpg'}
          scrollTo="bio"
        >
          {translations.testimonials.map((text, index) => (
            <Testimonial key={index} text={text} />
          ))}
        </Section>
        <Section
          ref={bioRef}
          id="bio"
          title={translations.bioTitle}
          thumbnail="/assets/img/bio.jpg"
          scrollTo="services"
        >
          <p>{translations.bio}</p>
        </Section>
        <Section
          ref={servicesRef}
          id="services"
          title={translations.servicesTitle}
          thumbnail="/assets/img/services.jpg"
          scrollTo="where"
        >
          <p>{translations.servicesDesc}</p>
          <Services services={translations.services} />
        </Section>
        <Section
          ref={whereRef}
          id="where"
          title={translations.whereTitle}
          thumbnail="/assets/img/where.jpg"
          scrollTo="footer"
        >
          {translations.where.map((text, index) => (
            <p key={index}>{text}</p>
          ))}
        </Section>
        <Footer
          ref={footerRef}
          id="footer"
          translations={translations}
          locale={locale}
          setFormState={setFormState}
        />
        <Notification translations={translations} type={formState} />
      </MotionConfig>
    </>
  )
}

export const getStaticProps: GetStaticProps<Props> = async (context) => {
  const locale = context.locale === 'pl' ? 'pl' : 'en'
  return {
    props: {
      translations: locale === 'pl' ? Polish : English,
      locale,
    },
  }
}

export default Home
