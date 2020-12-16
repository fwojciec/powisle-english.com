type Page = 'start' | 'testimonials' | 'services' | 'bio' | 'where' | 'contact'

interface Section {
  ref: RefObject<HTMLElement>
  page: Page
}

type FormState = 'ready' | 'success' | 'error'
