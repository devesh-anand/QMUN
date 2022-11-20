import Link from 'next/link'
import clsx from 'clsx'

export function Button({ href, className, ...props }) {
  className = clsx(
    'inline-flex justify-center rounded-2xl bg-pr-text p-4 text-base font-semibold text-white hover:bg-sec-text focus:outline-none focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-pr-text active:text-white/70',
    className
  )

  return href ? (
    <a
      href={href}
      target="_blank"
      className={className}
      {...props}
      rel="noreferrer noopener"
    >
      Register
    </a>
  ) : (
    <button className={className} {...props} />
  )
}
