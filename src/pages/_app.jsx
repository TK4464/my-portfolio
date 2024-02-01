import '@/styles/globals.css'
import Head from 'next/head';
import { AnimatePresence } from 'framer-motion';
import { usePathname } from 'next/navigation';
import { useEffect, useState } from 'react';

// 使用していないためコメントアウト
// import { Inter } from 'next/font/google'
// import { Noto_Sans_JP } from 'next/font/google'

// const notojp = Noto_Sans_JP({
//     weight: ["400", "500", "600", "700", "800", "900"],
//     subsets: ["latin"],
//     display: "swap",
// });
// const inter = Inter({ subsets: ['latin'] })

export default function App({ Component, pageProps }) {
    const router = usePathname();

    return (
        <>
            <Head>
                <title>Taiki Kureshima Portfolio</title>
                <meta name='viewport' content='width=device-width, initial-scale=1.0' />
            </Head>
            <AnimatePresence mode='wait' onExitComplete={() => window.scrollTo({ top: 0, behavior: "instant" })}>
                <Component key={router} {...pageProps} />
            </AnimatePresence>
        </>
    )
}
