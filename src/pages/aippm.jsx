import React from 'react'
import { Header } from '@/components/Header'
import Matrix from '@/components/Matrix'
import { Footer } from '@/components/Footer'
import Navbar from '@/components/Navbar'

const portfolios = [
  {
    serial: 1,
    name: 'Narendra Modi',
    party_name: 'BJP',
    alloted: 0,
  },
  {
    serial: 2,
    name: 'Amit Shah',
    party_name: 'BJP',
    alloted: 1,
  },
  {
    serial: 3,
    name: 'Rajnath Singh',
    party_name: 'BJP',
    alloted: 0,
  },
  {
    serial: 4,
    name: 'Yogi Adityanath',
    party_name: 'BJP',
    alloted: 0,
  },
  {
    serial: 5,
    name: 'Nirmala Sitharaman',
    party_name: 'BJP',
    alloted: 0,
  },
  {
    serial: 6,
    name: 'Smriti Irani',
    party_name: 'BJP',
    alloted: 0,
  },
  {
    serial: 7,
    name: 'S. Jaishankar',
    party_name: 'BJP',
    alloted: 0,
  },
  {
    serial: 8,
    name: 'Nitin Gadkari',
    party_name: 'BJP',
    alloted: 0,
  },
  {
    serial: 9,
    name: 'Ravi Shankar Prasad',
    party_name: 'BJP',
    alloted: 0,
  },
  {
    serial: 10,
    name: 'Narendra Singh Tomar',
    party_name: 'BJP',
    alloted: 0,
  },
  {
    serial: 11,
    name: 'Pragya Singh Thakur',
    party_name: 'BJP',
    alloted: 0,
  },
  {
    serial: 12,
    name: 'Piyush Goyal',
    party_name: 'BJP',
    alloted: 1,
  },
  {
    serial: 13,
    name: 'Prakash Javadekar',
    party_name: 'BJP',
    alloted: 0,
  },
  {
    serial: 14,
    name: 'J.p. Nadda',
    party_name: 'BJP',
    alloted: 0,
  },
  {
    serial: 15,
    name: 'Bl Santhosh',
    party_name: 'BJP',
    alloted: 0,
  },
  {
    serial: 16,
    name: 'Tejasvi Surya',
    party_name: 'BJP',
    alloted: 0,
  },
  {
    serial: 17,
    name: 'Dr Harsh Vardhan',
    party_name: 'BJP',
    alloted: 0,
  },
  {
    serial: 18,
    name: 'Maneka Gandhi',
    party_name: 'BJP',
    alloted: 0,
  },
  {
    serial: 19,
    name: 'Dilip Ghosh',
    party_name: 'BJP',
    alloted: 0,
  },
  {
    serial: 20,
    name: 'Sambit Patra',
    party_name: 'BJP',
    alloted: 1,
  },
  {
    serial: 21,
    name: 'Manoj Tiwari',
    party_name: 'BJP',
    alloted: 1,
  },
  {
    serial: 22,
    name: 'Meenakshi Lekhi',
    party_name: 'BJP',
    alloted: 0,
  },
  {
    serial: 23,
    name: 'Kirron Kher',
    party_name: 'BJP',
    alloted: 0,
  },
  {
    serial: 24,
    name: 'Poonam Mahajan',
    party_name: 'BJP',
    alloted: 0,
  },
  {
    serial: 25,
    name: 'Hema Malini',
    party_name: 'BJP',
    alloted: 0,
  },
  {
    serial: 26,
    name: 'Giriraj Singh',
    party_name: 'BJP',
    alloted: 0,
  },
  {
    serial: 27,
    name: 'Rahul Gandhi',
    party_name: 'INC',
    alloted: 0,
  },
  {
    serial: 28,
    name: 'Sonia Gandhi',
    party_name: 'INC',
    alloted: 0,
  },
  {
    serial: 29,
    name: 'Captain Amarinder Singh',
    party_name: 'INC',
    alloted: 0,
  },
  {
    serial: 30,
    name: 'Gaurav Gogoi',
    party_name: 'INC',
    alloted: 0,
  },
  {
    serial: 31,
    name: 'Shashi Tharoor',
    party_name: 'INC',
    alloted: 0,
  },
  {
    serial: 32,
    name: 'P. Chidambaram',
    party_name: 'INC',
    alloted: 0,
  },
  {
    serial: 33,
    name: 'Adhir Ranjan Chowdhury',
    party_name: 'INC',
    alloted: 0,
  },
  {
    serial: 34,
    name: 'Jairam Ramesh',
    party_name: 'INC',
    alloted: 0,
  },
  {
    serial: 35,
    name: 'Ashok Gehlot',
    party_name: 'INC',
    alloted: 0,
  },
  {
    serial: 36,
    name: 'Arvind Kejriwal',
    party_name: 'AAP',
    alloted: 0,
  },
  {
    serial: 37,
    name: 'Manish Sisodia',
    party_name: 'AAP',
    alloted: 0,
  },
  {
    serial: 38,
    name: 'Sanjay Singh',
    party_name: 'AAP',
    alloted: 0,
  },
  {
    serial: 39,
    name: 'Mamta Banerjee',
    party_name: 'TMC',
    alloted: 0,
  },
  {
    serial: 40,
    name: 'Mahua Moitra',
    party_name: 'TMC',
    alloted: 0,
  },
  {
    serial: 41,
    name: 'Subrata Bakshi',
    party_name: 'TMC',
    alloted: 0,
  },
  {
    serial: 42,
    name: 'Nitish Kumar',
    party_name: 'JDU',
    alloted: 1,
  },
  {
    serial: 43,
    name: 'Uddhav Thackeray',
    party_name: 'SS',
    alloted: 0,
  },
  {
    serial: 44,
    name: 'Sanjay Raut',
    party_name: 'SS',
    alloted: 0,
  },
  {
    serial: 45,
    name: 'Farooq Abdullah',
    party_name: 'JAMMU AND KASHMIR CONFERENCE',
    alloted: 0,
  },
  {
    serial: 46,
    name: 'Asaduddin Owaisi',
    party_name: 'AIMIM',
    alloted: 0,
  },
  {
    serial: 47,
    name: 'Sharad Pawar',
    party_name: 'NCP',
    alloted: 0,
  },
  {
    serial: 48,
    name: 'Pinarayi Vijayan',
    party_name: 'CPI(M)',
    alloted: 0,
  },
  {
    serial: 49,
    name: 'Sitaram Yechury',
    party_name: 'CPI(M)',
    alloted: 0,
  },
  {
    serial: 50,
    name: 'Y.s. Jagan Mohan Reddy',
    party_name: 'YSR CONGRESS',
    alloted: 1,
  },
  {
    serial: 51,
    name: 'P.v. Midhun Reddy',
    party_name: 'YSR CONGRESS',
    alloted: 0,
  },
  {
    serial: 52,
    name: 'Gita Vishwanath',
    party_name: 'YSR CONGRESS',
    alloted: 0,
  },
  {
    serial: 53,
    name: 'Mayawati',
    party_name: 'BSP',
    alloted: 0,
  },
  {
    serial: 54,
    name: 'Ramji Gautam',
    party_name: 'BSP',
    alloted: 0,
  },
  {
    serial: 55,
    name: 'Prakash Singh Badal',
    party_name: 'SAD',
    alloted: 0,
  },
  {
    serial: 56,
    name: 'Sukhbir Singh Badal',
    party_name: 'SAD',
    alloted: 0,
  },
  {
    serial: 57,
    name: 'Harsimrat Kaur Badal',
    party_name: 'SAD',
    alloted: 1,
  },
  {
    serial: 58,
    name: 'Akhilesh Yadav',
    party_name: 'SP',
    alloted: 0,
  },
  {
    serial: 59,
    name: 'Dimple Yadav',
    party_name: 'SP',
    alloted: 0,
  },
  {
    serial: 60,
    name: 'Tejasvi Yadav',
    party_name: 'RJD',
    alloted: 0,
  },
  {
    serial: 61,
    name: 'Supriya Sule',
    party_name: 'NCP',
    alloted: 0,
  },
  {
    serial: 62,
    name: 'N. Chandrababu Naidu',
    party_name: 'TDP',
    alloted: 0,
  },
  {
    serial: 63,
    name: 'A Raja',
    party_name: 'DMK',
    alloted: 0,
  },
  {
    serial: 64,
    name: 'Kanimozhi Karunanidhi',
    party_name: 'DMK',
    alloted: 0,
  },
  {
    serial: 65,
    name: 'K Chandrashekhar Rao',
    party_name: 'BRS',
    alloted: 0,
  },
  {
    serial: 66,
    members: 'Nabha Hira Kumar Sarania',
    party_name: 'Independent Candidate',
    alloted: 0,
  },
]

const Aippm = () => {
  return (
    <div>
      <Navbar />
      <Header />
      <Matrix
        data={portfolios}
        heading="AIPPM Matrix"
        c1="S.no."
        c2="Name"
        c3="Affiliation"
      />
      <Footer />
    </div>
  )
}

export default Aippm
