import { Head, Html, Main, NextScript } from 'next/document'
import { Header } from '@/components/Header'
import { Footer } from '@/components/Footer'

export default function Document() {
  return (
    <Html className="bg-[#FFF6E5] antialiased" lang="en">
      <Head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin="anonymous"
        />
        <link
          rel="stylesheet"
          href="https://fonts.googleapis.com/css2?family=Inter:wght@100..900&family=DM+Sans:wght@400;500;700&display=swap"
        />
      </Head>
      {/* <Header /> */}
      <body>
        <Main />
        <NextScript />
      </body>
      <Footer />
    </Html>
  )
}
