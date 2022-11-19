import Image from 'next/image'
import { Header } from '@/components/Header'
import { Button } from '@/components/Button'
import { Container } from '@/components/Container'
import backgroundImage from '@/images/background.jpg'

export function Hero() {
  return (
    <div className="body-bg-custom relative pb-20 sm:pb-24">
      <Header />
      <div className="absolute inset-x-0 -top-48 -bottom-14 overflow-hidden ">
        <div className="absolute inset-x-0 top-0 h-40 bg-gradient-to-b from-white" />
        <div className="absolute inset-x-0 bottom-0 h-40 bg-gradient-to-t from-white" />
      </div>
      <Container className="relative">
        <div className="mx-auto max-w-2xl lg:max-w-4xl lg:px-12">
          <h1 className="text-center font-display text-5xl font-bold tracking-tighter text-pr-text sm:text-7xl">
            <span className="sr-only">Quint Youth Summit - </span>Quint Youth
            Summit
          </h1>
          <div className="mt-6 space-y-6 text-center font-display text-2xl tracking-tight text-gray-900">
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Odit
              quaerat impedit cupiditate quo non eligendi? Voluptatibus sit
              cumque sequi sunt impedit delectus, quos consectetur
              necessitatibus porro repellat explicabo maxime animi velit
              doloremque enim! Deleniti tempore quae ipsum sapiente cupiditate
              adipisci!
            </p>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Soluta
              nulla quia libero voluptatibus est illum, porro sint error at
              architecto voluptate praesentium itaque odit quibusdam!
            </p>
          </div>
          <Button href="#" className="mt-10 w-full sm:hidden">
            Register
          </Button>
          <div className="flex justify-center">
            <dl className="mt-10 grid grid-cols-2 gap-y-6 gap-x-10 sm:mt-16 sm:gap-y-10 sm:gap-x-16 sm:text-center lg:auto-cols-auto lg:grid-flow-col lg:grid-cols-none lg:justify-start lg:text-center">
              {[
                ['Committee', '3'],
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
