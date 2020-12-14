import * as React from 'react'
import useBackground from '../hooks/useBackground'
import Background from './Background'

interface Props {
  sections: Section[]
}

const Backgrounds: React.FC<Props> = ({ sections }) => {
  const page = useBackground(sections)
  return <Inner page={page} />
}

interface InnerProps {
  page: string
}

const Inner: React.FC<InnerProps> = React.memo(({ page }) => {
  return (
    <div className="background">
      <Background variant="start" on={page === 'start'} />
      <Background variant="testimonials" on={page === 'testimonials'} />
      <Background variant="bio" on={page === 'bio'} />
      <Background variant="services" on={page === 'services'} />
      <Background variant="where" on={page === 'where'} />
      <Background variant="contact" on={page === 'contact'} />
    </div>
  )
})

Inner.displayName = 'BackgroundsInner'

export default Backgrounds
