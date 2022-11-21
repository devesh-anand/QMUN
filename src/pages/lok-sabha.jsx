import React from 'react'
import { Header } from '@/components/Header'
import Matrix from '@/components/Matrix'
import { Footer } from '@/components/Footer'
import Navbar from '@/components/Navbar'

const portfolios = [
  {
    serial: 1,
    members: 'Narendra Modi',
    party_name: 'Bharatiya Janata Party',
    alloted: 0,
  },
  {
    serial: 2,
    members: 'Rajnath Singh',
    party_name: 'Bharatiya Janata Party',
    alloted: 0,
  },
  {
    serial: 3,
    members: 'Amit Shah',
    party_name: 'Bharatiya Janata Party',
    alloted: 0,
  },
  {
    serial: 4,
    members: 'Nitin Gadkari',
    party_name: 'Bharatiya Janata Party',
    alloted: 0,
  },
  {
    serial: 5,
    members: 'Smriti Irani',
    party_name: 'Bharatiya Janata Party',
    alloted: 0,
  },
  {
    serial: 6,
    members: 'Kiren Rijiju',
    party_name: 'Bharatiya Janata Party',
    alloted: 0,
  },
  {
    serial: 7,
    members: 'Anurag Thakur',
    party_name: 'Bharatiya Janata Party',
    alloted: 0,
  },
  {
    serial: 8,
    members: 'Narendra Singh Tomar',
    party_name: 'Bharatiya Janata Party',
    alloted: 0,
  },
  {
    serial: 9,
    members: 'Dr Virendra Kumar',
    party_name: 'Bharatiya Janata Party',
    alloted: 0,
  },
  {
    serial: 10,
    members: 'Giriraj Singh',
    party_name: 'Bharatiya Janata Party',
    alloted: 0,
  },
  {
    serial: 11,
    members: 'G Kishan Reddy',
    party_name: 'Bharatiya Janata Party',
    alloted: 0,
  },
  {
    serial: 12,
    members: 'Gajendra Singh Shekhawat',
    party_name: 'Bharatiya Janata Party',
    alloted: 0,
  },
  {
    serial: 13,
    members: 'Ashwani Kumar Choubey',
    party_name: 'Bharatiya Janata Party',
    alloted: 0,
  },
  {
    serial: 14,
    members: 'Meenakshi Lekhi',
    party_name: 'Bharatiya Janata Party',
    alloted: 0,
  },
  {
    serial: 15,
    members: 'Manoj Tiwari',
    party_name: 'Bharatiya Janata Party',
    alloted: 0,
  },
  {
    serial: 16,
    members: 'Tejasvi Surya',
    party_name: 'Bharatiya Janata Party',
    alloted: 0,
  },
  {
    serial: 17,
    members: 'Poonam Mahajan',
    party_name: 'Bharatiya Janata Party',
    alloted: 0,
  },
  {
    serial: 18,
    members: 'Sunny Deol',
    party_name: 'Bharatiya Janata Party',
    alloted: 0,
  },
  {
    serial: 19,
    members: 'Rajyavardhan Singh Rathore',
    party_name: 'Bharatiya Janata Party',
    alloted: 0,
  },
  {
    serial: 20,
    members: 'Hema Malini',
    party_name: 'Bharatiya Janata Party',
    alloted: 0,
  },
  {
    serial: 21,
    members: 'Sadananda Gowda',
    party_name: 'Bharatiya Janata Party',
    alloted: 0,
  },
  {
    serial: 22,
    members: 'Ravi Shankar Prasad',
    party_name: 'Bharatiya Janata Party',
    alloted: 0,
  },
  {
    serial: 23,
    members: 'Ramesh Pokhriyal',
    party_name: 'Bharatiya Janata Party',
    alloted: 0,
  },
  {
    serial: 24,
    members: 'Arjun Munda',
    party_name: 'Bharatiya Janata Party',
    alloted: 0,
  },
  {
    serial: 25,
    members: 'Maneka Gandhi',
    party_name: 'Bharatiya Janata Party',
    alloted: 0,
  },
  {
    serial: 26,
    members: 'Bharati Pravin Pawar',
    party_name: 'Bharatiya Janata Party',
    alloted: 0,
  },
  {
    serial: 27,
    members: 'Harsh Vardhan',
    party_name: 'Bharatiya Janata Party',
    alloted: 0,
  },
  {
    serial: 28,
    members: 'Prahlad Joshi',
    party_name: 'Bharatiya Janata Party',
    alloted: 0,
  },
  {
    serial: 29,
    members: 'Rao Inderjit Singh',
    party_name: 'Bharatiya Janata Party',
    alloted: 0,
  },
  {
    serial: 30,
    members: 'Kirron Kher',
    party_name: 'Bharatiya Janata Party',
    alloted: 0,
  },
  {
    serial: 31,
    members: 'Sanjeev Balyan',
    party_name: 'Bharatiya Janata Party',
    alloted: 0,
  },
  {
    serial: 32,
    members: 'Nityanand Rai',
    party_name: 'Bharatiya Janata Party',
    alloted: 0,
  },
  {
    serial: 33,
    members: 'Renuka Singh Saruta',
    party_name: 'Bharatiya Janata Party',
    alloted: 0,
  },
  {
    serial: 34,
    members: 'Tapir Gao',
    party_name: 'Bharatiya Janata Party',
    alloted: 0,
  },
  {
    serial: 35,
    members: 'Rajdeep Roy',
    party_name: 'Bharatiya Janata Party',
    alloted: 0,
  },
  {
    serial: 36,
    members: 'Sanjay Jaiswal',
    party_name: 'Bharatiya Janata Party',
    alloted: 0,
  },
  {
    serial: 37,
    members: 'Rama Devi',
    party_name: 'Bharatiya Janata Party',
    alloted: 0,
  },
  {
    serial: 38,
    members: 'Arun Sao',
    party_name: 'Bharatiya Janata Party',
    alloted: 0,
  },
  {
    serial: 39,
    members: 'Gautam Gambhir',
    party_name: 'Bharatiya Janata Party',
    alloted: 0,
  },
  {
    serial: 40,
    members: 'Navneet Ravi Rana',
    party_name: 'Independent',
    alloted: 0,
  },
  {
    serial: 41,
    members: 'Rahul Gandhi',
    party_name: 'Indian National Congress',
    alloted: 0,
  },
  {
    serial: 42,
    members: 'Shashi Tharoor',
    party_name: 'Indian National Congress',
    alloted: 0,
  },
  {
    serial: 43,
    members: 'Sonia Gandhi',
    party_name: 'Indian National Congress',
    alloted: 0,
  },
  {
    serial: 44,
    members: 'Adhir Ranjan Chowdhary',
    party_name: 'Indian National Congress',
    alloted: 0,
  },
  {
    serial: 45,
    members: 'Gaurav Gogoi',
    party_name: 'Indian National Congress',
    alloted: 0,
  },
  {
    serial: 46,
    members: 'Geeta Kora',
    party_name: 'Indian National Congress',
    alloted: 0,
  },
  {
    serial: 47,
    members: 'Mahua Moitra',
    party_name: 'Trinamool Congress',
    alloted: 0,
  },
  {
    serial: 48,
    members: 'Nusrat Jahan',
    party_name: 'Trinamool Congress',
    alloted: 0,
  },
  {
    serial: 49,
    members: 'Hemant Shriram',
    party_name: 'Shiv Sena',
    alloted: 0,
  },
  {
    serial: 50,
    members: 'Prataprao Jadhav',
    party_name: 'Shiv Sena',
    alloted: 0,
  },
  {
    serial: 51,
    members: 'Chandra Sekhar',
    party_name: 'Biju Janata Dal',
    alloted: 0,
  },
  {
    serial: 52,
    members: 'Sangeeta Azad',
    party_name: 'Bahujan Samaj Party',
    alloted: 0,
  },
  {
    serial: 53,
    members: 'Sukhbir Singh',
    party_name: 'Siromani Akali Dal',
    alloted: 0,
  },
  {
    serial: 54,
    members: 'Dr St Hasan',
    party_name: 'Samajwadi Party',
    alloted: 0,
  },
  {
    serial: 55,
    members: 'Asaduddin Owaisi',
    party_name: 'All India Majlis-e-ittehadul-muslimeen',
    alloted: 0,
  },
  {
    serial: 56,
    members: 'S Venkatesan',
    party_name: 'Communist Party Of India(m)',
    alloted: 0,
  },
  {
    serial: 57,
    members: 'A.p.k. Chinraj',
    party_name: 'Dravida Munnetra Kazhagam',
    alloted: 0,
  },
  {
    serial: 58,
    members: 'A Raja',
    party_name: 'Dravida Munnetra Kazhagam',
    alloted: 0,
  },
  {
    serial: 59,
    members: 'Kanimozhi Karunanidhi',
    party_name: 'Dravida Munnetra Kazhagam',
    alloted: 0,
  },
  {
    serial: 60,
    members: 'Supriya Sadanand (Supriya Sule)',
    party_name: 'Nationalist Congress Party',
    alloted: 0,
  },
  {
    serial: 61,
    members: 'Hanuman Beniwal',
    party_name: 'Rashtriya Loktantrik Party',
    alloted: 0,
  },
  {
    serial: 62,
    members: 'P Ravindranath',
    party_name: 'All India Anna Dravida Munnetra Kazhagam',
    alloted: 0,
  },
  {
    serial: 63,
    members: 'Santosh Kumar',
    party_name: 'Janata Dal(u)',
    alloted: 0,
  },
  {
    serial: 64,
    members: 'Ajay Kumar Mandal',
    party_name: 'Janata Dal(u)',
    alloted: 0,
  },
  {
    serial: 65,
    members: 'Vijay Kumar Hansdak',
    party_name: 'Jharkhand Mukti Morcha',
    alloted: 0,
  },
  {
    serial: 66,
    members: 'Nk Premachandran',
    party_name: 'Revolutionary Socialist Party',
    alloted: 0,
  },
  {
    serial: 67,
    members: 'Kani K Nowas',
    party_name: 'Indian Union Muslim League',
    alloted: 0,
  },
  {
    serial: 68,
    members: 'Chandra Sekhar Bellana',
    party_name: 'Ysr Congress',
    alloted: 0,
  },
  {
    serial: 69,
    members: 'Geetha Viswanath Vanya',
    party_name: 'Ysr Congress',
    alloted: 0,
  },
  {
    serial: 70,
    members: 'Agatha K Sangma',
    party_name: "National People's Party",
    alloted: 0,
  },
]

const LokSabha = () => {
  return (
    <div>
      <Navbar />
      <Header />
      <Matrix
        data={portfolios}
        heading="Lok Sabha Matrix"
        c1="S.no."
        c2="Name"
        c3="Party"
      />
      <Footer />
    </div>
  )
}

export default LokSabha
