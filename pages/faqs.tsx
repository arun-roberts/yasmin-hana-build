import styles from '../styles/pages/Faq.module.css'
import { FAQ } from '../public/FAQ'
import Footer from './components/Footer'
import Link from 'next/link'
import Image from 'next/image'
import { useContext } from 'react'
import AppContext from '../lib/context'

const Faq = () => {
    const value = useContext(AppContext)
    const { device }: { device: String } = value.state
    return (
        <>
            <main className={styles.faq}>
                <figure className={styles.faq_hero}>
                    <Image 
                        className={styles.faq_hero__image}
                        src={`/assets/${device}/Y002.jpg`}
                        layout='fill'
                        objectFit='cover'
                        alt='Yasmin'
                    />
                </figure>
                <section className={styles.faq_body}>
                    <h1 className={styles.faq_body__title}>
                        FAQs
                    </h1>
                    <ul className={styles.faq_body_faqs}>
                        {
                            FAQ.map((e, i) => (
                                <li 
                                    key={i}
                                    className={styles.faq_body_faqs_item}
                                >
                                    <h2 className={styles.faq_body_faqs_item__q}>{e.q}</h2>
                                    {
                                        e.a.map((a, i) => <p className={styles.faq_body_faqs_item__a} key={i}>{a}</p>)
                                    }
                                </li>
                            ))
                        }
                        <li className={styles.faq_body_faqs__aside}>
                            Do you still have some questions? Head to the <Link href='/touch'><a className={styles.faq_body_faqs__link}>Get In Touch</a></Link> page to get your questions answered.
                        </li>
                    </ul>
                </section>
            </main>
            <Footer />
        </>
    )
}

export default Faq