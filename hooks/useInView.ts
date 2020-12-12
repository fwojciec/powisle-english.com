import { useEffect, useState, useRef, RefObject } from 'react'
import useScrollPosition from './useScrollPosition'

export default function useInView(ref: RefObject<HTMLDivElement>) {
  const [inView, setInView] = useState(false)
  const waiting = useRef(false)
  const id = useRef(0)

  const scrollPosition = useScrollPosition()

  function isInView(
    scrollPosition: number,
    windowHeight: number,
    el: HTMLDivElement
  ) {
    const vMiddle = scrollPosition + windowHeight / 2
    const padding = -0.1 * window.innerHeight
    const eTop = el.offsetTop + padding
    const eBottom = el.offsetHeight + el.offsetTop - padding
    return vMiddle >= eTop && vMiddle <= eBottom
  }

  useEffect(() => {
    setInView(isInView(scrollPosition, window.innerHeight, ref.current))

    function handleResize() {
      if (!waiting.current) {
        setInView(isInView(scrollPosition, window.innerHeight, ref.current))
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
  }, [ref, scrollPosition])

  return inView
}
