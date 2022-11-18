import Image from 'next/image'
import qys from './../images/qys-no-bg.png'
import Link from 'next/link'

export function Logo(props) {
  return (
    <div className="h-32 w-32 md:h-24 md:w-24">
      <Link href="/">
        <Image src={qys} />
      </Link>
    </div>
    // <h1 className="text-4xl font-bold text-blue-600">QYP</h1>
  )
}
