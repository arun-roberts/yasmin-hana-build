
import Head from 'next/head'

const Meta = ({title, keywords, description}: {title: string, keywords: string, description: string}) => {
    return (
        <Head>
          <title>{title}</title>
          <meta name='viewport' content='width=device-width, initial-scale=1' />
          <meta name="keywords" content={keywords} />
          <meta name='description' content={description} />
          <meta charSet='utf-8' />
        </Head>
    )
}

Meta.defaultProps = {
    title: 'Yasmin Hana — a page for adults.',
    keywords: 'Melbourne escort, Escort, sex worker, fly me to you, girlfriend experience, erotic massage, companion, yasmin companion, yasmin hana companion, yasmin hana escort, yasmin escort, dominatrix, kink friendly escort, kinky services, queer escort, bisexual, pansexual, cross dressing, foot fetish, overnight, dinner date, disability, neurodivergent, independent private escort',
    description: ''
}

export default Meta