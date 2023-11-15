import Link from "next/link"
import Image from "next/image"
import aboutus from '../../../aboutus.svg'
import aboutusImage from "./aboutusImage.jpeg"
export default function AboutUs(){
    return(
        <div>
        {/* larger devices */}
            <div className=" lg:block md:block hidden mb-16 ">
                <h4 className="  text-[#E36230] text-4xl font-bold flex justify-center items-center mb-12">ABOUT US</h4>
                <div className=" flex justify-center items-center gap-14">
                    <Image src={aboutusImage} className=" h-[50vh] w-[80vh]"/>
                    <p className=" text-center w-[550px] text-lg">
                    The Texas Southern University Data Science Club is a student-run organization
                    dedicated to fostering a diverse community of learners. Our club stands as a bridge that
                    connects aspirations with resources, enabling each student to evolve into a skilled practitioner in
                    the world of data science.
                    </p>
                </div>
            </div>
            {/* smaller devices */}
            <div className="  lg:hidden md:hidden p-5 grid items-center justify-center mb-16  ">
                <h4 className="  text-[#E36230] text-xl font-semibold flex justify-center items-center mb-8">ABOUT US</h4>
                <div className=" p-1 justify-center items-center grid gap-8">
                    <Image src={aboutusImage}  className=" rounded-sm h-[25vh] "/>
                    <p className="text-center text-[15px]">
                        The Data science club at Texas Southern University is student-run organization which is filled with a bunch of big brained people like myself as well as other eager-minded students who are always willing to learn and share their ideas as a community. 
                    </p>
                </div>
            </div>
        </div>
    )
}