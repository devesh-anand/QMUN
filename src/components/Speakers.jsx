import { useEffect, useId, useState } from 'react'
import Image from 'next/image'
import { Tab } from '@headlessui/react'
import clsx from 'clsx'

import { Container } from '@/components/Container'
import { DiamondIcon } from '@/components/DiamondIcon'

import Committees from '@/components/Committee'

const days = [
  {
    name: 'Indian',
    date: 'AIPPM',
    dateTime: '2022-12-17',
  },
  {
    name: 'Indian',
    date: 'Lok Sabha',
    dateTime: '2022-12-17',
  },
  {
    name: 'International',
    date: 'UNGA',
    dateTime: '2022-12-17',
  },
]

let data = [
  {
    committee: 'All India Political Parties Meet',
    agenda: 'Deliberation upon Uniform Civil Code in light of recent events.',
    url: '/aippm',
    eb: [
      {
        name: 'Mr. Shivansh Srivastava',
        role: 'Moderator',
        imageUrl: '/eb/shivansh-srivastava.jpg',
      },
      {
        name: 'Mr. Aditya Sharma',
        role: 'Co-Moderator',
        imageUrl: './eb/aditya-sharma.jpg',
      },
      {
        name: 'Mr. Manish Sharma',
        role: 'Political Analyst',
        imageUrl: '/eb/manish-sharma.jpg',
      },
    ],
  },
  {
    committee: 'Lok Sabha',
    agenda:
      'Deliberation on the issue of Women Safety with special emphasis on increasing crime rate against women.',
    url: '/lok-sabha',
    eb: [
      {
        name: 'Ms. Hitanshi Goel',
        role: 'Speaker',
        imageUrl: '/eb/hitanshi-goel.jpeg',
      },
      {
        name: 'Ms. Rashmi Kayat',
        role: 'Deputy Speaker',
        imageUrl: '/eb/rashmi-kayat.jpeg',
      },
      {
        name: 'Ms. Hiya Mongia',
        role: 'Political Advisor',
        imageUrl: '/eb/hiya-mongia.jpeg',
      },
    ],
  },
  {
    committee: 'United Nations General Assembly',
    agenda: 'Deliberation on resolving borderline disputes.',
    url: '/unga',
    eb: [
      {
        name: 'Mr. Neel Taneja',
        role: 'Chairperson',
        imageUrl: '/eb/neel-taneja.jpg',
      },
      {
        name: 'Mr. Siddhant Magon',
        role: 'Co-Chairperson',
        imageUrl: '/eb/siddhant-magon.jpeg',
      },
      {
        name: 'Mr. Vanshaj Arora',
        role: 'Rapporteur',
        imageUrl: '/eb/vanshaj-arora.jpeg',
      },
    ],
  },
]

function ImageClipPaths({ id, ...props }) {
  return (
    <svg aria-hidden="true" width={0} height={0} {...props}>
      <defs>
        <clipPath id={`${id}-0`} clipPathUnits="objectBoundingBox">
          <path d="M0,0 h0.729 v0.129 h0.121 l-0.016,0.032 C0.815,0.198,0.843,0.243,0.885,0.243 H1 v0.757 H0.271 v-0.086 l-0.121,0.057 v-0.214 c0,-0.032,-0.026,-0.057,-0.057,-0.057 H0 V0" />
        </clipPath>
        <clipPath id={`${id}-1`} clipPathUnits="objectBoundingBox">
          <path d="M1,1 H0.271 v-0.129 H0.15 l0.016,-0.032 C0.185,0.802,0.157,0.757,0.115,0.757 H0 V0 h0.729 v0.086 l0.121,-0.057 v0.214 c0,0.032,0.026,0.057,0.057,0.057 h0.093 v0.7" />
        </clipPath>
        <clipPath id={`${id}-2`} clipPathUnits="objectBoundingBox">
          <path d="M1,0 H0.271 v0.129 H0.15 l0.016,0.032 C0.185,0.198,0.157,0.243,0.115,0.243 H0 v0.757 h0.729 v-0.086 l0.121,0.057 v-0.214 c0,-0.032,0.026,-0.057,0.057,-0.057 h0.093 V0" />
        </clipPath>
      </defs>
    </svg>
  )
}

