import { useState, useEffect } from 'react'

export default function useFormState() {
  const [formState, setFormState] = useState<FormState>('ready')

  useEffect(() => {
    let id: number
    if (formState === 'success' || formState === 'error') {
      id = window.setTimeout(() => {
        setFormState('ready')
      }, 10000)
    }
    return function cleanup() {
      window.clearTimeout(id)
    }
  }, [formState, setFormState])

  return {
    formState,
    setFormState,
  }
}
