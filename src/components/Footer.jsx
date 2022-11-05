import { Container } from '@/components/Container'
import { Logo } from '@/components/Logo'

export function Footer() {
  return (
    <footer className="py-16">
      <Container className="flex flex-col items-center justify-between md:flex-row">
        <Logo className="h-12 w-auto text-slate-900" />
        <div className="text-center md:text-left">
          <p className="mt-6 text-base text-slate-500 md:mt-0">
            Copyright &copy; {new Date().getFullYear()} Quintessence. All rights
            reserved.
          </p>
          <p className="text-base text-slate-500">Created by Devesh Anand</p>
        </div>
      </Container>
    </footer>
  )
}
