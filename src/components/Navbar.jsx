import { Fragment } from 'react'
import { Disclosure, Menu, Transition } from '@headlessui/react'
import { Bars3Icon, BellIcon, XMarkIcon } from '@heroicons/react/24/outline'
import Link from 'next/link'
import NavDropdown from '@/components/NavDropdown'

function classNames(...classes) {
  return classes.filter(Boolean).join(' ')
}

export default function Navbar() {
  return (
    <Disclosure as="nav" className="z-50 bg-transparent text-white shadow">
      {({ open }) => (
        <>
          <div className="mx-auto max-w-7xl px-2 sm:px-4 lg:px-8">
            <div className="flex h-16 justify-center">
              <div className="flex justify-center px-2 lg:px-0">
                <div className="hidden justify-center lg:ml-6 lg:flex lg:space-x-8">
                  <Link
                    href="/"
                    className="inline-flex items-center  border-indigo-500 px-1 pt-1 text-sm font-medium text-sec-text"
                  >
                    Home
                  </Link>
                  <NavDropdown />
                  {/* <Link
                    href="/team"
                    className="inline-flex items-center  border-transparent px-1 pt-1 text-sm font-medium text-sec-text hover:border-gray-300 hover:text-pr-text"
                  >
                    Secretariat
                  </Link> */}
                  <Link
                    href="/about"
                    className="inline-flex items-center  border-transparent px-1 pt-1 text-sm font-medium text-sec-text hover:border-gray-300 hover:text-pr-text"
                  >
                    About QYS
                  </Link>
                </div>
              </div>
              <div className="flex items-center lg:hidden">
                {/* Mobile menu button */}
                <Disclosure.Button className="inline-flex items-center justify-center rounded-md p-2 text-sec-text hover:bg-rose-300 hover:text-sec-text focus:outline-none focus:ring-2 focus:ring-inset focus:ring-pr-text">
                  <span className="sr-only">Open main menu</span>
                  {open ? (
                    <XMarkIcon className="block h-6 w-6" aria-hidden="true" />
                  ) : (
                    <Bars3Icon className="block h-6 w-6" aria-hidden="true" />
                  )}
                </Disclosure.Button>
              </div>
            </div>
          </div>

          <Disclosure.Panel className="lg:hidden">
            <div className="space-y-1 pt-2 pb-3">
              <Disclosure.Button
                as="a"
                href="/"
                className="block border-l-4 border-transparent py-2 pl-3 pr-4 text-base font-medium text-sec-text hover:border-rose-300 hover:bg-gray-50 hover:text-pr-text"
              >
                Home
              </Disclosure.Button>
              <Disclosure.Button
                as="a"
                href="/aippm"
                className="block border-l-4 border-transparent py-2 pl-3 pr-4 text-base font-medium text-sec-text hover:border-gray-300 hover:bg-gray-50 hover:text-pr-text"
              >
                AIPPM
              </Disclosure.Button>
              <Disclosure.Button
                as="a"
                href="/lok-sabha"
                className="block border-l-4 border-transparent py-2 pl-3 pr-4 text-base font-medium text-sec-text hover:border-gray-300 hover:bg-gray-50 hover:text-pr-text"
              >
                Lok Sabha
              </Disclosure.Button>
              <Disclosure.Button
                as="a"
                href="/unga"
                className="block border-l-4 border-transparent py-2 pl-3 pr-4 text-base font-medium text-sec-text hover:border-gray-300 hover:bg-gray-50 hover:text-pr-text"
              >
                UNGA
              </Disclosure.Button>
              {/* <Disclosure.Button
                as="a"
                href="/team"
                className="block border-l-4 border-transparent py-2 pl-3 pr-4 text-base font-medium text-sec-text hover:border-gray-300 hover:bg-gray-50 hover:text-pr-text"
              >
                Secretariat
              </Disclosure.Button> */}
              <Disclosure.Button
                as="a"
                href="/about"
                className="block border-l-4 border-transparent py-2 pl-3 pr-4 text-base font-medium text-sec-text hover:border-gray-300 hover:bg-gray-50 hover:text-gray-800"
              >
                About QYS
              </Disclosure.Button>
            </div>
          </Disclosure.Panel>
        </>
      )}
    </Disclosure>
  )
}
