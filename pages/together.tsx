import Image from 'next/image'
import styles from '../styles/pages/Together.module.css'

const Together = () => {
    return (
        <>
            <section className={styles.subheader}>
                <h1 className={styles.subheader__title}>Pleasure menu</h1>
            </section>
            <main className={styles.together}>
                <div className='container-one'>
                <div className='container-two'>
                <section className={styles.together_item}>
                    <figure className={styles.together_item__image}>
                        <Image
                            src='/assets/Yasmin7.jpg'
                            layout='fill'
                            objectFit='cover'
                            alt='Yasmin'
                        />
                    </figure>
                    <div className={styles.together_item_text}>
                        <h2 className={styles.together_item_text__title}>Social</h2>
                        <p className={styles.together_item_text_priceList}>$300 p/h</p>
                        <p className={styles.together_item_text__body}>
                            Let’s get to know each other over lunch or dinner, at one of my favourite spots in Melbourne. What I love about these meet ups is the sensual and intellectual connection it creates, nothing excites me more than learning about you and your passions. 
                        </p>
                    </div>
                </section>
                <section className={styles.together_item}>
                    <figure className={styles.together_item__image}>
                        <Image
                            src='/assets/Yasmin6.jpg'
                            layout='fill'
                            objectFit='cover'
                            alt='Yasmin'
                        />
                    </figure>
                    <div className={styles.together_item_text}>
                        <h2 className={styles.together_item_text__title}>Salacious</h2>
                        <ul className={styles.together_item_text_priceList}>
                            <li className={styles.together_item_text_priceList__time}>1 hour: <span className={styles.together_item_text_priceList__price}>$600</span></li>
                            <li className={styles.together_item_text_priceList__time}>2 hours: <span className={styles.together_item_text_priceList__price}>$1100</span></li>
                            <li className={styles.together_item_text_priceList__time}>3 hours: <span className={styles.together_item_text_priceList__price}>$1600</span></li>
                        </ul>
                        <p className={styles.together_item_text__body}>
                            Time spent together at a 4 or 5 star hotel in the CBD and inner suburbs. Short but sweet, tell me your desires and let’s make the magic happen.
                        </p>
                    </div>
                </section>
                <section className={styles.together_item}>
                    <figure className={styles.together_item__image}>
                        <Image
                            src='/assets/Yasmin8.jpg'
                            layout='fill'
                            objectFit='cover'
                            alt='Yasmin'
                        />
                    </figure>
                    <div className={styles.together_item_text}>
                        <h2 className={styles.together_item_text__title}>Mixed</h2>
                        <dl className={styles.together_item_text_priceList}>
                            <dt className={styles.together_item_text_priceList__time}>4 hour date</dt>
                            <dd className={styles.together_item_text_priceList__price}>$2000</dd>
                            <dt className={styles.together_item_text_priceList__time}>6 hour date</dt>
                            <dd className={styles.together_item_text_priceList__price}>$2600</dd>
                        </dl>
                        <p className={styles.together_item_text__body}>
                            The time we will spend together will be equally split between being social and salacious. I love planning dates and always have a few ideas in mind. Get in touch and based on our mutual interests, together we’ll work out the perfect date.
                        </p>
                    </div>
                </section>
                <section className={styles.together_item}>
                    <figure className={styles.together_item__image}>
                        <Image
                            src='/assets/Yasmin11.jpg'
                            layout='fill'
                            objectFit='cover'
                            alt='Yasmin'
                        />
                    </figure>
                    <div className={styles.together_item_text}>
                        <h2 className={styles.together_item_text__title}>Foodie date</h2>
                        <dl className={styles.together_item_text_priceList}>
                            <dt className={styles.together_item_text_priceList__time}>4 hours</dt>
                            <dd className={styles.together_item_text_priceList__price}>$2400</dd>
                            <dt className={styles.together_item_text_priceList__time}>6 hours</dt>
                            <dd className={styles.together_item_text_priceList__price}>$2800</dd>
                        </dl>
                        <p className={styles.together_item_text__body}>
                            Cooking and sharing a home cooked meal are two of the greatest pleasures in life. For  half of our session, I’ll be in the kitchen whipping up a meal for the two of us to enjoy while you sit back, relax and sip on a glass of whiskey. Or perhaps you’d like to join me in the kitchen?
                        <br/>
                        <br/>
                            For the other half we can indulge in the bedroom (or anywhere else for that matter). The order of these two activities depends on you - would you like to work up an appetite first, or relax over a nice meal before transitioning into other indulgent pursuits?
                        <br/>
                        <br/>
                            Please note that I require a week’s notice for The Foodie experience so I can curate the perfect menu for us.
                        </p>
                    </div>
                </section>
                <section className={styles.together_item}>
                    <figure className={styles.together_item__image}>
                        <Image
                            src='/assets/Yasmin4.jpg'
                            layout='fill'
                            objectFit='cover'
                            alt='Yasmin'
                        />
                    </figure>
                    <div className={styles.together_item_text}>
                        <h3 className={styles.together_item_text__title}>Overnight</h3>
                        <dl className={styles.together_item_text_priceList}>
                            <dd className={styles.together_item_text_priceList__time}>
                                15 hours with a minimum of 7 hours of sleep
                            </dd>
                            <dt className={styles.together_item_text_priceList__price}>
                                $4000
                            </dt>
                        </dl>
                        <p className={styles.together_item_text__body}>
                            Let’s spend some quality time together, where we don’t have to worry about the clock because we have all night together. Perhaps a night out on the town followed by a sleepover and breakfast in bed?
                        </p>
                    </div>
                </section>
                <ul className={styles.together_aside}>
                    <li className={styles.together_aside__item}>
                        Weekends away, adventures, travel companion - please contact me to discuss and arrange.
                    </li>
                    <li className={styles.together_aside__item}>
                        The above rates are inclusive of travel within a 5km radius of the CBD.
                    </li>
                </ul>
                </div>
                </div>
            </main>
        </>
    )
}

export default Together