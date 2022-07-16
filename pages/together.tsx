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
                        <p className={styles.together_item_text__price}>$300 p/h</p>
                        <p className={styles.together_item_text__body}>
                            Let’s get to know each other over lunch or dinner, at one of my favourite spots in Melbourne.
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
                            <li>1 hour: <span>$600</span></li>
                            <li>2 hours: <span>$1100</span></li>
                            <li>3 hours: <span>$1600</span></li>
                        </ul>
                        <p className={styles.together_item_text__body}>
                            Time spent together at a 4 or 5 star hotel in the CBD and inner suburbs.
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
                        <p className={styles.together_item_text__body}>
                            The time we will spend together will be equally split between being social and salacious. I love planning dates and always have a few ideas in mind. Get in touch and based on our mutual interests, together we’ll work out the perfect date.
                        </p>
                        <dl className={styles.together_item_text_priceList}>
                            <dt className={styles.together_item_text_priceList__price}>4 hour date</dt>
                            <dd className={styles.together_item_text_priceList__price}>$2000</dd>
                            <dt className={styles.together_item_text_priceList__price}>6 hour date</dt>
                            <dd className={styles.together_item_text_priceList__price}>$2600</dd>
                        </dl>
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
                        <p className={styles.together_item_text__body}>
                            Cooking and sharing a home cooked meal are two of the greatest pleasures in life to me. During the first half of our session, I’ll whip up a meal for the two of us to enjoy while you sit back, relax and sip on a glass of whiskey. Or perhaps you’d like to join me in the kitchen?
                        <br/>
                        <br/>
                            With our stomachs and souls nourished with our creation, we can indulge in the bedroom during the second half of our time together.
                        <br/>
                        <br/>
                            When getting in contact, please include any allergies, dietary requirements, likes and dislikes so I can curate the perfect menu for us.
                        <br/>
                        <br/>
                            Please note that I required a week’s notice for the Foodie Date experience due to the amount of time involved in planning the menu and purchasing the ingredients.
                        </p>
                        <dl className={styles.together_item_text_priceList}>
                            <dt className={styles.together_item_text_priceList__price}>4 hours</dt>
                            <dd className={styles.together_item_text_priceList__price}>$2400</dd>
                            <dt className={styles.together_item_text_priceList__price}>6 hours</dt>
                            <dd className={styles.together_item_text_priceList__price}>$2800</dd>
                        </dl>
                    </div>
                </section>
                <section>
                    <h3 className={styles.together_item_text__title}>Overnight</h3>
                    <p className={styles.together_item_text__price}>$4000</p>
                    <p className={styles.together_item_text__body}>15 hours with a minimum of 7 hours of sleep</p>
                </section>
                <aside>
                    Weekends away, adventures, travel companion - please contact me to discuss and arrange.
                </aside>
                <aside>
                    The above rates are inclusive of travel within a 5km radius of the CBD.
                </aside>
                </div>
                </div>
            </main>
        </>
    )
}

export default Together