import { useState, useEffect, useRef } from 'react'
import { Header } from '@/components/Header'
import { Button } from '@/components/Button'
import { Container } from '@/components/Container'

export default function Hero() {
  return (
    <div>
      <Header />
      <div className="absolute inset-x-0 -top-48 -bottom-14 overflow-hidden ">
        <div className="absolute inset-x-0 top-0 h-40 bg-gradient-to-b from-white" />
      </div>
      <Container className="relative">
        <div className="mx-auto max-w-2xl lg:max-w-4xl lg:px-12">
          <h1 className="text-center font-display text-5xl font-bold tracking-tighter text-pr-text sm:text-7xl">
            <span className="sr-only">Quintessence Youth Summit - </span>
            Quintessence Youth Summit
          </h1>
          <div className="mt-6 space-y-6 text-center font-display text-2xl tracking-tight text-gray-900">
            <p>
              The youth of today are the leaders of tomorrow. We can change the
              world and make it a better place. It is in your hands to make a
              difference. Greetings! It is our utmost pleasure to welcome you to
              the annual flagship event of{' '}
              <a href="https://www.instagram.com/quintessence_adgitm/">
                <span className="text-pr-text">Quintessence</span> -{' '}
                <span className="text-pr-text">
                  The Offical debating Society of ADGITM.
                </span>
              </a>
            </p>
            <p>
              Presenting to you,{' '}
              <span className="font-semibold text-sec-text">
                Quintessence Youth Summit 2022
              </span>
              .
            </p>
          </div>
          <Button
            href="https://forms.gle/ddiPQDXygEAQQxhy9"
            className="mt-10 w-full sm:hidden"
          >
            Register
          </Button>
          <div className="flex justify-center">
            <dl className="mt-10 grid grid-cols-2 gap-y-6 gap-x-10 sm:mt-16 sm:gap-y-10 sm:gap-x-16 sm:text-center lg:auto-cols-auto lg:grid-flow-col lg:grid-cols-none lg:justify-start lg:text-center ">
              {[
                ['Committees', '3'],
                ['People Attending', '150+'],
                ['Venue', 'ADGITM, Delhi'],
                // ['Location', 'Los Angeles'],
              ].map(([name, value]) => (
                <div key={name}>
                  <dt className="font-mono text-sm text-red-900">{name}</dt>
                  <dd className="mt-0.5 text-2xl font-semibold tracking-tight text-pr-text">
                    {value}
                  </dd>
                </div>
              ))}
            </dl>
          </div>
        </div>
      </Container>
    </div>
  )
}
