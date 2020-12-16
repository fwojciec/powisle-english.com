import { useRef } from 'react'
import { MotionConfig, AnimationFeature, ExitFeature } from 'framer-motion'
import { GetStaticProps, NextPage } from 'next'
import useFormState from '../hooks/useFormState'
import Backgrounds from '../components/Backgrounds'
import Header from '../components/Header'
import Section from '../components/Section'
import Testimonial from '../components/Testimonial'
import Services from '../components/Services'
import Head from '../components/Head'
import Footer from '../components/Footer'
import Notification from '../components/Notification'
import { English, Polish } from '../translations'

interface Props {
  locale: Locale
  translations: Translations
}

const Home: NextPage<Props> = ({ translations, locale }) => {
  const { formState, setFormState } = useFormState()

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
    <MotionConfig features={[AnimationFeature, ExitFeature]}>
      <Head translations={translations} locale={locale} />
      <Backgrounds sections={sections} />
      <Header ref={headerRef} translations={translations} />
      <Section
        ref={testimonialsRef}
        id="testimonials"
        title={translations.testimonialsTitle}
        thumbnail={'/testimonials.jpg'}
        scrollTo="bio"
      >
        {translations.testimonials.map((text, index) => (
          <Testimonial key={index} text={text} locale={locale} />
        ))}
      </Section>
      <Section
        ref={bioRef}
        id="bio"
        title={translations.bioTitle}
        thumbnail="/bio.jpg"
        scrollTo="services"
      >
        <p>{translations.bio}</p>
      </Section>
      <Section
        ref={servicesRef}
        id="services"
        title={translations.servicesTitle}
        thumbnail="/services.jpg"
        scrollTo="where"
      >
        <p>{translations.servicesDesc}</p>
        <Services services={translations.services} />
      </Section>
      <Section
        ref={whereRef}
        id="where"
        title={translations.whereTitle}
        thumbnail="/where.jpg"
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
