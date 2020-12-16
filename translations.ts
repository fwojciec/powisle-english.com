export interface Translations {
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

export const English: Translations = {
  title: 'Powiśle English Lessons',
  description: 'English lessons with a native-speaker in Powiśle, Warsaw.',
  keywords:
    'Warsaw, Powiśle, English, lessons, teacher, learning, native-speaker, conversation, public speaking, business English, presentations, interview preparation, academic writing',
  subtitle1: 'Learn from a Native speaker',
  subtitle2: 'Feel more confident about your English',
  more: 'Find out more',
  next: 'Next',
  testimonialsTitle: 'Testimonials',
  testimonials: [
    'Ali is an enthusiastic, funny, and enjoyable teacher.',
    'She was indispensable as I prepared for job interviews.',
    'Ali was especially great in helping me make information accessible and compelling to a variety of audiences.',
    'Great: sincere, hard-working, very accessible, very nice, and helpful.',
    'Ali was terrific at helping me organize my thoughts and claims in writing.',
  ],
  bioTitle: 'Who I am',
  bio:
    'I was born in New Zealand and have spent many years living in the UK and USA. I studied at Cambridge University (B.A. Hons, Social and Political Sciences) and University of California, Berkeley (Ph.D., Political Science). I’ve taught university classes in academic writing (as well as philosophy and politics) and moved to Warsaw to work on a book manuscript. Everything is great about Warsaw, except I really miss working with students!',
  servicesTitle: 'What I Teach',
  servicesDesc:
    'I would be delighted to help you with your English goals. These might include:',
  services: [
    'Conversation',
    'Academic writing',
    'Applications',
    'Public speaking',
  ],
  whereTitle: 'Where and How',
  where: [
    'All levels are welcome – beginners as well as advanced students.',
    'I’ll develop lesson plans based on your goals - whatever you want to learn, we’ll learn it.',
    "I teach in person in Warsaw's city center or by Skype.",
  ],
  footerTitle: 'Get in touch',
  formName: 'Name',
  formEmail: 'Email',
  formMessage: 'Message',
  formButton: 'Send Message',
  design: 'Design: ',
  localeSwitch: 'Zmień język strony na polski',
  notificationSuccess: 'Message sent',
  notificationError: 'Error sending message',
}

export const Polish: Translations = {
  title: 'Powiśle English Lessons',
  description: 'Lekcje angielskiego z native-speakerem na warszawskim Powiślu.',
  keywords:
    'Warszawa, Powiśle, angielski, lekcje, nauczyciel, nauka, native speaker, konwersacja, przemawianie, angielski biznesowy, prezentacje, rozmowy kwalifikacyjne, rozmowa, przygotowanie, pisanie akademickie',
  subtitle1: 'Nauka angielskiego z native-speakerem',
  subtitle2: 'Nabierz pewności w swoim angielskim',
  more: 'Dowiedz się więcej',
  next: 'Next',
  testimonialsTitle: 'Rekomendacje',
  testimonials: [
    'Ali jest sympatyczną, pełną entuzjazmu nauczycielką obdarzoną poczuciem humoru.',
    'Bardzo pomogła mi w przygotowaniach do rozmów kwalifikacyjnych.',
    'Ali nauczyła mnie przekazywać informacje w sposób przystępny i atrakcyjny dla różnych grup odbiorców.',
    'Świetna: szczera, rzetelna, przystępna, bardzo miła i pomocna.',
    'Ali ogromnie pomogła mi wyrażać się jaśniej i bardziej przejrzyście w formie pisemnej.',
  ],
  bioTitle: 'Kim jestem',
  bio:
    'Pochodzę z Nowej Zelandii, ale przez wiele lat mieszkałam w Wielkiej Brytanii i USA. Studiowałam na Cambridge University (B.A. Hons, Social and Political Sciences) oraz University of California, Berkeley (Ph.D., Political Science). Prowadziłam kursy doskonalenia umiejętności pisania tekstów akademickich dla studentów (oraz zajęcia z filozofii i nauk politycznych), a do Warszawy przyjechałam pisać ksiąkę. Uwielbiam Warszawę, ale brakuje mi pracy ze studentami!',
  servicesTitle: 'Czego uczę',
  servicesDesc:
    'Moje zajęcia dostosowane są do indywidualnych potrzeb studentów i mogą dotyczyć takich problemów jak:',
  services: ['Konwersacja', 'Pisanie akademickie', 'Aplikacje', 'Prezentacje'],
  whereTitle: 'Gdzie i jak',
  where: [
    'Wszystkie poziomy są mile widziane - uczę zarówno początkujących, jak i zaawansowanych studentów.',
    'Przygotowuję indywidualne plany zajęć dla wszystkich studentów - nauczysz się tego, czego chcesz się nauczyć.',
    'Lekcje prowadzę osobiście w Warszawie (Śródmieście) lub przez Skype.',
  ],
  footerTitle: 'Napisz do mnie',
  formName: 'Imię i nazwisko',
  formEmail: 'Email',
  formMessage: 'Wiadomość',
  formButton: 'Wyślij wiadomość',
  design: 'Projekt: ',
  localeSwitch: 'Change site language to English',
  notificationSuccess: 'Wiadomość wysłana',
  notificationError: 'Błąd podczas wysyłania wiadomości',
}
