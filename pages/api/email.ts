import sgMail from '@sendgrid/mail'
import type { NextApiRequest, NextApiResponse } from 'next'

sgMail.setApiKey(process.env.SENDGRID_KEY)

export interface Message {
  name: string
  email: string
  message: string
}

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  const body = req.body as Message
  const msg = {
    to: 'fwojciec@gmail.com',
    from: 'noreply@powisle-english.com',
    subject: 'Message from the powisle-english.com contact form',
    text: `From: ${body.name}\nEmail: ${body.email}\nMessage: ${body.message}`,
  }
  try {
    const [sgRes] = await sgMail.send(msg)
    if (sgRes.statusCode >= 400 && sgRes.statusCode < 600) {
      res.statusCode = sgRes.statusCode
      res.end(JSON.stringify({ err: sgRes.toString() }))
    }
  } catch (err) {
    res.statusCode = 500
    res.end(JSON.stringify({ err: `unexpected error: ${err}` }))
  }

  res.statusCode = 200
  res.end(JSON.stringify({ msg: 'OK' }))
}
