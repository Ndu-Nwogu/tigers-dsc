import Image from 'next/image'
import welcome from '../../../welcome.svg'
import Slideshow from './Slideshow'


export default function Welcome(){
    return(
        <div>
        {/* for larger devices */}
        <div className=' h-[85vh] w-full p-20 lg:flex md:flex hidden items-center justify-around '>
            <div className=' items-center justify-center inline-block'>
                <p className='text-[20px] font-extralight'></p>
                <p className=' text-[#E36230] text-8xl font-[600]'>Tigers <br/> Data Science Club</p>
                <div className=' inline-flex items-center justify-around gap-6 mt-5'>
                    <a href="https://docs.google.com/forms/d/1RiQxIEpCmPfWos_uy7Mmc8A_N-b2RETJxAvj0w5AdXM/viewform?edit_requested=true" target="_blank" className=' h-[60px] w-[110px] bg-[#E36230] rounded-md flex items-center justify-center text-lg font-[400]'>Join Us</a>
                    <a href='/./#contact-us' className=' h-[60px] w-[140px] border border-[#E36230] rounded-md flex items-center justify-center text-lg font-[400]'>Sponsor Us</a> 
                </div>
            </div>
            <div className=''>
                <Slideshow/>
            </div>
        </div>
        {/* for smaller devices */}
        <div className='lg:hidden md:hidden w-[100vw] p-5 h-[90vh] grid justify-center items-center '>
            <div className=''>
                <p className=' text-[#E36230] text-4xl font-[500] text-center '>Tigers <br/> Data Science Club</p> 
                <p className=' text-center text-[16px] font-extralight mb-10 '></p>
                <div className='  flex items-center justify-center gap-5'>
                    <a href="https://docs.google.com/forms/d/1RiQxIEpCmPfWos_uy7Mmc8A_N-b2RETJxAvj0w5AdXM/viewform?edit_requested=true" target="_blank" className=' h-[50px] w-[100px] bg-[#E36230] rounded-md flex items-center justify-center '>Join Us</a>
                    <a href='/./#contact-uss' className=' h-[50px] w-[120px] border border-[#E36230] rounded-md flex items-center justify-center '>Sponsor Us</a> 
                </div>
                <div className=' mt-10 flex justify-center items-center'>
                    <Image src={welcome}/>
                </div>
            </div>
              
        </div>

    </div>
    )
}