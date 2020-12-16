import * as React from 'react'
import NextHead from 'next/head'

interface Props {
  translations: Translations
  locale: Locale
}

const Head: React.FC<Props> = ({ translations, locale }) => {
  const url = `https://powisle-english.com${locale === 'en' ? '/pl' : ''}`
  return (
    <NextHead>
      <title>{translations.title}</title>
      <meta name="viewport" content="width=device-width,initial-scale=1" />
      <meta name="description" content={translations.description} />
      <meta name="keywords" content={translations.keywords} />
      <meta property="og:title" content={translations.title} />
      <meta property="og:description" content={translations.description} />
      <meta property="og:url" content={url} />
      <meta property="og:image" content={`${url}/thumb_fb.png`} />
      <meta property="og:image:width" content="1200" />
      <meta property="og:image:height" content="630" />
      <meta name="twitter:title" content={translations.title} />
      <meta name="twitter:description" content={translations.description} />
      <meta name="twitter:image" content={`${url}/thumb_tw.png`} />
      <meta name="twitter:card" content="summary_large_image" />
      <link rel="alternate" hrefLang={locale} href={url} />
      <link
        href="https://fonts.googleapis.com/css?family=Raleway:400,700,800&display=swap"
        rel="stylesheet"
      />
    </NextHead>
  )
}

export default Head
