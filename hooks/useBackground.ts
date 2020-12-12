import { useEffect, useState, useRef, RefObject } from 'react'
import useScrollPosition from './useScrollPosition'

export default function useBackground(sections: Section[]) {
  const [page, setPage] = useState(sections[0].page || '')
  const waiting = useRef(false)
  const id = useRef(0)
  const sp = useScrollPosition()

  function getBreakpoint(windowHeight: number, ref: RefObject<HTMLElement>) {
    const padding = -0.1 * window.innerHeight
    const eTop = ref.current.offsetTop + padding
    return eTop - windowHeight / 2
  }

  useEffect(() => {
    function sectionBreakpoints(sections: Section[]) {
      return sections
        .map(({ ref, page }) => ({
          bp: getBreakpoint(window.innerHeight, ref),
          page,
        }))
        .sort((a, b) => a.bp - b.bp)
    }

    function currentPath(sections: Section[], sp: number) {
      const breakpoints = sectionBreakpoints(sections)
      for (let i = 0; i < breakpoints.length; ++i) {
        const { bp, page } = breakpoints[i]
        if (i + 1 >= breakpoints.length) return page
        if (sp >= bp && sp < breakpoints[i + 1].bp) return page
      }
      return page
    }

    setPage(currentPath(sections, sp))

    function handleResize() {
      if (!waiting.current) {
        setPage(currentPath(sections, sp))
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
  }, [sections, sp, page])

  return page
}
