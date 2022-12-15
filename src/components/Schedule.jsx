import { useEffect, useState } from 'react'
import Image from 'next/image'
import { Tab } from '@headlessui/react'
import clsx from 'clsx'

import { Container } from '@/components/Container'
import backgroundImage from '@/images/background.jpg'

const schedule = [
  {
    date: 'December 17',
    dateTime: '2022-12-17',
    summary: '',
    timeSlots: [
      {
        name: 'Registrations',
        description: 'Not so one-time payments',
        start: '08:30AM',
        end: '10:00AM',
      },
      {
        name: 'Opening Ceremony',
        description: 'The finer print',
        start: '09:00AM',
        end: '09:30AM',
      },
      {
        name: 'Session 1',
        description: 'Post-purchase blackmail',
        start: '09:30AM',
        end: '12:30PM',
      },
      {
        name: 'Lunch',
        description: null,
        start: '12:30PM',
        end: '1:00PM',
      },
      {
        name: 'Session 2',
        description: 'Buy or die',
        start: '1:00PM',
        end: '03:00PM',
      },
      {
        name: 'High Tea',
        description: 'In-person cancellation',
        start: '03:00PM',
        end: '03:15PM',
      },
      {
        name: 'Session 3',
        description: 'The pay/cancel switcheroo',
        start: '3:15PM',
        end: '05:15PM',
      },
    ],
  },
  {
    date: 'December 18',
    dateTime: '2022-12-18',
    summary: '',
    timeSlots: [
      {
        name: 'Breakfast',
        description: 'The invisible card reader',
        start: '08:30AM',
        end: '09:00AM',
      },
      {
        name: 'Session 4',
        description: 'Stealing fingerprints',
        start: '09:00AM',
        end: '12:30AM',
      },
      {
        name: 'Lunch',
        description: 'Voting machines',
        start: '12:30AM',
        end: '01:00PM',
      },
      {
        name: 'Session 5',
        description: null,
        start: '01:00PM',
        end: '03:30PM',
      },
      {
        name: 'Closing Ceremony',
        description: 'Blackhat SEO that works',
        start: '03:30PM',
        end: '04:30PM',
      },
    ],
  },
]

function ScheduleTabbed() {
  let [tabOrientation, setTabOrientation] = useState('horizontal')

  useEffect(() => {
    let smMediaQuery = window.matchMedia('(min-width: 640px)')

    function onMediaQueryChange({ matches }) {
      setTabOrientation(matches ? 'vertical' : 'horizontal')
    }

    onMediaQueryChange(smMediaQuery)
    smMediaQuery.addEventListener('change', onMediaQueryChange)

    return () => {
      smMediaQuery.removeEventListener('change', onMediaQueryChange)
    }
  }, [])

  return (
    <Tab.Group
      as="div"
      className="mx-auto grid max-w-2xl grid-cols-1 gap-y-6 sm:grid-cols-2 lg:hidden"
      vertical={tabOrientation === 'vertical'}
    >
      <Tab.List className="-mx-4 flex gap-x-4 gap-y-10 overflow-x-auto pl-4 pb-4 sm:mx-0 sm:flex-col sm:pb-0 sm:pl-0 sm:pr-8">
        {({ selectedIndex }) =>
          schedule.map((day, dayIndex) => (
            <button
              key={day.dateTime}
              className={clsx(
                'relative w-3/4 flex-none pr-4 text-center font-bold sm:w-auto sm:pr-0',
                'inline-flex items-center rounded-full border-2 border-transparent border-pr-text bg-sec-text px-3 py-1.5 text-xs font-medium text-white shadow-sm focus:outline-none focus:ring-2 focus:ring-offset-2',
                dayIndex !== selectedIndex &&
                  'border-pr-text bg-transparent text-pr-text opacity-40'
              )}
            >
              <DaySummary
                day={{
                  ...day,
                  date: (
                    <Tab className="[&:not(:focus-visible)]:focus:outline-none">
                      <span className="absolute inset-0" />
                      {day.date}
                    </Tab>
                  ),
                }}
              />
            </button>
          ))
        }
      </Tab.List>
      <Tab.Panels>
        {schedule.map((day) => (
          <Tab.Panel
            key={day.dateTime}
            className="[&:not(:focus-visible)]:focus:outline-none"
          >
            <TimeSlots day={day} />
          </Tab.Panel>
        ))}
      </Tab.Panels>
    </Tab.Group>
  )
}

function DaySummary({ day }) {
  return (
    <>
      <h3 className="text-2xl font-semibold tracking-tight">
        <time dateTime={day.dateTime}>{day.date}</time>
      </h3>
    </>
  )
}

function TimeSlots({ day, className }) {
  return (
    <ol
      role="list"
      className={clsx(
        className,
        'space-y-8 bg-white/60 py-14 px-10 text-center shadow-xl shadow-red-900/5 backdrop-blur'
      )}
    >
      {day.timeSlots.map((timeSlot, timeSlotIndex) => (
        <li
          key={timeSlot.start}
          aria-label={`${timeSlot.name} talking about ${timeSlot.description} at ${timeSlot.start} - ${timeSlot.end} IST`}
        >
          {timeSlotIndex > 0 && (
            <div className="mx-auto mb-8 h-px w-48 bg-indigo-500/10" />
          )}
          <h4 className="text-lg font-semibold tracking-tight text-pr-text">
            {timeSlot.name}
          </h4>
          {/* {timeSlot.description && (
            <p className="mt-1 tracking-tight text-pr-text">
              {timeSlot.description}
            </p>
          )} */}
          <p className="mt-1 font-mono text-sm text-rose-700">
            <time dateTime={`${day.dateTime}T${timeSlot.start}-08:00`}>
              {timeSlot.start}
            </time>{' '}
            -{' '}
            <time dateTime={`${day.dateTime}T${timeSlot.end}-08:00`}>
              {timeSlot.end}
            </time>{' '}
            IST
          </p>
        </li>
      ))}
    </ol>
  )
}

function ScheduleStatic() {
  return (
    <div className="hidden lg:grid lg:grid-cols-2 lg:gap-x-8">
      {schedule.map((day) => (
        <section key={day.dateTime}>
          <DaySummary day={day} />
          <TimeSlots day={day} className="mt-10" />
        </section>
      ))}
    </div>
  )
}

export function Schedule() {
  return (
    <section id="schedule" aria-label="Schedule" className="py-20 sm:py-32">
      <Container className="relative z-10">
        <div className="mx-auto max-w-2xl lg:mx-0 lg:max-w-4xl lg:pr-24">
          <h2 className="font-display text-4xl font-medium tracking-tighter text-pr-text sm:text-5xl">
            Here&apos;s the schedule for the two days (17th and 18th December):
          </h2>
          {/* <p className="mt-4 font-display text-2xl tracking-tight text-sec-text">
            Quintessence Youth Summit is a 2-day event.
          </p> */}
        </div>
      </Container>
      <div className="relative mt-14 sm:mt-24">
        <div className="absolute inset-x-0  -bottom-32 overflow-hidden bg-rose-50">
          <div className="absolute inset-x-0 top-0 h-40 bg-gradient-to-b from-white" />
          <div className="absolute inset-x-0 bottom-0 h-40 bg-gradient-to-t from-white" />
        </div>
        <Container className="relative">
          <ScheduleTabbed />
          <ScheduleStatic />
        </Container>
      </div>
    </section>
  )
}
