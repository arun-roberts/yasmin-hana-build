import styles from '../styles/pages/Faq.module.css'
import { FAQ } from '../public/FAQ'
import Link from 'next/link'

const Faq = () => {
    return (
        <>
            <main className={styles.faq}>
                <div className={styles.faq__hero}>
                </div>
                <h1 className={styles.faq__title}>
                    FAQs
                </h1>
                <ul className={styles.faq_faqs}>
                    {
                        FAQ.map((e, i) => (
                            <li 
                                key={i}
                                className={styles.faq_faqs_item}
                            >
                                <h2 className={styles.faq_faqs_item__q}>{e.q}</h2>
                                {
                                    e.a.map((a, i) => <p className={styles.faq_faqs_item__a} key={i}>{a}</p>)
                                }
                            </li>
                        ))
                    }
                    <li className={styles.faq_faqs__aside}>
                        Do you still have some questions? Head to the <Link href='/touch'><a className={styles.faq_faqs__link}>Contact Me</a></Link> page to get your questions answered.
                    </li>
                </ul>
            </main>
        </>
    )
}

export default Faq