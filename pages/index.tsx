import type { NextPage } from 'next'
import Image from 'next/image'
import Pleasure from './pleasure'
import Footer from './components/Footer'
import styles from '../styles/pages/Home.module.css'
import { useEffect, useState, useContext } from 'react'
import AppContext from '../lib/context'


const Home: NextPage = () => {
    const [ consent, setConsent ] = useState(true)
    const [ fadeout, setFadeout ] = useState(false)
    const [ clicked, setClicked ] = useState(false)
    const value = useContext(AppContext)
    const { device }: { device: String } = value.state

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
        <main className={styles.home}>
            <figure className={styles.home_hero}>
                <Image 
                    className={styles.home_hero__image}
                    src={`/assets/${device}/Y003.jpg`}
                    layout='fill'
                    objectFit='cover'
                    alt='Yasmin'
                />
            </figure>
            <section className={styles.home_about}>
                <h2 className={styles.home_about__heading}>
                    MAY I TEMPT YOU FOR A SPELL? 
                </h2>
                <div className={styles.home_about_content}>
                    <figure className={styles.home_about_content_figure}>
                        <Image 
                            className={styles.home_about_content_figure__image}
                            src={`/assets/${device}/Y004.jpg`}
                            layout='fill'
                            objectFit='cover'
                            alt='Yasmin'
                        />
                    </figure>
                    <div className={styles.home_about_content_text}>
                        <p className={styles.home_about_content_text__item}>
                            Don’t be fooled by my petite stature, my cheeky grin is utterly luminous and my delicious curves… impactful.  Some  have even described me as intoxicating. Time stands still when you’re luxuriating in the warmth and guidance of my sweet, nurturing and thoughtful companionship. 
                        </p>
                        <p className={styles.home_about_content_text__item}>
                            Pure, unadulterated bliss.
                        </p>
                        <p className={styles.home_about_content_text__item}>
                            My mesmerising figure is kept in shape with joyous dance. Not your gym shark fitness guru type, I am down to earth yet indulgent. I inject passion into all pursuits, be it social justice, gardening or pleasure. I love Japanese whiskey, red wine, and fine dining dates as much as I adore dancing around the kitchen creating something nourishing and flavoured with lashings of love (and likely one of my homemade ferments). I yearn for connections that build over time and allow us to create new experiences together. An enthusiast for travel, art, vintage styles, documentaries, maths, science and the culinary arts; we’ll never run out of things to share. 
                        </p>
                        <p className={styles.home_about_content_text__item}>
                            The depth and variety  of human sexual expressions  does not easily shock me. Being entrusted  to create a safe space for lovers, to be a steady anchor in the sea of exploration is an honour and a privilege.  All desires, whether sweet and simple or dark and depraved, and all lovers from the more nervous novice or to the experienced adventurer, are worthy of care and attention. Nothing brings me more joy than to curate an experience where lovers can truly relax, release, revel in and receive the endless iterations of their erotic potential. 
                        </p>
                        <p className={styles.home_about_content_text__item}>
                            Your secret is safe with me. 
                        </p>
                    </div>
                </div>
            </section>
            <figure className={styles.home_break}>
                <Image 
                    className={styles.home_break__image}
                    src={`/assets/${device}/Y001.jpg`}
                    layout='fill'
                    objectFit='cover'
                    alt='Yasmin'
                />
            </figure>
            <section className={styles.home_menu}>
                <h2 className={styles.home_menu__title}>Pleasure menu</h2>
                <Pleasure />
            </section>
        </main>
        <Footer />
        {!consent && 
            <div className={fadeout ? `${styles.home_consent} ${styles.home_consent___fadeout}` : `${styles.home_consent}`}>
                <section className={styles.home_consent_popup}>
                    <div className={styles.home_consent_popup_content}>
                        <h2 className={styles.home_consent_popup_content__title}>This is a page for adults.</h2>
                        <p className={styles.home_consent_popup_content__exp}>You must be over the age of 18 to enter.</p>
                        <button className={styles.home_consent_popup_content__button} onClick={getClicked}>I understand</button>
                    </div>
                </section>
            </div>
        }
    </>
  )
}

export default Home

