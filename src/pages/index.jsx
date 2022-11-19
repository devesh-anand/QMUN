import Head from 'next/head'
import { Hero } from '@/components/Hero'
import { Newsletter } from '@/components/Newsletter'
import { Schedule } from '@/components/Schedule'
import { Speakers } from '@/components/Speakers'
import { Sponsors } from '@/components/Sponsors'

export default function Home() {
  return (
    <>
      <Head>
        <title>Quintessence Youth Summit</title>
        <meta
          name="description"
          content="Quint Youth Summit Consists of 3 committes: UNGA, Lok Sabha and AIPPM."
        />
      </Head>
      <main className="bg-[#FFF6E5]">
        <Hero />
        <Speakers />
        <Schedule />
        <Sponsors />
        {/* <Newsletter /> */}
      </main>
    </>
  )
}
