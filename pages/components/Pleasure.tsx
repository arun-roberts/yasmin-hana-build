// Next.js imports
import Image from 'next/image'
import Link from 'next/link'
// Style module import
import styles from '../../styles/components/Pleasure.module.css'
// Image imports
import Y004 from '../../public/assets/images/Y004.jpg'
import Y006 from '../../public/assets/images/Y006.jpg'
import Y007 from '../../public/assets/images/Y007.jpg'
import Y008 from '../../public/assets/images/Y008.jpg'
import Y011 from '../../public/assets/images/Y011.jpg'



const Pleasure = () => {
    return <>
        <article className={styles.pleasure}>
            <section className={styles.pleasure_item}>
                <figure className={styles.pleasure_item_image}>
                    <Image
                        className={styles.pleasure_item_image__itself}
                        src={Y007}
                        sizes='50vw'
                        fill
                        alt='Yasmin'
                    />
                </figure>
                <div className={styles.pleasure_item_text}>
                    <h2 className={styles.pleasure_item_text__title}>The Social</h2>
                    <p className={styles.pleasure_item_text_priceList}>$250 p/h</p>
                    <p className={styles.pleasure_item_text__body}>
                        Let’s get to know each other over lunch or dinner, at one of my favourite spots in Melbourne. What I love about these meet ups is the sensual and intellectual connection it creates, nothing excites me more than learning about you and your passions. 
                    </p>
                </div>
            </section>
            <section className={styles.pleasure_item}>
                <figure className={styles.pleasure_item_image}>
                    <Image
                        className={styles.pleasure_item_image__itself}
                        src={Y006}
                        sizes='50vw'
                        fill
                        alt='Yasmin'
                    />
                </figure>
                <div className={styles.pleasure_item_text}>
                    <h2 className={styles.pleasure_item_text__title}>The Intimate</h2>
                    <dl className={styles.pleasure_item_text_priceList}>
                        <dt className={styles.pleasure_item_text_priceList__time}>1 hour</dt>
                        <dd className={styles.pleasure_item_text_priceList__price}>$600</dd>
                        <dt className={styles.pleasure_item_text_priceList__time}>1.5 hours</dt>
                        <dd className={styles.pleasure_item_text_priceList__price}>$800</dd>
                        <dt className={styles.pleasure_item_text_priceList__time}>2 hours</dt>
                        <dd className={styles.pleasure_item_text_priceList__price}>$1000</dd>
                        <dt className={styles.pleasure_item_text_priceList__time}>3 hours</dt>
                        <dd className={styles.pleasure_item_text_priceList__price}>$1300</dd>
                    </dl>
                    <p className={styles.pleasure_item_text__body}>
                        Time spent together at my incall location or at a 4-5 star hotel in the CBD and inner suburbs. Short but sweet, tell me your desires and let’s make the magic happen.
                    </p>
                </div>
            </section>
            <section className={styles.pleasure_item}>
                <figure className={styles.pleasure_item_image}>
                    <Image
                        className={styles.pleasure_item_image__itself}
                        src={Y008}
                        sizes='50vw'
                        fill
                        alt='Yasmin'
                    />
                </figure>
                <div className={styles.pleasure_item_text}>
                    <h2 className={styles.pleasure_item_text__title}>The Decadent</h2>
                    <dl className={styles.pleasure_item_text_priceList}>
                        <dt className={styles.pleasure_item_text_priceList__time}>4 hours</dt>
                        <dd className={styles.pleasure_item_text_priceList__price}>$1600</dd>
                        <dt className={styles.pleasure_item_text_priceList__time}>6 hours</dt>
                        <dd className={styles.pleasure_item_text_priceList__price}>$2000</dd>
                    </dl>
                    <p className={styles.pleasure_item_text__body}>
                        The time we will spend together will be equally split between being social and salacious. I love planning dates and always have a few ideas in mind. <Link className='red-link' href='/touch#touch'>Get in touch</Link> and based on our mutual interests, together we’ll work out the perfect date.
                    </p>
                </div>
            </section>
            <section className={styles.pleasure_item}>
                <figure className={styles.pleasure_item_image}>
                    <Image
                        className={styles.pleasure_item_image__itself}
                        src={Y011}
                        sizes='50vw'
                        fill
                        alt='Yasmin'
                    />
                </figure>
                <div className={styles.pleasure_item_text}>
                    <h2 className={styles.pleasure_item_text__title}>The Foodie</h2>
                    <dl className={styles.pleasure_item_text_priceList}>
                        <dt className={styles.pleasure_item_text_priceList__time}>4 hours</dt>
                        <dd className={styles.pleasure_item_text_priceList__price}>$2200</dd>
                        <dt className={styles.pleasure_item_text_priceList__time}>6 hours</dt>
                        <dd className={styles.pleasure_item_text_priceList__price}>$2500</dd>
                    </dl>
                    <p className={styles.pleasure_item_text__body}>
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
            <section className={styles.pleasure_item}>
                <figure className={styles.pleasure_item_image}>
                    <Image
                        className={styles.pleasure_item_image__itself}
                        src={Y004}
                        sizes='50vw'
                        fill
                        alt='Yasmin'
                    />
                </figure>
                <div className={styles.pleasure_item_text}>
                    <h3 className={styles.pleasure_item_text__title}>The Overnight</h3>
                    <dl className={styles.pleasure_item_text_priceList}>
                        <dd className={styles.pleasure_item_text_priceList__time}>
                            15 hours with a minimum of 7 hours of sleep
                        </dd>
                        <dt className={styles.pleasure_item_text_priceList__price}>
                            $3500
                        </dt>
                    </dl>
                    <p className={styles.pleasure_item_text__body}>
                        Let’s spend some quality time together, where we don’t have to worry about the clock because we have all night together. Perhaps a night out on the town followed by a sleepover and breakfast in bed?
                    </p>
                </div>
            </section>
            <ul className={styles.pleasure_aside}>
                <li className={styles.pleasure_aside_item}>
                    Weekends away, adventures, travel companion - please <Link href='/touch' className='red-link'>get in touch</Link> to discuss and arrange.
                </li>
                <li className={styles.pleasure_aside_item}>
                    The above rates are inclusive of travel within a 5km radius of the CBD.
                </li>
            </ul>
        </article>
    </>;
}

export default Pleasure