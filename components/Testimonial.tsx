import { useRouter } from 'next/router'
import React from 'react'

interface Props {
  text: string
}

const Testimonial: React.FC<Props> = ({ text }) => {
  const router = useRouter()
  return (
    <p className="testimonial">
      {router.locale === 'pl' ? <span>&bdquo;</span> : <span>&ldquo;</span>}
      <span>{text}</span>
      <span>&rdquo;</span>
    </p>
  )
}

export default Testimonial
