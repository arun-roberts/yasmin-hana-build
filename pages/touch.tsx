import Link from "next/link"
import Image from "next/image"
import Footer from "./components/Footer"
import styles from '../styles/pages/Touch.module.css'
import Y005 from '../public/assets/desktop-sm/Y005.jpg'

const Touch = () => {
    return <>
        <main className={styles.touch}>
            <figure className={styles.touch_hero}>
                <Image 
                    className={styles.touch_hero__image}
                    src={Y005}
                    sizes='100vw'
                    fill
                    alt='Yasmin'
                />
            </figure>
            <section className={styles.touch_text}>
                <h1 className={styles.touch_text__title}>Get in touch</h1>
                <h2 className={styles.touch_text__subtitle}>
                    Whether you already know what you’re looking for or you still have some questions, you can email or text me and we’ll take it from there.
                </h2>
                <p className={styles.touch_text__dont}>
                    Please keep in mind that I do not answer unscheduled phone calls.
                </p>
                <ul className={styles.touch_text_links}>
                    <li className={styles.touch_text_links__link}>
                        Email: 
                        <Link href='mailto:Yasmin.Hana@protonmail.com'>
                             yasmin.hana@protonmail.com
                        </Link>
                    </li>
                    <li className={styles.touch_text_links__link}>
                        Phone: 
                        <Link href='sms://61457894685;'>
                             +61 457 894 685 (text only)
                        </Link>
                    </li>
                </ul>
                <div className={styles.touch_text_details}>
                    <h3 className={styles.touch_text_details__instruct}>Please include the following details:</h3>
                    <ul className={styles.touch_text_details_list}>
                        <li className={styles.touch_text_details_list__item}>Your name.</li>
                        <li className={styles.touch_text_details_list__item}>Duration and service.</li>
                        <li className={styles.touch_text_details_list__item}>Incall or your location.</li>
                        <li className={styles.touch_text_details_list__item}>Preferred date(s) and time(s).</li>
                        <li className={styles.touch_text_details_list__item}>
                            Any details, ideas or specific things that you’d like to include in our time together. You don’t have to know what you’re looking for. We can work that out together and create an experience tailored to your personal desires.
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
                            I would like to organise a <span>kind of service and duration</span> session with you on <span>preferred date</span> at <span>preferred time</span>.
                        </li> 
                        <li className={styles.touch_text_example_list__item}>
                            <span>Any details / specific requests / interests / kinks / questions</span>
                        </li>
                    </ul>    
                    <Link
                        href='sms://61457894685;?&body=Hi%20Yasmin,%20My%20name%20is%20*your%20name*,%20I’m%20located%20at%20*your%20location*.%20I%20would%20like%20to%20organise%20a%20*kind%20of%20service%20and%20duration*%20session%20with%20you%20on%20*preferred%20date*%20at%20*preferred%20time*.%20*Any%20details/%20specific%20requests/%20interests%20/%20kinks%20/%20questions*.'
                        className={styles.touch_text_example__link}>
                        Send me a text using this template.
                    </Link>
                </div>
            </section>
        </main>
        <Footer />
    </>;
}

export default Touch