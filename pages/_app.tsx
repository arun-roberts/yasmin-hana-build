// Next.js imports
import type { AppProps } from 'next/app'
// React imports
import React, { useEffect, useState } from 'react'
// Component imports
import Layout from './components/Layout'
import Meta from './components/Meta'
import Consent from './components/Consent'
// Style imports
import { Manrope } from '@next/font/google'
import '../styles/globals.css'

// Initialise manrope font
const manrope = Manrope()

function MyApp({ Component, pageProps }: AppProps) {
  const [ consent, setConsent ] = useState(true)
  const [ fadeout, setFadeout ] = useState(false)
  const [ clicked, setClicked ] = useState(false)

  // Checks local storage for existence of consent boolean. 
  // Displays popup if unavailable. Displays page if consent === true.
  useEffect(() => {
      const askForIt = localStorage.getItem('consent')
      console.log(askForIt)
      if (askForIt === null) {
          if (clicked) {
              localStorage.setItem('consent', JSON.stringify(true)) 
              setConsent(true)
              document.body.classList.remove('stop-scrolling')
          } else {
              setConsent(false)
              document.body.classList.add('stop-scrolling')
          }
      }
  }, [clicked])

  // Fades out popup
  const getClicked = () => {
      setFadeout(true)
      setTimeout(() => {
          setClicked(true)
      }, 920)
  }
  return (
    <>
      <style jsx global>{`
        html {
          font-family: ${manrope.style.fontFamily};
        }
      `}</style>
      <Layout>
        <Meta />
        <Component {...pageProps} />
      </Layout>
      {/* Popup asking users to confirm their age */}
      {!consent && <Consent fadeout={fadeout} getClicked={getClicked} />}
    </>
  )
}

export default MyApp
