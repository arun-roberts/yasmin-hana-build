import type { NextPage } from 'next'
import Image from 'next/image'
import Pleasure from './pleasure'
import styles from '../styles/pages/Home.module.css'

const Home: NextPage = () => {
  return (
    <>
        <figure className={styles.home_hero}>
            <Image 
                className={styles.home_hero__image}
                src='/assets/Yasmin3.jpg'
                layout='fill'
                objectFit='cover'
                alt='Yasmin'
            />
        </figure>
        <main className={styles.home}>
            <section className={styles.home_about}>
                <figure className={styles.home_about_figure}>
                    <Image 
                        className={styles.home_about_figure__image}
                        src='/assets/Yasmin4.jpg'
                        layout='fill'
                        objectFit='cover'
                        alt='Yasmin'
                    />
                </figure>
                <div className={styles.home_about_text}>
                    <h2 className={styles.home_about_text__heading}>
                        May I tempt you for a spell? 
                    </h2>
                    <p className={styles.home_about_text__body}>
                        Don’t be fooled by my petite stature, my cheeky grin is utterly luminous and my delicious curves… impactful.  Some  have even described me as intoxicating. Time stands still when you’re luxuriating in the warmth and guidance of my sweet, nurturing and thoughtful companionship. Pure unadulterated bliss.
                    </p>
                    <p className={styles.home_about_text__body}>
                        My mesmerising figure is kept in shape with joyous dance. Not your gym shark fitness guru type, I am down to earth yet indulgent. I inject passion into all pursuits, be it social justice, gardening or pleasure. I love Japanese whiskey, red wine, and fine dining dates as much as I adore dancing around the kitchen creating something nourishing and flavoured with lashings of love (and likely one of my homemade ferments). I yearn for connections that build over time and allow us to create new experiences together. An enthusiast for travel, art, vintage styles, documentaries, maths, science and the culinary arts we’ll never run out of things to share. 
                    </p>
                    <p className={styles.home_about_text__body}>
                        The depth and variety  of human sexual expressions  does not easily shock me. Being entrusted  to create a safe space for lovers, to be a steady anchor in the sea of exploration is an honour and a privilege.  All desires, whether sweet and simple or dark and depraved, and all lovers from the more nervous novice or to the experienced adventurer, are worthy of care and attention. Nothing brings me more joy than to curate an experience where lovers can truly relax, release, revel in and receive the endless iterations of their erotic potential. Your secret is safe with me. 
                    </p>
                </div>
            </section>
            <section className={styles.home_break}>
                <div className={styles.home_break_container}>
                    <h1 className={styles.home_break_container__title}>Pleasure menu</h1>
                </div>
            </section>
            <section className={styles.home_menu}>
                <Pleasure />
            </section>
        </main>
    </>
  )
}

export default Home

