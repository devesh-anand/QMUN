import { Button } from '@/components/Button'
import { Container } from '@/components/Container'
import { DiamondIcon } from '@/components/DiamondIcon'
import { Logo } from '@/components/Logo'

export function Header() {
  return (
    <header className="relative z-20 pb-11 lg:pt-11">
      <Container className="flex flex-wrap items-center justify-center sm:justify-between lg:flex-nowrap">
        <div className="mt-10 lg:mt-0 lg:grow lg:basis-0">
          <Logo className="h-12 w-auto text-slate-900" />
        </div>
        <div className="order-first -mx-4 flex flex-auto basis-full overflow-x-auto whitespace-nowrap border-b border-blue-600/10 py-4 font-mono text-sm text-pr-text sm:-mx-6 lg:order-none lg:mx-0 lg:basis-auto lg:border-0 lg:py-0">
          <div className="mx-auto flex items-center gap-4 px-4">
            <p className="text-lg font-bold">
              <time dateTime="2022-12-17">17</time>&nbsp;-&nbsp;
              <time dateTime="2022-12-18">18 of December, 2022</time>
            </p>
            <DiamondIcon className="h-1.5 w-1.5 overflow-visible fill-current stroke-current" />
            <a href="https://goo.gl/maps/Cnmom52hXyTzMrVF8">
              <p className="flex font-bold underline">
                ADGITM, Delhi
                <svg
                  className="mt-1 ml-1"
                  xmlns="http://www.w3.org/2000/svg"
                  width="1em"
                  height="1em"
                  preserveAspectRatio="xMidYMid meet"
                  viewBox="0 0 32 32"
                >
                  <path
                    fill="currentColor"
                    d="M16 2A11.013 11.013 0 0 0 5 13a10.889 10.889 0 0 0 2.216 6.6s.3.395.349.452L16 30l8.439-9.953c.044-.053.345-.447.345-.447l.001-.003A10.885 10.885 0 0 0 27 13A11.013 11.013 0 0 0 16 2Zm0 15a4 4 0 1 1 4-4a4.005 4.005 0 0 1-4 4Z"
                  />
                  <circle cx="16" cy="13" r="4" fill="none" />
                </svg>
              </p>
            </a>
          </div>
        </div>
        <div className="hidden sm:mt-10 sm:flex lg:mt-0 lg:grow lg:basis-0 lg:justify-end">
          <Button href="https://forms.gle/ddiPQDXygEAQQxhy9">
            Register Now
          </Button>
        </div>
      </Container>
    </header>
  )
}
