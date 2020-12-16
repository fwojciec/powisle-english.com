type Page = 'start' | 'testimonials' | 'services' | 'bio' | 'where' | 'contact'

interface Section {
  ref: RefObject<HTMLElement>
  page: Page
}

type FormState = 'ready' | 'success' | 'error'

type Locale = 'en' | 'pl'

interface Translations {
  title: string
  description: string
  keywords: string
  subtitle1: string
  subtitle2: string
  more: string
  next: string
  testimonialsTitle: string
  testimonials: string[]
  bioTitle: string
  bio: string
  servicesTitle: string
  servicesDesc: string
  services: string[]
  whereTitle: string
  where: string[]
  footerTitle: string
  formName: string
  formEmail: string
  formMessage: string
  formButton: string
  design: string
  localeSwitch: string
  notificationSuccess: string
  notificationError: string
}
