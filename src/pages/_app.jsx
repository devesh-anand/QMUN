import 'focus-visible'
import '@/styles/tailwind.css'
import Script from 'next/script'

export default function App({ Component, pageProps }) {

  return(
    <>
      <Script
      strategy='lazyOnload'
      src='https://www.googletagmanager.com/gtag/js?id=G-NFZ1F82H7Y' />

      <Script
      strategy='lazyOnload'
      src={`
        window.dataLayer = window.dataLayer || [];
      function gtag(){dataLayer.push(arguments);}
      gtag('js', new Date());

      gtag('config', 'G-NFZ1F82H7Y');`
      } />

   <Component {...pageProps} /></>
  )
}
