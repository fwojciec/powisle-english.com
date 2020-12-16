import * as React from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Translations } from '../translations'

interface Props {
  translations: Translations
  type: 'success' | 'error' | 'ready'
}

const Notifiction: React.FC<Props> = ({ translations, type }) => {
  return (
    <AnimatePresence>
      {(type === 'success' || type == 'error') && (
        <motion.div
          className={`notification notification-${type}`}
          initial={{ top: '-5em' }}
          animate={{ top: '2em' }}
          exit={{ top: '-5em' }}
        >
          <h3 className="notification--msg">
            {type === 'success'
              ? translations.notificationSuccess
              : translations.notificationError}
          </h3>
        </motion.div>
      )}
    </AnimatePresence>
  )
}

export default Notifiction
