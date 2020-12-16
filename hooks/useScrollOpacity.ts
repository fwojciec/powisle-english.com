import { RefObject, useEffect, useRef, useState } from 'react'
import useScrollPosition from './useScrollPosition'

export default function useScrollOpacity(ref: RefObject<HTMLDivElement>) {
  const [opacity, setOpacity] = useState(1)
  const waiting = useRef(false)
  const id = useRef(0)
  const sp = useScrollPosition()

  useEffect(() => {
    function getProgress(
      scrollPosition: number,
      windowHeight: number,
      ref: RefObject<HTMLDivElement>
    ) {
      const vMiddle = scrollPosition + windowHeight / 2
      const box = ref.current.getBoundingClientRect()
      const eTop = box.top
      const eBottom = box.bottom
      return (vMiddle - eTop) / (eBottom - eTop)
    }

    function getOpacity(progress: number, windowWidth: number) {
      if (windowWidth <= 736) return 1
      const x = progress > 0.5 ? 1 - progress : progress
      return Math.max(0, Math.min(1, x * 2))
    }

    setOpacity(
      getOpacity(getProgress(sp, window.innerHeight, ref), window.innerWidth)
    )

    function handleResize() {
      if (!waiting.current) {
        setOpacity(
          getOpacity(
            getProgress(sp, window.innerHeight, ref),
            window.innerWidth
          )
        )
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
  }, [ref, sp])

  return opacity
}
