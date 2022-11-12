import Image from 'next/image'
import qys from './../images/qys-no-bg.png'

export function Logo(props) {
  return (
    <div className="h-32 w-32 md:h-24 md:w-24">
      <Image src={qys} />
    </div>
    // <h1 className="text-4xl font-bold text-blue-600">QYP</h1>
  )
}
