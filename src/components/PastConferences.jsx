import React from 'react'
import 'react-responsive-carousel/lib/styles/carousel.min.css'
import { Carousel } from 'react-responsive-carousel'
import Image from 'next/image'

export default function PastConferences() {
  return (
    <div>
      <div className="mx-auto md:w-2/3">
        <h1 className="mb-4 text-center text-3xl font-bold text-pr-text">
          Past Conferences (QMUN 2019 and 18)
        </h1>
        <Carousel
          showThumbs={false}
          autoPlay
          infiniteLoop
          interval={3000}
          className="h-auto"
        >
          <div>
            <Image src="/prev-conf/1.jpg" width={720} height={480} />
            {/* <p className="legend">Legend 1</p> */}
          </div>
          <div>
            <Image src="/prev-conf/2.jpg" width={720} height={480} />
            {/* <p className="legend">Legend 1</p> */}
          </div>
          <div>
            <Image src="/prev-conf/3.jpg" width={720} height={480} />
            {/* <p className="legend">Legend 1</p> */}
          </div>
          <div>
            <Image src="/prev-conf/4.jpg" width={720} height={480} />
            {/* <p className="legend">Legend 1</p> */}
          </div>
          {/* <div>
            <Image src="/prev-conf/5.jpg" width={720} height={480} />
            <p className="legend">Legend 1</p>
          </div> */}
        </Carousel>
      </div>
    </div>
  )
}
