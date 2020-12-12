import { useEffect, useState, useRef } from 'react'

export default function useScrollPosition() {
  const [scrollPostion, setScrollPosition] = useState(0)
  const waiting = useRef(false)
  const id = useRef(0)

  useEffect(() => {
    function handlePositionChange() {
      if (!waiting.current) {
        setScrollPosition(window.pageYOffset)
        waiting.current = true
        id.current = window.requestAnimationFrame(() => {
          waiting.current = false
        })
      }
    }

    window.addEventListener('scroll', handlePositionChange)

    return function cleanup() {
      window.removeEventListener('scroll', handlePositionChange)
      window.cancelAnimationFrame(id.current)
    }
  }, [])

  return scrollPostion
}
