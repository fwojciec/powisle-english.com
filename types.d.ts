type Page = 'start' | 'bio' | 'contact'

interface Section {
  ref: RefObject<HTMLElement>
  page: Page
}
