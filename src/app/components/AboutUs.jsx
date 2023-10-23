import Link from "next/link"
import Image from "next/image"
import aboutus from '../../../aboutus.svg'

export default function AboutUs(){
    return(
        <div>
        {/* larger devices */}
            <div className=" lg:block md:block hidden mb-16 ">
                <h4 className="  text-[#E36230] text-3xl font-medium flex justify-center items-center mb-12">ABOUT US</h4>
                <div className=" flex justify-center items-center gap-14">
                    <Image src={aboutus} className=""/>
                    <p className=" text-center w-[550px] text-lg">
                        The Data science club at Texas Southern University is student-run organization which is filled with a bunch of big brained people like myself as well as other eager-minded students who are always willing to learn and share their ideas as a community. 
                    </p>
                </div>
            </div>
            {/* smaller devices */}
            <div className="  lg:hidden md:hidden p-5 grid items-center justify-center mb-16  ">
                <h4 className="  text-[#E36230] text-xl font-semibold flex justify-center items-center mb-8">ABOUT US</h4>
                <div className=" p-1 justify-center items-center grid gap-8">
                    <Image src={aboutus}  className="  border-red-400"/>
                    <p className="text-center text-[15px]">
                        The Data science club at Texas Southern University is student-run organization which is filled with a bunch of big brained people like myself as well as other eager-minded students who are always willing to learn and share their ideas as a community. 
                    </p>
                </div>
            </div>
        </div>
    )
}