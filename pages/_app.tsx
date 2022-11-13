import '../styles/globals.css'
import type { AppProps } from 'next/app'
import Layout from './components/Layout'
import React, { useEffect, useState } from 'react'
import Meta from './components/Meta'
import Consent from './components/Consent'

function MyApp({ Component, pageProps }: AppProps) {
  const [ consent, setConsent ] = useState(true)
    const [ fadeout, setFadeout ] = useState(false)
    const [ clicked, setClicked ] = useState(false)

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

    const getClicked = () => {
        setFadeout(true)
        setTimeout(() => {
            setClicked(true)
        }, 920)
    }
  return (
    <>
      <Layout>
        <Meta />
        <Component {...pageProps} />
      </Layout>
      {!consent && <Consent fadeout={fadeout} getClicked={getClicked} />}
    </>
  )
}

export default MyApp
