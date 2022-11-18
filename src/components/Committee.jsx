import React from 'react'
import Link from 'next/link'

let people = [
  {
    name: 'Leslie Alexander',
    email: 'leslie.alexander@example.com',
    role: 'Co-Founder / CEO',
    imageUrl:
      'https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
  },
  {
    name: 'Leslie Alexander',
    email: 'leslie.alexander@example.com',
    role: 'Co-Founder / CEO',
    imageUrl:
      'https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
  },
  // More people...
]

export default function Committee({ data }) {
  return (
    <div className="flex flex-col items-center">
      <div>
        <h2 className="text-center font-mono text-4xl font-semibold text-blue-600">
          {data.committee}
        </h2>
        <h3 className="py-2 text-center text-2xl font-semibold text-blue-500">
          Agenda: {data.agenda}
        </h3>
      </div>
      <div>
        <Link href={data.url} className="flex py-4">
          <button
            type="button"
            className="inline-flex items-center rounded-md border border-transparent bg-blue-600 px-6 py-3 text-base font-medium text-white shadow-sm hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
          >
            {data.committee}&nbsp;Matrix&nbsp;
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="h-6 w-6"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M15 9h3.75M15 12h3.75M15 15h3.75M4.5 19.5h15a2.25 2.25 0 002.25-2.25V6.75A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25v10.5A2.25 2.25 0 004.5 19.5zm6-10.125a1.875 1.875 0 11-3.75 0 1.875 1.875 0 013.75 0zm1.294 6.336a6.721 6.721 0 01-3.17.789 6.721 6.721 0 01-3.168-.789 3.376 3.376 0 016.338 0z"
              />
            </svg>
          </button>
        </Link>
      </div>
      <div className="flex flex-col items-center">
        <h3 className="py-4 text-xl font-semibold text-blue-500">
          Executive Board:
        </h3>
        <ul role="list" className="mx-auto flex">
          {data.eb.map((person) => (
            <li key={person.name} className="px-4">
              <div className="space-y-4">
                <img
                  className="mx-auto h-20 w-20 rounded-full lg:h-24 lg:w-24"
                  src={person.imageUrl}
                  alt={person.name}
                />
                <div className="space-y-2">
                  <div className="text-center text-xs font-medium lg:text-sm">
                    <h3 className="">{person.name}</h3>
                    <p className="text-indigo-600">{person.role}</p>
                  </div>
                </div>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </div>
  )
}
