import React from 'react'
import Image from 'next/image'
import { m as motion, AnimatePresence } from 'framer-motion'

interface Props {
  variant?: Page
  on: boolean
}

const Background: React.FC<Props> = ({ variant, on }) => {
  function getPath(variant: Page) {
    switch (variant) {
      case 'bio':
        return '/assets/img/pic01.jpg'
      case 'contact':
        return '/assets/img/pic03.jpg'
      default:
        return '/assets/img/bg.jpg'
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
            unoptimized
          />
        </motion.div>
      )}
    </AnimatePresence>
  )
}

export default Background
