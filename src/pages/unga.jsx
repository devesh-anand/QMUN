import React from 'react'
import { Header } from '@/components/Header'
import Ungatable from '@/components/Ungatable'

const portfolios = [
  {
    serial: 1,
    country: 'Afghanistan',
    alloted: 0,
  },
  {
    serial: 2,
    country: 'Armenia',
    alloted: 0,
  },
  {
    serial: 3,
    country: 'Azerbaijan',
    alloted: 0,
  },
  {
    serial: 4,
    country: 'Australia',
    alloted: 0,
  },
  {
    serial: 5,
    country: 'Bahrain',
    alloted: 0,
  },
  {
    serial: 6,
    country: 'Bangladesh',
    alloted: 0,
  },
  {
    serial: 7,
    country: 'Belarus',
    alloted: 0,
  },
  {
    serial: 8,
    country: 'Belgium',
    alloted: 0,
  },
  {
    serial: 9,
    country: 'Brazil',
    alloted: 0,
  },
  {
    serial: 10,
    country: 'Cambodia',
    alloted: 0,
  },
  {
    serial: 11,
    country: 'Canada',
    alloted: 0,
  },
  {
    serial: 12,
    country: 'Chile',
    alloted: 0,
  },
  {
    serial: 13,
    country: 'China',
    alloted: 0,
  },
  {
    serial: 14,
    country: 'Columbia',
    alloted: 0,
  },
  {
    serial: 15,
    country: 'Costa Rica',
    alloted: 0,
  },
  {
    serial: 16,
    country: 'Croatia',
    alloted: 0,
  },
  {
    serial: 17,
    country: 'Cuba',
    alloted: 0,
  },
  {
    serial: 18,
    country: 'Denmark',
    alloted: 0,
  },
  {
    serial: 19,
    country: 'Egypt',
    alloted: 0,
  },
  {
    serial: 20,
    country: 'England',
    alloted: 0,
  },
  {
    serial: 21,
    country: 'Finland',
    alloted: 0,
  },
  {
    serial: 22,
    country: 'France',
    alloted: 0,
  },
  {
    serial: 23,
    country: 'Ghana',
    alloted: 0,
  },
  {
    serial: 24,
    country: 'Iceland',
    alloted: 0,
  },
  {
    serial: 25,
    country: 'Iran',
    alloted: 0,
  },
  {
    serial: 26,
    country: 'Iraq',
    alloted: 0,
  },
  {
    serial: 27,
    country: 'Ireland',
    alloted: 0,
  },
  {
    serial: 28,
    country: 'Israel',
    alloted: 0,
  },
  {
    serial: 29,
    country: 'Italy',
    alloted: 0,
  },
  {
    serial: 30,
    country: 'Jamaica',
    alloted: 0,
  },
  {
    serial: 31,
    country: 'Japan',
    alloted: 0,
  },
  {
    serial: 32,
    country: 'Jordan',
    alloted: 0,
  },
  {
    serial: 33,
    country: 'Kyrgyzstan',
    alloted: 0,
  },
  {
    serial: 34,
    country: 'Laos',
    alloted: 0,
  },
  {
    serial: 35,
    country: 'Lebanon',
    alloted: 0,
  },
  {
    serial: 36,
    country: 'Luxembourg',
    alloted: 0,
  },
  {
    serial: 37,
    country: 'Malaysia',
    alloted: 0,
  },
  {
    serial: 38,
    country: 'Marshall Islands',
    alloted: 0,
  },
  {
    serial: 39,
    country: 'Monaco',
    alloted: 0,
  },
  {
    serial: 40,
    country: 'Myanmar',
    alloted: 0,
  },
  {
    serial: 41,
    country: 'Netherlands',
    alloted: 0,
  },
  {
    serial: 42,
    country: 'New Zealand',
    alloted: 0,
  },
  {
    serial: 43,
    country: 'North Korea',
    alloted: 0,
  },
  {
    serial: 44,
    country: 'Norway',
    alloted: 0,
  },
  {
    serial: 45,
    country: 'Oman',
    alloted: 0,
  },
  {
    serial: 46,
    country: 'The Phillipines',
    alloted: 0,
  },
  {
    serial: 47,
    country: 'Poland',
    alloted: 0,
  },
  {
    serial: 48,
    country: 'Portugal',
    alloted: 0,
  },
  {
    serial: 49,
    country: 'Qatar',
    alloted: 0,
  },
  {
    serial: 50,
    country: 'Saudi Arabia',
    alloted: 0,
  },
  {
    serial: 51,
    country: 'Scotland',
    alloted: 0,
  },
  {
    serial: 52,
    country: 'Seychelles',
    alloted: 0,
  },
  {
    serial: 53,
    country: 'Sierra Leone',
    alloted: 0,
  },
  {
    serial: 54,
    country: 'Singapore',
    alloted: 0,
  },
  {
    serial: 55,
    country: 'Somalia',
    alloted: 0,
  },
  {
    serial: 56,
    country: 'South Africa',
    alloted: 0,
  },
  {
    serial: 57,
    country: 'South Korea',
    alloted: 0,
  },
  {
    serial: 58,
    country: 'Spain',
    alloted: 0,
  },
  {
    serial: 59,
    country: 'Sri Lanka',
    alloted: 0,
  },
  {
    serial: 60,
    country: 'Sudan',
    alloted: 0,
  },
  {
    serial: 61,
    country: 'Sweden',
    alloted: 0,
  },
  {
    serial: 62,
    country: 'Switzerland',
    alloted: 0,
  },
  {
    serial: 63,
    country: 'Syria',
    alloted: 0,
  },
  {
    serial: 64,
    country: 'Taiwan',
    alloted: 0,
  },
  {
    serial: 65,
    country: 'Tajikistan',
    alloted: 0,
  },
  {
    serial: 66,
    country: 'Thailand',
    alloted: 0,
  },
  {
    serial: 67,
    country: 'Tunisia',
    alloted: 0,
  },
  {
    serial: 68,
    country: 'Türkiye',
    alloted: 0,
  },
  {
    serial: 69,
    country: 'Uganda',
    alloted: 0,
  },
  {
    serial: 70,
    country: 'Ukraine',
    alloted: 0,
  },
  {
    serial: 71,
    country: 'Russia',
    alloted: 0,
  },
  {
    serial: 72,
    country: 'USA',
    alloted: 0,
  },
  {
    serial: 73,
    country: 'India',
    alloted: 0,
  },
  {
    serial: 74,
    country: 'Pakistan',
    alloted: 0,
  },
  {
    serial: 75,
    country: 'Germany',
    alloted: 0,
  },
  {
    serial: 76,
    country: 'UAE',
    alloted: 0,
  },
  {
    serial: 77,
    country: 'Venezuela',
    alloted: 0,
  },
  {
    serial: 78,
    country: 'Vietnam',
    alloted: 0,
  },
  {
    serial: 79,
    country: 'Wales',
    alloted: 0,
  },
  {
    serial: 80,
    country: 'Uzbekistan',
    alloted: 0,
  },
  {
    serial: 81,
    country: 'Libya',
    alloted: 0,
  },
  {
    serial: 82,
    country: 'Hungary',
    alloted: 0,
  },
  {
    serial: 83,
    country: 'Zimbabwe',
    alloted: 0,
  },
  {
    serial: 84,
    country: 'Yemen',
    alloted: 0,
  },
]

function unga() {
  return (
    <div>
      <Header />
      <Ungatable
        data={portfolios}
        heading="Lok Sabha Matrix"
        c1="S.no."
        c2="Country"
      />
    </div>
  )
}

export default unga
