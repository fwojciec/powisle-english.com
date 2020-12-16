import Image from 'next/image'
import * as React from 'react'

interface Props extends React.HTMLProps<HTMLElement> {
  title: string
  thumbnail: string
  scrollTo?: string
}

const Section = React.forwardRef<HTMLDivElement, Props>(
  ({ children, id, title, thumbnail, scrollTo }, ref) => {
    return (
      <section
        className="section container container--section"
        id={id}
        ref={ref}
      >
        <div className="section--inner">
          <div className="section--image">
            <Image
              src={thumbnail}
              alt="thumbnail"
              layout="responsive"
              width={640}
              height={400}
            />
          </div>
          <h2 className="section--title">{title}</h2>
          {children}
        </div>
        {scrollTo && (
          <a className="button button--secondary" href={`#${scrollTo}`}>
            Next
          </a>
        )}
      </section>
    )
  }
)

Section.displayName = 'Section'

export default Section
