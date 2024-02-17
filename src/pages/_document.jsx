import { Html, Head, Main, NextScript } from 'next/document'

export default function Document() {
    return (
        <Html lang="ja">
            <Head>
                <meta name='description' content='Taiki Kureshima のポートフォリオサイトです。' />
                <link rel="stylesheet" href="https://use.typekit.net/ztj2kbk.css"></link>
                <link rel="apple-touch-icon" sizes="180x180" href="/favicons/apple-touch-icon.png" />
                <link rel="icon" type="image/png" sizes="32x32" href="/favicons/favicon-32x32.png" />
                <link rel="icon" type="image/png" sizes="16x16" href="/favicons/favicon-16x16.png" />
                <link rel="icon" type="image/x-icon" sizes="16x16" href="/favicons/favicon.ico" />
                <link rel="manifest" href="/favicons/site.webmanifest" />
                <link rel="mask-icon" href="/favicons/safari-pinned-tab.svg" color="#5bbad5" />
                <meta name="msapplication-TileColor" content="#da532c" />
                <meta name="theme-color" content="#ffffff" />
            </Head>
            <body className='overflow-x-hidden'>
                <Main />
                <NextScript />
            </body>
        </Html>
    )
}
