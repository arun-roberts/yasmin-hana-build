
import Head from 'next/head'

const Meta = ({title, keywords, description}: {title: string, keywords: string, description: string}) => {
    return (
        <Head>
          <title>{title}</title>
          <meta name='viewport' content='width=device-width, initial-scale=1' />
          {/* <meta name="keywords" content={keywords} />
          <meta name='description' content={description} /> */}
          <meta charSet='utf-8' />
        </Head>
    )
}

Meta.defaultProps = {
    title: 'Yasmin Hana — a page for adults.',
    keywords: '',
    description: ''
}

export default Meta