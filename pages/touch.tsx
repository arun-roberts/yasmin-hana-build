import Link from "next/link"
import styles from '../styles/pages/Touch.module.css'

const Touch = () => {
    return (
        <>
            <section className={styles.subheader}>
                <h1 className={styles.subheader__title}>Get in touch</h1>
            </section>
            <main className={styles.touch}>
                <div className='container-one'>
                <div className='container-two'>
                <h2 className={styles.touch__subtitle}>
                    Whether you already know what you’re looking for or if you have some questions, you can contact me and we’ll take it from there.
                </h2>
                <p>
                    Please email or text me (SMS and Whatsapp). I do not answer unscheduled phone calls.
                </p>
                <Link href='mailto:Yasmin.Hana@protonmail.com'>
                    <a>Yasmin.Hana@protonmail.com</a>
                </Link>
                <Link href='tel:+61457894685'>
                    <a>+61 457 894 685 (text only)</a>
                </Link>
                <section className={styles.touch_details}>
                    <h3 className={styles.touch_details__title}>Please include the following details:</h3>
                    <ul className={styles.touch_details_list}>
                        <li className={styles.touch_details_list__item}>Your name.</li>
                        <li className={styles.touch_details_list__item}>Duration and service.</li>
                        <li className={styles.touch_details_list__item}>Your location.</li>
                        <li className={styles.touch_details_list__item}>Preferred date(s) and time(s).</li>
                        <li className={styles.touch_details_list__item}>
                            Any details, ideas or specific things that you’d like to include in our time together. You don’t have to know what you’re looking for, we can work that out together and create an experience tailored to your personal desires.
                        </li>
                        <li className={styles.touch_details_list__item}>Any questions.</li>
                    </ul>
                </section>
                <section>
                    <h3>Alternatively, please feel free to use the following template:</h3>
                    <p>
                        Hi Yasmin, <br/>My name is <span>*your name*</span>, I’m located at <span>*your location*</span>. I would like to organise a <span>*duration and kind of service*</span> session with you on <span>*preferred date*</span> at <span>*preferred time*</span>. <br/><span>*Any details/ specific requests/ interests / kinks / questions*</span>
                    </p>    
                </section>
                </div>
                </div>
            </main>
        </>
    )
}

export default Touch