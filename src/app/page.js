import Image from 'next/image'
import Link from 'next/link'
import AboutUs from './components/AboutUs'
import WhatWeDo from './components/WhatWeDo'
import ContactUs from './components/ContactUs'
import Welcome from './components/Welcome'
export default function Home() {
  return (
    <>
    <Welcome/>
    <AboutUs/>
    <WhatWeDo/>
    <ContactUs/>
    </>
  )
}
