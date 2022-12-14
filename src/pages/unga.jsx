import React from 'react'
import { Header } from '@/components/Header'
import Ungatable from '@/components/Ungatable'
import { Footer } from '@/components/Footer'
import Navbar from '@/components/Navbar'

const portfolios = [
  {
    serial: 1,
    country: 'Afghanistan',
    alloted: 1,
  },
  {
    serial: 2,
    country: 'Armenia',
    alloted: 1,
  },
  {
    serial: 3,
    country: 'Australia',
    alloted: 1,
  },
  {
    serial: 4,
    country: 'Austria',
    alloted: 1,
  },
  {
    serial: 5,
    country: 'Azerbaijan',
    alloted: 1,
  },
  {
    serial: 6,
    country: 'Bangladesh',
    alloted: 1,
  },
  {
    serial: 7,
    country: 'Belarus',
    alloted: 1,
  },
  {
    serial: 8,
    country: 'Belgium',
    alloted: 0,
  },
  {
    serial: 9,
    country: 'Bolivia',
    alloted: 1,
  },
  {
    serial: 10,
    country: 'Brazil',
    alloted: 0,
  },
  {
    serial: 11,
    country: 'Canada',
    alloted: 1,
  },
  {
    serial: 12,
    country: 'Chile',
    alloted: 0,
  },
  {
    serial: 13,
    country: 'Congo',
    alloted: 0,
  },
  {
    serial: 14,
    country: 'Croatia',
    alloted: 0,
  },
  {
    serial: 15,
    country: 'Czech Republic',
    alloted: 0,
  },
  {
    serial: 16,
    country: 'Denmark',
    alloted: 1,
  },
  {
    serial: 17,
    country: 'Dominica',
    alloted: 0,
  },
  {
    serial: 18,
    country: 'DPRK',
    alloted: 1,
  },
  {
    serial: 19,
    country: 'Ecuador',
    alloted: 0,
  },
  {
    serial: 20,
    country: 'Egypt',
    alloted: 1,
  },
  {
    serial: 21,
    country: 'Ethiopia',
    alloted: 0,
  },
  {
    serial: 22,
    country: 'Fiji',
    alloted: 0,
  },
  {
    serial: 23,
    country: 'Finland',
    alloted: 1,
  },
  {
    serial: 24,
    country: 'French Republic',
    alloted: 1,
  },
  {
    serial: 25,
    country: 'Germany',
    alloted: 1,
  },
  {
    serial: 26,
    country: 'Ghana',
    alloted: 1,
  },
  {
    serial: 27,
    country: 'Hungary',
    alloted: 0,
  },
  {
    serial: 28,
    country: 'Iceland',
    alloted: 1,
  },
  {
    serial: 29,
    country: 'India',
    alloted: 1,
  },
  {
    serial: 30,
    country: 'Indonesia',
    alloted: 1,
  },
  {
    serial: 31,
    country: 'Iran',
    alloted: 1,
  },
  {
    serial: 32,
    country: 'Iraq',
    alloted: 1,
  },
  {
    serial: 33,
    country: 'Ireland',
    alloted: 1,
  },
  {
    serial: 34,
    country: 'Israel',
    alloted: 1,
  },
  {
    serial: 35,
    country: 'Italy',
    alloted: 0,
  },
  {
    serial: 36,
    country: 'Ivory Coast',
    alloted: 0,
  },
  {
    serial: 37,
    country: 'Japan',
    alloted: 1,
  },
  {
    serial: 38,
    country: 'Jordan',
    alloted: 1,
  },
  {
    serial: 39,
    country: 'Kazakhstan',
    alloted: 0,
  },
  {
    serial: 40,
    country: 'Kenya',
    alloted: 0,
  },
  {
    serial: 41,
    country: 'Kuwait',
    alloted: 1,
  },
  {
    serial: 42,
    country: 'Kyrgyz Republic',
    alloted: 0,
  },
  {
    serial: 43,
    country: 'Lebanon',
    alloted: 1,
  },
  {
    serial: 44,
    country: 'Mali',
    alloted: 0,
  },
  {
    serial: 45,
    country: 'Mexico',
    alloted: 1,
  },
  {
    serial: 46,
    country: 'Moldova',
    alloted: 0,
  },
  {
    serial: 47,
    country: 'Mongolia',
    alloted: 0,
  },
  {
    serial: 48,
    country: 'Morocco',
    alloted: 1,
  },
  {
    serial: 49,
    country: 'Mozambique',
    alloted: 0,
  },
  {
    serial: 50,
    country: 'Myanmar',
    alloted: 1,
  },
  {
    serial: 51,
    country: 'Nepal',
    alloted: 0,
  },
  {
    serial: 52,
    country: 'Netherlands',
    alloted: 0,
  },
  {
    serial: 53,
    country: 'New Zealand',
    alloted: 1,
  },
  {
    serial: 54,
    country: 'Nicaragua',
    alloted: 0,
  },
  {
    serial: 55,
    country: 'Niger',
    alloted: 1,
  },
  {
    serial: 56,
    country: 'Norway',
    alloted: 1,
  },
  {
    serial: 57,
    country: 'Oman',
    alloted: 1,
  },
  {
    serial: 58,
    country: 'Pakistan',
    alloted: 1,
  },
  {
    serial: 59,
    country: 'Palestine',
    alloted: 1,
  },
  {
    serial: 60,
    country: 'Panama',
    alloted: 0,
  },
  {
    serial: 61,
    country: "People's Republic of China",
    alloted: 1,
  },
  {
    serial: 62,
    country: 'Peru',
    alloted: 0,
  },
  {
    serial: 63,
    country: 'Phillipines',
    alloted: 1,
  },
  {
    serial: 64,
    country: 'Poland',
    alloted: 1,
  },
  {
    serial: 65,
    country: 'Portugal',
    alloted: 0,
  },
  {
    serial: 66,
    country: 'Qatar',
    alloted: 1,
  },
  {
    serial: 67,
    country: 'Republic of Korea',
    alloted: 0,
  },
  {
    serial: 68,
    country: 'Romania',
    alloted: 0,
  },
  {
    serial: 69,
    country: 'Russian Federation',
    alloted: 1,
  },
  {
    serial: 70,
    country: 'Rwanda',
    alloted: 0,
  },
  {
    serial: 71,
    country: 'Saudi Arabia',
    alloted: 1,
  },
  {
    serial: 72,
    country: 'Senegal',
    alloted: 1,
  },
  {
    serial: 73,
    country: 'Serbia',
    alloted: 0,
  },
  {
    serial: 74,
    country: 'Sierra Leone',
    alloted: 0,
  },
  {
    serial: 75,
    country: 'Singapore',
    alloted: 1,
  },
  {
    serial: 76,
    country: 'Somalia',
    alloted: 1,
  },
  {
    serial: 77,
    country: 'South Africa',
    alloted: 0,
  },
  {
    serial: 78,
    country: 'South Sudan',
    alloted: 0,
  },
  {
    serial: 79,
    country: 'Spain',
    alloted: 0,
  },
  {
    serial: 80,
    country: 'Sri Lanka',
    alloted: 0,
  },
  {
    serial: 81,
    country: 'Sudan',
    alloted: 0,
  },
  {
    serial: 82,
    country: 'Sweden',
    alloted: 1,
  },
  {
    serial: 83,
    country: 'Switzerland',
    alloted: 1,
  },
  {
    serial: 84,
    country: 'Syria',
    alloted: 1,
  },
  {
    serial: 85,
    country: 'Tajikistan',
    alloted: 0,
  },
  {
    serial: 86,
    country: 'Tanzania',
    alloted: 1,
  },
  {
    serial: 87,
    country: 'Togo',
    alloted: 0,
  },
  {
    serial: 88,
    country: 'Tunisia',
    alloted: 0,
  },
  {
    serial: 89,
    country: 'Turkey',
    alloted: 1,
  },
  {
    serial: 90,
    country: 'Turkmenistan',
    alloted: 1,
  },
  {
    serial: 91,
    country: 'UAE',
    alloted: 0,
  },
  {
    serial: 92,
    country: 'Uganda',
    alloted: 0,
  },
  {
    serial: 93,
    country: 'Ukraine',
    alloted: 1,
  },
  {
    serial: 94,
    country: 'United Kingdom',
    alloted: 1,
  },
  {
    serial: 95,
    country: 'United States of America',
    alloted: 1,
  },
  {
    serial: 96,
    country: 'Uruguay',
    alloted: 0,
  },
  {
    serial: 97,
    country: 'Uzbekistan',
    alloted: 0,
  },
  {
    serial: 98,
    country: 'Venezuela',
    alloted: 1,
  },
  {
    serial: 99,
    country: 'Vietnam',
    alloted: 0,
  },
  {
    serial: 100,
    country: 'Yemen',
    alloted: 0,
  },
  {
    serial: 101,
    country: 'Zambia',
    alloted: 1,
  },
  {
    serial: 102,
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
