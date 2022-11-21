import React from 'react'
import Navbar from '@/components/Navbar'
import { Footer } from '@/components/Footer'
import { Header } from '@/components/Header'

function about() {
  return (
    <div className="min-h-screen">
      <Navbar />
      <Header />
      <div className="my-auto py-8 px-8 text-left text-xl font-semibold text-gray-700 md:px-40">
        <h1 className="text-center text-3xl text-pr-text">
          About Quintessence Youth Summit 2022
        </h1>
        <br />
        <p>
          After successfully organising our annual flagship event of 2021, QMUN,
          Quintessence - The Official Debating Society of ADGITM is proud to
          announce our flagship event of this year, Quintessence Youth Summit
          2022. This event will be{' '}
          <span className="underline">
            an educational simulation of substantive committees that have been
            conceptualized specially to make sure that issues that are very
            pertinent to the youth today
          </span>{' '}
          are discussed and deliberated on.
        </p>

        <p>The following committees wil be simulated:</p>
        <br />
        <ul className="ml-16 list-decimal">
          <li>AIPPM</li>
          <li>Lok Sabha</li>
          <li>UNGA</li>
        </ul>

        <br />
        <h1 className="text-center text-3xl text-pr-text">Past Achievements</h1>
        <br />
        <p>
          Quintessence has established itself as one of the most active college
          societies in Delhi. We have worked in partnership with other debating
          societies of other prestigious colleges like Tark from Maharaja
          Surajmal Institute and Confero from SGBT Khalsa. Quintessence has
          conducted 5+ Model United Nations which saw participation from all
          corners of India and foreign nations as well.
        </p>
        <br />
        <p>
          Members of Quintessence actively participate in MUNs, Debates and
          Youth Summits across the country. Various members of Quintessence have
          achieved laurels and Quintessence has built a reputation and goodwill
          in the Indian debating circuit.
        </p>
        <br />
        <p>
          Members of Quintessence collectively have achieved over 25+ awards
          that too, in the past six months. Quintessence was featured on{' '}
          <span className="underline">NDTV</span>
          and has also collaborated with{' '}
          <span className="underline">
            Sanjeev Dawar Classes, Students For Liberty, UNIC, Horcrux Labs and
            GD Salwan Public School
          </span>{' '}
          etc.
        </p>
        <br />
      </div>
      <Footer />
    </div>
  )
}

export default about