export function Speakers() {
  let id = useId()
  let [tabOrientation, setTabOrientation] = useState('horizontal')

  useEffect(() => {
    let lgMediaQuery = window.matchMedia('(min-width: 1024px)')

    function onMediaQueryChange({ matches }) {
      setTabOrientation(matches ? 'vertical' : 'horizontal')
    }

    onMediaQueryChange(lgMediaQuery)
    lgMediaQuery.addEventListener('change', onMediaQueryChange)

    return () => {
      lgMediaQuery.removeEventListener('change', onMediaQueryChange)
    }
  }, [])

  return (
    <section
      id="speakers"
      aria-labelledby="speakers-title"
      className="py-20 sm:py-32"
    >
      <ImageClipPaths id={id} />
      <Container>
        <div className="mx-auto max-w-2xl lg:mx-0">
          <h2
            id="speakers-title"
            className="font-display text-4xl font-medium tracking-tighter text-pr-text sm:text-5xl"
          >
            Committees
          </h2>
          <p className="mt-4 font-display text-2xl tracking-tight text-rose-900">
            Quintessence Youth Summit comprises of 3 committees this year. The
            details are mentioned below:
          </p>
        </div>
        <Tab.Group
          as="div"
          className="mt-14 grid grid-cols-1 items-start gap-y-8 gap-x-8 sm:mt-16 sm:gap-y-16 lg:mt-24 lg:grid-cols-4"
          vertical={tabOrientation === 'vertical'}
        >
          <div className="relative -mx-4 flex overflow-x-auto pb-4 sm:mx-0 sm:block sm:overflow-visible sm:pb-0">
            <div className="absolute bottom-0 top-2 left-0.5 hidden w-px bg-slate-200 lg:block" />
            <Tab.List className="grid auto-cols-auto grid-flow-col justify-start gap-x-8 gap-y-10 whitespace-nowrap px-4 sm:mx-auto sm:max-w-2xl sm:grid-cols-3 sm:px-0 sm:text-center lg:grid-flow-row lg:grid-cols-1 lg:text-left">
              {({ selectedIndex }) =>
                days.map((day, dayIndex) => (
                  <div
                    key={day.date}
                    className={clsx(
                      'relative rounded-2xl border border-red-800 p-3 lg:pl-8',
                      dayIndex == selectedIndex ? 'bg-sec-text text-white' : ''
                    )}
                  >
                    <div className="relative">
                      <div
                        className={clsx(
                          'font-mono text-sm',
                          dayIndex === selectedIndex
                            ? 'text-white'
                            : 'text-red-800'
                        )}
                      >
                        <Tab className="[&:not(:focus-visible)]:focus:outline-none">
                          <span className="absolute inset-0" />
                          {day.name}
                        </Tab>
                      </div>
                      <time
                        dateTime={day.dateTime}
                        className={clsx(
                          'mt-1.5 block text-2xl font-semibold tracking-tight',
                          dayIndex == selectedIndex
                            ? 'text-white'
                            : 'text-rose-900'
                        )}
                      >
                        {day.date}
                      </time>
                    </div>
                  </div>
                ))
              }
            </Tab.List>
          </div>
          <Tab.Panels className="lg:col-span-3">
            {days.map((day, i) => (
              <Tab.Panel
                key={day.date}
                className="[&:not(:focus-visible)]:focus:outline-none"
                unmount={false}
              >
                <Committees url="/lok-sabha" data={data[i]} />
              </Tab.Panel>
            ))}
          </Tab.Panels>
        </Tab.Group>
      </Container>
    </section>
  )
}
