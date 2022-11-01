import '../styles/globals.css'
import type { AppProps } from 'next/app'
import Layout from './components/Layout'
import React, { useEffect, useState } from 'react'
import Meta from './components/Meta'

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
      {!consent && 
        <div className={fadeout ? 'consent consent___fadeout' : 'consent'}>
            <section className='consent_popup'>
                <div className='consent_popup_content'>
                    <h2 className='consent_popup_content__title'>This is a page for adults.</h2>
                    <p className='consent_popup_content__exp'>You must be over the age of 18 to enter.</p>
                    <button className='consent_popup_content__button' onClick={getClicked}>I understand</button>
                </div>
            </section>
        </div>
      }
    </>
  )
}

export default MyApp
