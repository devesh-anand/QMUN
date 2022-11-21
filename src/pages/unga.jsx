import React from 'react'
import { Header } from '@/components/Header'
import Ungatable from '@/components/Ungatable'
import { Footer } from '@/components/Footer'
import Navbar from '@/components/Navbar'

const portfolios = [
  {
    serial: 1,
    country: 'Afghanistan',
    alloted: 0,
  },
  {
    serial: 2,
    country: 'Australia',
    alloted: 0,
  },
  {
    serial: 3,
    country: 'Bangladesh',
    alloted: 0,
  },
  {
    serial: 4,
    country: 'Egypt',
    alloted: 0,
  },
  {
    serial: 5,
    country: 'French Republic',
    alloted: 0,
  },
  {
    serial: 6,
    country: 'Germany',
    alloted: 0,
  },
  {
    serial: 7,
    country: 'India',
    alloted: 0,
  },
  {
    serial: 8,
    country: 'Iran',
    alloted: 0,
  },
  {
    serial: 9,
    country: 'Iraq',
    alloted: 0,
  },
  {
    serial: 10,
    country: 'Israel',
    alloted: 0,
  },
  {
    serial: 11,
    country: 'Japan',
    alloted: 0,
  },
  {
    serial: 12,
    country: 'Kazakhstan',
    alloted: 0,
  },
  {
    serial: 13,
    country: 'Kyrgyz Republic',
    alloted: 0,
  },
  {
    serial: 14,
    country: 'Lebanon',
    alloted: 0,
  },
  {
    serial: 15,
    country: 'Myanmar',
    alloted: 0,
  },
  {
    serial: 16,
    country: 'Nepal',
    alloted: 0,
  },
  {
    serial: 17,
    country: 'Pakistan',
    alloted: 0,
  },
  {
    serial: 18,
    country: "People's Republic of China",
    alloted: 0,
  },
  {
    serial: 19,
    country: 'Saudi Arabia',
    alloted: 0,
  },
  {
    serial: 20,
    country: 'Russian Federation',
    alloted: 0,
  },
  {
    serial: 21,
    country: 'Sri Lanka',
    alloted: 0,
  },
  {
    serial: 22,
    country: 'Sweden',
    alloted: 0,
  },
  {
    serial: 23,
    country: 'Switzerland',
    alloted: 0,
  },
  {
    serial: 24,
    country: 'Syria',
    alloted: 0,
  },
  {
    serial: 25,
    country: 'UAE',
    alloted: 0,
  },
  {
    serial: 26,
    country: 'Ukraine',
    alloted: 0,
  },
  {
    serial: 27,
    country: 'United Kingdom',
    alloted: 0,
  },
  {
    serial: 28,
    country: 'United States of America',
    alloted: 0,
  },
  {
    serial: 29,
    country: 'Uzbekistan',
    alloted: 0,
  },
  {
    serial: 30,
    country: 'Yemen',
    alloted: 0,
  },
  {
    serial: 31,
    country: 'Algeria',
    alloted: 0,
  },
  {
    serial: 32,
    country: 'Austria',
    alloted: 0,
  },
  {
    serial: 33,
    country: 'Belarus',
    alloted: 0,
  },
  {
    serial: 34,
    country: 'Belgium',
    alloted: 0,
  },
  {
    serial: 35,
    country: 'Bolivia',
    alloted: 0,
  },
  {
    serial: 36,
    country: 'Brazil',
    alloted: 0,
  },
  {
    serial: 37,
    country: 'Canada',
    alloted: 0,
  },
  {
    serial: 38,
    country: 'Chile',
    alloted: 0,
  },
  {
    serial: 39,
    country: 'Congo',
    alloted: 0,
  },
  {
    serial: 40,
    country: 'Croatia',
    alloted: 0,
  },
  {
    serial: 41,
    country: 'Czech Republic',
    alloted: 0,
  },
  {
    serial: 42,
    country: 'Denmark',
    alloted: 0,
  },
  {
    serial: 43,
    country: 'Dominica',
    alloted: 0,
  },
  {
    serial: 44,
    country: 'DPRK',
    alloted: 0,
  },
  {
    serial: 45,
    country: 'Ecuador',
    alloted: 0,
  },
  {
    serial: 46,
    country: 'Ethiopia',
    alloted: 0,
  },
  {
    serial: 47,
    country: 'Fiji',
    alloted: 0,
  },
  {
    serial: 48,
    country: 'Finland',
    alloted: 0,
  },
  {
    serial: 49,
    country: 'Ghana',
    alloted: 0,
  },
  {
    serial: 50,
    country: 'Hungary',
    alloted: 0,
  },
  {
    serial: 51,
    country: 'Iceland',
    alloted: 0,
  },
  {
    serial: 52,
    country: 'Indonesia',
    alloted: 0,
  },
  {
    serial: 53,
    country: 'Ireland',
    alloted: 0,
  },
  {
    serial: 54,
    country: 'Italy',
    alloted: 0,
  },
  {
    serial: 55,
    country: 'Ivory Coast',
    alloted: 0,
  },
  {
    serial: 56,
    country: 'Jordan',
    alloted: 0,
  },
  {
    serial: 57,
    country: 'Kenya',
    alloted: 0,
  },
  {
    serial: 58,
    country: 'Kuwait',
    alloted: 0,
  },
  {
    serial: 59,
    country: 'Mali',
    alloted: 0,
  },
  {
    serial: 60,
    country: 'Mexico',
    alloted: 0,
  },
  {
    serial: 61,
    country: 'Moldova',
    alloted: 0,
  },
  {
    serial: 62,
    country: 'Mongolia',
    alloted: 0,
  },
  {
    serial: 63,
    country: 'Morocco',
    alloted: 0,
  },
  {
    serial: 64,
    country: 'Mozambique',
    alloted: 0,
  },
  {
    serial: 65,
    country: 'Netherlands',
    alloted: 0,
  },
  {
    serial: 66,
    country: 'New Zealand',
    alloted: 0,
  },
  {
    serial: 67,
    country: 'Nicaragua',
    alloted: 0,
  },
  {
    serial: 68,
    country: 'Niger',
    alloted: 0,
  },
  {
    serial: 69,
    country: 'Norway',
    alloted: 0,
  },
  {
    serial: 70,
    country: 'Oman',
    alloted: 0,
  },
  {
    serial: 71,
    country: 'Palestine',
    alloted: 0,
  },
  {
    serial: 72,
    country: 'Panama',
    alloted: 0,
  },
  {
    serial: 73,
    country: 'Peru',
    alloted: 0,
  },
  {
    serial: 74,
    country: 'Phillipines',
    alloted: 0,
  },
  {
    serial: 75,
    country: 'Poland',
    alloted: 0,
  },
  {
    serial: 76,
    country: 'Portugal',
    alloted: 0,
  },
  {
    serial: 77,
    country: 'Qatar',
    alloted: 0,
  },
  {
    serial: 78,
    country: 'republic of korea',
    alloted: 0,
  },
  {
    serial: 79,
    country: 'Romania',
    alloted: 0,
  },
  {
    serial: 80,
    country: 'Rwanda',
    alloted: 0,
  },
  {
    serial: 81,
    country: 'Senegal',
    alloted: 0,
  },
  {
    serial: 82,
    country: 'Serbia',
    alloted: 0,
  },
  {
    serial: 83,
    country: 'Sierra Leone',
    alloted: 0,
  },
  {
    serial: 84,
    country: 'Singapore',
    alloted: 0,
  },
  {
    serial: 85,
    country: 'Somalia',
    alloted: 0,
  },
  {
    serial: 86,
    country: 'South Africa',
    alloted: 0,
  },
  {
    serial: 87,
    country: 'South Sudan',
    alloted: 0,
  },
  {
    serial: 88,
    country: 'Spain',
    alloted: 0,
  },
  {
    serial: 89,
    country: 'Sudan',
    alloted: 0,
  },
  {
    serial: 90,
    country: 'Tajikistan',
    alloted: 0,
  },
  {
    serial: 91,
    country: 'Tanzania',
    alloted: 0,
  },
  {
    serial: 92,
    country: 'Togo',
    alloted: 0,
  },
  {
    serial: 93,
    country: 'Tunisia',
    alloted: 0,
  },
  {
    serial: 94,
    country: 'Turkey',
    alloted: 0,
  },
  {
    serial: 95,
    country: 'Turkmenistan',
    alloted: 0,
  },
  {
    serial: 96,
    country: 'Uganda',
    alloted: 0,
  },
  {
    serial: 97,
    country: 'Uruguay',
    alloted: 0,
  },
  {
    serial: 98,
    country: 'Venezuela',
    alloted: 0,
  },
  {
    serial: 99,
    country: 'Vietnam',
    alloted: 0,
  },
  {
    serial: 100,
    country: 'Zambia',
    alloted: 0,
  },
  {
    serial: 101,
    country: 'Zimbabwe',
    alloted: 0,
  },
]

function unga() {
  return (
    <div>
      <Navbar />
      <Header />
      <Ungatable
        data={portfolios}
        heading="UNGA Matrix"
        c1="S.no."
        c2="Country"
      />
      <Footer />
    </div>
  )
}

export default unga
