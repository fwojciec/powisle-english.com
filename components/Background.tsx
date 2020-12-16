import * as React from 'react'
import Image from 'next/image'
import { m as motion, AnimatePresence } from 'framer-motion'

interface Props {
  variant?: Page
  on: boolean
}

const Background: React.FC<Props> = ({ variant, on }) => {
  const sources: { [key in Page]: string } = {
    start: '/start.jpg',
    testimonials: '/testimonials.jpg',
    bio: '/bio.jpg',
    services: '/services.jpg',
    where: '/where.jpg',
    contact: '/start.jpg',
  }

  return (
    <AnimatePresence initial={false}>
      {on && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.4 }}
        >
          <Image
            alt="background image"
            src={sources[variant]}
            layout="fill"
            objectFit="cover"
            quality={75}
            loading="eager"
          />
        </motion.div>
      )}
    </AnimatePresence>
  )
}

export default Background
