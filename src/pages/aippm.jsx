import React from 'react'
import { Header } from '@/components/Header'
import Matrix from '@/components/Matrix'

const portfolios = [
  {
    serial: 1,
    name: 'Narendra Modi',
    party_name: 'Bharatiya Janata Party',
    alloted: 0,
  },
  {
    serial: 2,
    name: 'Rajnath Singh',
    party_name: 'Bharatiya Janata Party',
    alloted: 0,
  },
  {
    serial: 3,
    name: 'Arun Jaitley',
    party_name: 'Bharatiya Janata Party',
    alloted: 0,
  },
  {
    serial: 4,
    name: 'Nirmala Sitharaman',
    party_name: 'Bharatiya Janata Party',
    alloted: 0,
  },
  {
    serial: 5,
    name: 'Smriti Irani',
    party_name: 'Bharatiya Janata Party',
    alloted: 0,
  },
  {
    serial: 6,
    name: 'Ravi Shankar Prasad',
    party_name: 'Bharatiya Janata Party',
    alloted: 0,
  },
  {
    serial: 7,
    name: 'Nitin Gadhkari',
    party_name: 'Bharatiya Janata Party',
    alloted: 0,
  },
  {
    serial: 8,
    name: 'Tejasvi Surya',
    party_name: 'Bharatiya Janata Party',
    alloted: 0,
  },
  {
    serial: 9,
    name: 'Dr. Harsh Vardhan',
    party_name: 'Bharatiya Janata Party',
    alloted: 0,
  },
  {
    serial: 10,
    name: 'Sadhvi Pragya Singh Thakur',
    party_name: 'Bharatiya Janata Party',
    alloted: 0,
  },
  {
    serial: 11,
    name: 'Smt. Maneka Gandhi',
    party_name: 'Bharatiya Janata Party',
    alloted: 0,
  },
  {
    serial: 12,
    name: 'Shri Tirath Singh Rawat',
    party_name: 'Bharatiya Janata Party',
    alloted: 0,
  },
  {
    serial: 13,
    name: 'Shri Dilip Ghosh',
    party_name: 'Bharatiya Janata Party',
    alloted: 0,
  },
  {
    serial: 14,
    name: 'J.p. Nadda',
    party_name: 'Bharatiya Janata Party',
    alloted: 0,
  },
  {
    serial: 15,
    name: 'Shri Amit Shah',
    party_name: 'Bharatiya Janata Party',
    alloted: 0,
  },
  {
    serial: 16,
    name: 'Shri Manoj Tiwari',
    party_name: 'Bharatiya Janata Party',
    alloted: 0,
  },
  {
    serial: 17,
    name: 'Subrahmanyam Jaishankar',
    party_name: 'Bharatiya Janata Party',
    alloted: 0,
  },
  {
    serial: 18,
    name: 'Meenakshi Lekhi',
    party_name: 'Bharatiya Janata Party',
    alloted: 0,
  },
  {
    serial: 19,
    name: 'Piyush Goyal',
    party_name: 'Bharatiya Janata Party',
    alloted: 0,
  },
  {
    serial: 20,
    name: 'Yogi Adityanath',
    party_name: 'Bharatiya Janata Party',
    alloted: 0,
  },
  {
    serial: 21,
    name: 'Ramesh Pokhriyal',
    party_name: 'Bharatiya Janata Party',
    alloted: 0,
  },
  {
    serial: 22,
    name: 'Gautam Gambhir',
    party_name: 'Bharatiya Janata Party',
    alloted: 0,
  },
  {
    serial: 23,
    name: 'Narendra Singh Tomar',
    party_name: 'Bharatiya Janata Party',
    alloted: 0,
  },
  {
    serial: 24,
    name: 'Jitenra Singh',
    party_name: 'Bharatiya Janata Party',
    alloted: 0,
  },
  {
    serial: 25,
    name: 'Draupadi Murmu',
    party_name: 'Bharatiya Janata Party',
    alloted: 0,
  },
  {
    serial: 26,
    name: 'Ashwini Vaishnaw',
    party_name: 'Bharatiya Janata Party',
    alloted: 0,
  },
  {
    serial: 27,
    name: 'Kiron Kher',
    party_name: 'Bharatiya Janata Party',
    alloted: 0,
  },
  {
    serial: 28,
    name: 'Sunny Deol',
    party_name: 'Bharatiya Janata Party',
    alloted: 0,
  },
  {
    serial: 29,
    name: 'Anurag Singh Thakur',
    party_name: 'Bharatiya Janata Party',
    alloted: 0,
  },
  {
    serial: 30,
    name: 'A.k. Antony',
    party_name: 'Indian National Congress',
    alloted: 0,
  },
  {
    serial: 31,
    name: 'Rahul Gandhi',
    party_name: 'Indian National Congress',
    alloted: 0,
  },
  {
    serial: 32,
    name: 'Sonia Gandhi',
    party_name: 'Indian National Congress',
    alloted: 0,
  },
  {
    serial: 33,
    name: 'Shashi Tharoor',
    party_name: 'Indian National Congress',
    alloted: 0,
  },
  {
    serial: 34,
    name: 'Ashok Gehlot',
    party_name: 'Indian National Congress',
    alloted: 0,
  },
  {
    serial: 35,
    name: 'Sachin Pilot',
    party_name: 'Indian National Congress',
    alloted: 0,
  },
  {
    serial: 36,
    name: 'Jairam Ramesh',
    party_name: 'Indian National Congress',
    alloted: 0,
  },
  {
    serial: 37,
    name: 'Shri Gaurav Gogoi',
    party_name: 'Indian National Congress',
    alloted: 0,
  },
  {
    serial: 38,
    name: 'Shri K. Muraleedharan',
    party_name: 'Indian National Congress',
    alloted: 0,
  },
  {
    serial: 39,
    name: 'Smt. Priyanka Gandhi',
    party_name: 'Indian National Congress',
    alloted: 0,
  },
  {
    serial: 40,
    name: 'Navjot Singh Sidhu',
    party_name: 'Indian National Congress',
    alloted: 0,
  },
  {
    serial: 41,
    name: 'Sanjay Singh',
    party_name: 'Aam Aadmi Party',
    alloted: 0,
  },
  {
    serial: 42,
    name: 'Arvind Kejriwal',
    party_name: 'Aam Aadmi Party',
    alloted: 0,
  },
  {
    serial: 43,
    name: 'Manish Sisodia',
    party_name: 'Aam Aadmi Party',
    alloted: 0,
  },
  {
    serial: 44,
    name: 'Kk Venugoapl',
    party_name: 'Aam Aadmi Party',
    alloted: 0,
  },
  {
    serial: 45,
    name: 'Satyendra Jain',
    party_name: 'Aam Aadmi Party',
    alloted: 0,
  },
  {
    serial: 46,
    name: 'Bhagwant Maan',
    party_name: 'Aam Aadmi Party',
    alloted: 0,
  },
  {
    serial: 47,
    name: 'Satyendra Kumar Jha',
    party_name: 'Aam Aadmi Party',
    alloted: 0,
  },
  {
    serial: 48,
    name: 'Subhramaniyam Swami',
    party_name: 'Aam Aadmi Party',
    alloted: 0,
  },
  {
    serial: 49,
    name: 'Sanjay Raut',
    party_name: 'Shiv Sena',
    alloted: 0,
  },
  {
    serial: 50,
    name: 'Uddhav Thackeray',
    party_name: 'Shiv Sena',
    alloted: 0,
  },
  {
    serial: 51,
    name: 'Manoj Jha',
    party_name: 'Rashtriya Janta Dal',
    alloted: 0,
  },
  {
    serial: 52,
    name: 'Tejasvi Yadav',
    party_name: 'Rashtriya Janta Dal',
    alloted: 0,
  },
  {
    serial: 53,
    name: 'Lalan Singh',
    party_name: 'Rashtriya Janta Dal',
    alloted: 0,
  },
  {
    serial: 54,
    name: 'Supriya Sule',
    party_name: 'Nationalist Congress Party',
    alloted: 0,
  },
  {
    serial: 55,
    name: 'Sharad Pawar',
    party_name: 'Nationalist Congress Party',
    alloted: 0,
  },
  {
    serial: 56,
    name: 'Mayawati Das',
    party_name: 'Bahujan Samaj Party',
    alloted: 0,
  },
  {
    serial: 57,
    name: 'Akhilesh Yadav',
    party_name: 'Samajwadi Party',
    alloted: 0,
  },
  {
    serial: 58,
    name: 'Sitaram Yechury',
    party_name: 'Communist Party Of India(marxist)',
    alloted: 0,
  },
  {
    serial: 59,
    name: 'K. Subbarayan',
    party_name: 'Communist Party Of India',
    alloted: 0,
  },
  {
    serial: 60,
    name: 'N. Chandrababu Naidu',
    party_name: 'Telegu Desam Party',
    alloted: 0,
  },
  {
    serial: 61,
    name: 'Mamta Banerjee',
    party_name: 'Trinamool Congress',
    alloted: 0,
  },
  {
    serial: 62,
    name: 'Subrata Bakshi',
    party_name: 'Trinamool Congress',
    alloted: 0,
  },
  {
    serial: 63,
    name: "Derek O'Brien",
    party_name: 'Trinamool Congress',
    alloted: 0,
  },
  {
    serial: 64,
    name: 'Y.S. Jaganmohan Reddy',
    party_name: 'Yuvajana Shramika Rythu Congress Party (YSR Congress Party)',
    alloted: 0,
  },
  {
    serial: 65,
    name: 'P.V. Midhun Reddy',
    party_name: 'Yuvajana Shramika Rythu Congress Party (YSR Congress Party)',
    alloted: 0,
  },
  {
    serial: 66,
    name: 'M Selvaraj',
    party_name: 'Communist Party of India',
    alloted: 0,
  },
  {
    serial: 67,
    name: 'Dr Farooq Abdullah',
    party_name: 'Jammu and Kashmir National Conference',
    alloted: 0,
  },
  {
    serial: 68,
    name: 'Omar Abdullah',
    party_name: 'Jammu and Kashmir National Conference',
    alloted: 0,
  },
  {
    serial: 69,
    name: 'Prakash Singh Badal',
    party_name: 'NATIONAL DEMOCRATIC ALLIANCE',
    alloted: 0,
  },
  {
    serial: 70,
    name: 'Sukhbir Singh Badal',
    party_name: 'Shiromani Akali Dal',
    alloted: 0,
  },
  {
    serial: 71,
    name: 'Harsimrat Kaur Badal',
    party_name: 'Shiromani Akali Dal',
    alloted: 0,
  },
]

const Aippm = () => {
  return (
    <div>
      <Header />
      <Matrix
        data={portfolios}
        heading="AIPPM Matrix"
        c1="S.no."
        c2="Name"
        c3="Affiliation"
      />
    </div>
  )
}

export default Aippm
