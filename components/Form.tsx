import * as React from 'react'

interface Props {
  translations: Translations
  setFormState: (state: FormState) => void
}

interface FormValues {
  name: string
  email: string
  message: string
}

const Form: React.FC<Props> = ({ translations, setFormState }) => {
  const initialProps: FormValues = {
    name: '',
    email: '',
    message: '',
  }

  const [values, setValues] = React.useState(initialProps)
  const [isSubmitting, setIsSubmitting] = React.useState(false)

  function onChange(
    event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) {
    setValues({
      ...values,
      [event.target.name]: event.target.value,
    })
  }

  async function onSubmit(event: React.FormEvent) {
    event.preventDefault()
    setIsSubmitting(true)

    try {
      const resp = await fetch('/api/email', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(values),
      })
      if (resp.status >= 400 && resp.status < 600) {
        setFormState('error')
      } else {
        setValues(initialProps)
        setFormState('success')
      }
    } catch (err) {
      setFormState('error')
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <form className="form" onSubmit={onSubmit}>
      <label htmlFor="name" className="sr-only">
        Name
      </label>
      <input
        className="form--input form--input-name"
        type="text"
        name="name"
        id="name"
        placeholder={translations.formName}
        value={values.name}
        onChange={onChange}
        required
      />
      <label htmlFor="email" className="sr-only">
        Email
      </label>
      <input
        className="form--input form--input-email"
        type="email"
        name="email"
        id="email"
        placeholder={translations.formEmail}
        value={values.email}
        onChange={onChange}
        required
      />
      <label htmlFor="message" className="sr-only">
        Message
      </label>
      <textarea
        className="form--textarea"
        name="message"
        id="message"
        placeholder={translations.formMessage}
        rows={4}
        value={values.message}
        onChange={onChange}
        required
      />
      <input
        className="form--button button button--primary"
        type="submit"
        disabled={isSubmitting}
        value={translations.formButton}
      />
    </form>
  )
}

export default Form
