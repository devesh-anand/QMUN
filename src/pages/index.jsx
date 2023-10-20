import { useState, useEffect, useRef } from 'react'
import Head from 'next/head'
import { Footer } from '@/components/Footer'
import dynamic from 'next/dynamic'
import Hero from '@/components/Hero'
// const Hero = dynamic(() => import('@/components/Hero'), { ssr: false })
import { Schedule } from '@/components/Schedule'
import { Speakers } from '@/components/Speakers'
import { Sponsors } from '@/components/Sponsors'
import Navbar from '@/components/Navbar'
import * as THREE from 'three'
import FOG from 'vanta/dist/vanta.fog.min'

export default function Home() {
  const [vantaEffect, setVantaEffect] = useState(null)
  const myRef = useRef(null)
  useEffect(() => {
    if (!vantaEffect) {
      setVantaEffect(
        FOG({
          el: myRef.current,
          THREE: THREE,
          zoom: 1,
          speed: 0.6,
          blurFactor: 0.15,
          highlightColor: 0xffeed2,
          midtoneColor: 0xfffd2b,
          lowlightColor: 0xf053b0,
          baseColor: 0xfff6e5,
        })
      )
    }
    return () => {
      if (vantaEffect) vantaEffect.destroy()
    }
  }, [vantaEffect])
  return (
    <>
      <Head>
        <link
          rel="icon"
          type="image/x-icon"
          sizes="16x16"
          href="/favicon.ico"
        />
        <title>Quintessence Youth Summit</title>
        <meta
          name="description"
          content="Quintessence Youth Summit Consists of 5 committes: Lok Sabha, AIPPM, UNGA, UNHRC, IP. It is our utmost pleasure to welcome you to the annual flagship event of Quintessence - The Offical debating Society of ADGITM."
        />

        <meta property="og:title" content="Quintessence Youth Summit" />
        <meta
          property="og:description"
          content="Quintessence Youth Summit Consists of 5 committes: Lok Sabha, AIPPM, UNGA, UNHRC, IP. It is our utmost pleasure to welcome you to the annual flagship event of Quintessence - The Offical debating Society of ADGITM."
        />
        <meta property="og:image" content="/og.png" />
      </Head>
      <main className="bg-[#FFF6E5]" ref={myRef}>
        <Navbar />
        <Hero />
        {/* <Speakers /> */}
        {/* <Schedule /> */}
        {/* <Sponsors /> */}
        <Footer />
      </main>
    </>
  )
}
