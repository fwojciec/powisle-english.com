import { forwardRef } from 'react'
import Link from 'next/link'
import Form from './Form'

interface Props extends React.HTMLProps<HTMLElement> {
  translations: Translations
  locale: Locale
  setFormState: (state: FormState) => void
}

const Footer = forwardRef<HTMLDivElement, Props>(
  ({ translations, locale, setFormState, id }, ref) => {
    return (
      <section id={id} className="footer" ref={ref}>
        <div className="container container--footer">
          <div>
            <h2 className="footer--title">{translations.footerTitle}</h2>
          </div>
          <Form translations={translations} setFormState={setFormState} />
        </div>
        <div className="footer--bottom">
          <ul className="footer--copyright">
            <li>© Powiśle English, 2020</li>
            <li>
              <span>{translations.design}</span>
              <a href="https://html5up.net">HTML5 UP</a>
            </li>
            <li>
              <Link href="/" locale={locale === 'en' ? 'pl' : 'en'}>
                {translations.localeSwitch}
              </Link>
            </li>
          </ul>
        </div>
      </section>
    )
  }
)

Footer.displayName = 'Footer'

export default Footer
