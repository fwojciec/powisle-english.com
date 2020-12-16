import * as React from 'react'

interface Props {
  text: string
  locale: Locale
}

const Testimonial: React.FC<Props> = ({ text, locale }) => {
  return (
    <p className="testimonial">
      {locale === 'pl' ? <span>&bdquo;</span> : <span>&ldquo;</span>}
      <span>{text}</span>
      <span>&rdquo;</span>
    </p>
  )
}

export default Testimonial
