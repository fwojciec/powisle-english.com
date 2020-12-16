import * as React from 'react'
import Image from 'next/image'
import { m as motion, AnimatePresence } from 'framer-motion'

interface Props {
  variant?: Page
  on: boolean
}

const Background: React.FC<Props> = ({ variant, on }) => {
  function getPath(variant: Page) {
    switch (variant) {
      case 'testimonials':
        return '/assets/img/testimonials.jpg'
      case 'bio':
        return '/assets/img/bio.jpg'
      case 'services':
        return '/assets/img/services.jpg'
      case 'where':
        return '/assets/img/where.jpg'
      default:
        return '/assets/img/start.jpg'
    }
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
            src={getPath(variant)}
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
