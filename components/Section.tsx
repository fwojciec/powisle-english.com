import * as React from 'react'

interface Props extends React.HTMLProps<HTMLElement> {
  title: string
  scrollTo?: string
}

const Section = React.forwardRef<HTMLDivElement, Props>(
  ({ children, id, title, scrollTo }, ref) => {
    return (
      <section
        className="section container container--section"
        id={id}
        ref={ref}
      >
        <div className="section--inner">
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
