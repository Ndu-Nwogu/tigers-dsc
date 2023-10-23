import Image from 'next/image'
import Link from 'next/link'
import welcome from '../../welcome.svg'
import AboutUs from './components/AboutUs'
import WhatWeDo from './components/WhatWeDo'
import ContactUs from './components/ContactUs'
export default function Home() {
  return (
    <>
    <div className=' h-[88vh] w-full p-20 inline-flex items-center justify-around'>
      <div className=' items-center justify-center inline-block'>
        <p className='text-[20px] font-extralight'>Insert Motto here...</p>
        <p className=' text-[#E36230] text-[64px]'>Tigers <br/> Data Science Club</p>
        <div className=' inline-flex items-center justify-around w-[250px] mt-3'>
          <a href="https://docs.google.com/forms/d/1RiQxIEpCmPfWos_uy7Mmc8A_N-b2RETJxAvj0w5AdXM/viewform?edit_requested=true" target="_blank" className=' h-[50px] w-[100px] bg-[#E36230] rounded-md flex items-center justify-center '>Join Us</a>
          <a href='/./#contact-us' className=' h-[50px] w-[120px] border border-[#E36230] rounded-md flex items-center justify-center '>Sponsor Us</a> 
        </div>
      </div>
      <div className='flex'>
        <Image src={welcome}/>
      </div>
    </div>

    <AboutUs/>
    <WhatWeDo/>
    <ContactUs/>
    </>
  )
}
