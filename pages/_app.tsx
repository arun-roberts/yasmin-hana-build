import '../styles/globals.css'
import type { AppProps } from 'next/app'
import Layout from './components/Layout'
import React, { useEffect, useState } from 'react'
import AppContext from '../lib/context'

function MyApp({ Component, pageProps }: AppProps) {
  const [ device, setDevice ] = useState<string>('mobile')
  useEffect(() => {
    setDevice(
      window.matchMedia(`(min-width: 1200px)`).matches 
      ? 'desktop-sm'
      : window.matchMedia(`(min-width: 760px)`).matches 
      ? 'tablet'
      : 'mobile'
    ) 
  },[])
  return (
    <AppContext.Provider value={{ 
      state: { 
        device
      }}}>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </AppContext.Provider>
  )
}

export default MyApp
