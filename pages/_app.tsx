import React from 'react'
import { NextPage } from 'next'
import { AppProps } from 'next/app'
import '../sass/main.scss'

const MyApp: NextPage<AppProps> = ({ Component, pageProps }) => {
  return <Component {...pageProps} />
}

export default MyApp
