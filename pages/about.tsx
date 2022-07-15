import Image from "next/image"
import styles from '../styles/pages/About.module.css'

const About = () => {
    return (
        <>
            <section className={styles.about_title}>
                <h1 className={styles.about_title__text}>
                    May I tempt you for a spell? 
                </h1>
            </section>
            <main className={styles.about}>
                <section className={styles.about_item}>
                    <figure className={styles.about_item_figure}>
                        <Image 
                            className={styles.about_figure__image}
                            src='/assets/Yasmin1.jpg'
                            layout='fill'
                            objectFit='contain'
                            alt='Yasmin'
                        />
                    </figure>
                    <div className={styles.about_item__body}>
                        Don’t be fooled by my petite stature, my cheeky grin is utterly luminous and my delicious curves… impactful.  Some  have even described me as intoxicating. Time stands still when you’re luxuriating in the warmth and guidance of my sweet, nurturing and thoughtful companionship. Pure unadulterated bliss.
                    </div>
                </section>
                <section className={styles.about_item}>
                    <figure className={styles.about_item_figure}>
                        <Image 
                            className={styles.about_figure__image}
                            src='/assets/Yasmin2.jpg'
                            layout='fill'
                            objectFit='contain'
                            alt='Yasmin'
                        />
                    </figure>
                    <div className={styles.about_item__body}>
                        My mesmerising figure is kept in shape with joyous dance. Not your gym shark fitness guru type, I am down to earth yet indulgent. I inject passion into all pursuits, be it social justice, gardening or pleasure. I love Japanese whiskey, red wine, and fine dining dates as much as I adore dancing around the kitchen creating something nourishing and flavoured with lashings of love (and likely one of my homemade ferments). I yearn for connections that build over time and allow us to create new experiences together. An enthusiast for travel, art, vintage styles, documentaries, maths, science and the culinary arts we’ll never run out of things to share. 
                    </div>
                </section>
                <section className={styles.about_item}>
                    <figure className={styles.about_item_figure}>
                        <Image 
                            className={styles.about_figure__image}
                            src='/assets/Yasmin3.jpg'
                            layout='fill'
                            objectFit='contain'
                            alt='Yasmin'
                        />
                    </figure>
                    <div className={styles.about_item__body}>
                        The depth and variety  of human sexual expressions  does not easily shock me. Being entrusted  to create a safe space for lovers, to be a steady anchor in the sea of exploration is an honour and a privilege.  All desires, whether sweet and simple or dark and depraved, and all lovers from the more nervous novice or to the experienced adventurer, are worthy of care and attention. Nothing brings me more joy than to curate an experience where lovers can truly relax, release, revel in and receive the endless iterations of their erotic potential. Your secret is safe with me. 
                    </div>
                </section>
            </main>
        </>
    )
}

export default About
