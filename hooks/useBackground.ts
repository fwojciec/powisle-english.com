import { useEffect, useState, useRef, RefObject } from 'react'
import useScrollPosition from './useScrollPosition'

export default function useBackground(sections: Section[]): Page {
  const mainBg = sections[0].page
  const [page, setPage] = useState<Page>(mainBg)
  const waiting = useRef(false)
  const id = useRef(0)
  const scrollPosition = useScrollPosition()

  function getBreakpoint(windowHeight: number, ref: RefObject<HTMLElement>) {
    const padding = -0.1 * window.innerHeight
    const eTop = ref.current.offsetTop + padding
    return eTop - windowHeight / 2
  }

  useEffect(() => {
    const breakpoints = sections
      .map(({ ref, page }) => ({
        bp: getBreakpoint(window.innerHeight, ref),
        page,
      }))
      .sort((a, b) => a.bp - b.bp)

    function setPageIfDifferent(newPage: Page) {
      if (newPage !== page) setPage(newPage)
    }

    function getCurrentPage(sp: number, windowWidth: number) {
      if (windowWidth <= 980) {
        return mainBg
      }
      for (let i = 0; i < breakpoints.length; ++i) {
        const { bp, page } = breakpoints[i]
        if (i + 1 >= breakpoints.length) return page
        if (sp >= bp && sp < breakpoints[i + 1].bp) return page
      }
      return page
    }

    setPageIfDifferent(getCurrentPage(scrollPosition, window.innerWidth))

    function handleResize() {
      if (!waiting.current) {
        setPageIfDifferent(getCurrentPage(scrollPosition, window.innerWidth))
        waiting.current = true
        id.current = window.requestAnimationFrame(() => {
          waiting.current = false
        })
      }
    }

    window.addEventListener('resize', handleResize)

    return function cleanup() {
      window.removeEventListener('resize', handleResize)
      window.cancelAnimationFrame(id.current)
    }
  }, [sections, scrollPosition, page, mainBg])

  return page
}
