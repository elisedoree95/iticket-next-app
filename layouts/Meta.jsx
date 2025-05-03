import Head from 'next/head'


const Meta = ({title, description}) => {
    return (
        <Head>
            <title>Go-Foot {title && `| ${title}` }</title>
            <meta name="description" content={description} />
            <link rel="icon" href="images/fecafoot.png" />
        </Head>
    )
}

export default Meta