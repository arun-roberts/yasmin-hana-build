import Link from "next/link"
import Image from "next/image"
import Footer from "./components/Footer"
import styles from '../styles/pages/Touch.module.css'

const Touch = () => {
    return (
        <>
            <main className={styles.touch}>
                <figure className={styles.touch_hero}>
                    <Image 
                        className={styles.touch_hero__image}
                        src='/assets/Yasmin5.jpg'
                        layout='fill'
                        objectFit='cover'
                        alt='Yasmin'
                    />
                </figure>
                <section className={styles.touch_text}>
                    <h1 className={styles.touch_text__title}>Get in touch</h1>
                    <h2 className={styles.touch_text__subtitle}>
                        Whether you already know what you’re looking for or if you have some questions, you can contact me and we’ll take it from there.
                    </h2>
                    <p className={styles.touch_text__dont}>
                        Please email or text me (SMS and Whatsapp). I do not answer unscheduled phone calls.
                    </p>
                    <ul className={styles.touch_text_links}>
                        <li className={styles.touch_text_links__link}>
                            EMAIL: 
                            <Link href='mailto:Yasmin.Hana@protonmail.com'>
                                <a> yasmin.hana@protonmail.com</a>
                            </Link>
                        </li>
                        <li className={styles.touch_text_links__link}>
                            PHONE: 
                            <Link href='tel:+61457894685'>
                                <a> +61 457 894 685 (text only)</a>
                            </Link>
                        </li>
                    </ul>
                    <div className={styles.touch_text_details}>
                        <h3 className={styles.touch_text_details__instruct}>Please include the following details:</h3>
                        <ul className={styles.touch_text_details_list}>
                            <li className={styles.touch_text_details_list__item}>Your name.</li>
                            <li className={styles.touch_text_details_list__item}>Duration and service.</li>
                            <li className={styles.touch_text_details_list__item}>Your location.</li>
                            <li className={styles.touch_text_details_list__item}>Preferred date(s) and time(s).</li>
                            <li className={styles.touch_text_details_list__item}>
                                Any details, ideas or specific things that you’d like to include in our time together. You don’t have to know what you’re looking for, we can work that out together and create an experience tailored to your personal desires.
                            </li>
                            <li className={styles.touch_text_details_list__item}>Any questions.</li>
                        </ul>
                    </div>
                    <div className={styles.touch_text_example}>
                        <h3 className={styles.touch_text_example__instruct}>Alternatively, please feel free to use the following template:</h3>
                        <ul className={styles.touch_text_example_list}>
                            <li className={styles.touch_text_example_list__item}>
                                Hi Yasmin, 
                            </li>
                            <li className={styles.touch_text_example_list__item}>
                                My name is <span>your name</span>, I’m located at <span>your location</span>.
                            </li> 
                            <li className={styles.touch_text_example_list__item}>
                                I would like to organise a <span>duration and kind of service</span> session <br/> with you on <span>preferred date</span> at <span>preferred time</span>.
                            </li> 
                            <li className={styles.touch_text_example_list__item}>
                                <span>Any details/ specific requests/ interests / kinks / questions</span>
                            </li>
                        </ul>    
                    </div>
                </section>
            </main>
            <Footer />
        </>
    )
}

export default Touch