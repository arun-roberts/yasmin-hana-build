// Next.js imports
import type { NextPage } from 'next'
import Image from 'next/image'
// Component imports
import Pleasure from './components/Pleasure'
import Footer from './components/Footer'
// Styling imports
import styles from '../styles/pages/Home.module.css'
import Y001 from '../public/assets/images/Y001.jpg'
import Y003 from '../public/assets/images/Y003.jpg'
import Y004 from '../public/assets/images/Y004.jpg'

const Home: NextPage = () => {

  return (
    <>
        <main className={styles.home}>
            <figure className={styles.home_hero}>
                <Image 
                    className={styles.home_hero__image}
                    src={Y003}
                    sizes='100vw'
                    fill
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
                            src={Y004}
                            sizes='100vw'
                            fill                            
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
                    src={Y001}
                    sizes='100vw'
                    fill
                    alt='Yasmin'
                />
            </figure>
            <section id='pleasure-menu' className={styles.home_menu}>
                <h2 className={styles.home_menu__title}>Pleasure menu</h2>
                <Pleasure />
            </section>
        </main>
        <Footer />
    </>
  )
}

export default Home

