import * as React from 'react'
import NextHead from 'next/head'

interface Props {
  translations: Translations
  locale: Locale
}

const Head: React.FC<Props> = ({ translations, locale }) => {
  return (
    <NextHead>
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
    </NextHead>
  )
}

export default Head
