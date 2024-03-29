import { Header } from '@/components/Header'
import { Button } from '@/components/Button'
import { Container } from '@/components/Container'

export default function Hero() {
  return (
    <div>
      <Header />
      <div className="relative inset-x-0 -top-48 -bottom-14 overflow-hidden ">
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
                  The Offical Debating Society of ADGITM.
                </span>
              </a>
            </p>
            <p>
              Presenting to you,{' '}
              <span className="font-semibold text-sec-text">
                Quintessence Youth Summit 2023
              </span>
              .
            </p>
          </div>
          <Button
            href="https://forms.gle/tA3Ap6H5nubJQS6A6"
            className="mt-10 w-full sm:hidden"
          >
            Register
          </Button>
          <div className="flex justify-center">
            <dl className="mt-10 flex flex-col gap-8 sm:mt-16 sm:text-center lg:text-center ">
              {[
                ['Committees', '5'],
                // ['People Attending', '150+'],
                [
                  'Venue',
                  'Dr. Akhilesh Das Gupta Institute Of Technology & Management, New Delhi',
                ],
                ['Registerations till', '11th November, 2023'],
                // ['Location', 'Los Angeles'],
              ].map(([name, value]) => (
                <div key={name}>
                  <dt className="text-center font-mono text-sm text-red-900">
                    {name}
                  </dt>
                  <dd className="lg: mt-0.5 text-center text-2xl font-semibold tracking-tight text-pr-text lg:px-32">
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
