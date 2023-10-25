import react from "react"
import Calendar from "./Calendar"
import Link from "next/link"
import Image from "next/image"
import oracleEvent from "./oracleevent.jpeg"

export default function page(){
    return(
        <div className=" ">
            <div className=" bg-[#E36230] lg:h-[12vh] md:h-[12vh] h-[10vh] flex items-center justify-center">
                <p className="lg:text-[40px] md:text-[40px] text-[30px] font-medium">Upcoming Events</p>
            </div>
            <div className="flex justify-center">
                <Calendar/>
            </div>
            <div className=" lg:hidden md:hidden h-[70vh] p-5">
                <div className=" border rounded-xl border-[#5d5c5c] p-5 mt-5 mb-5">
                    <div className=" flex items-center p-5 justify-center">
                        <Image src={oracleEvent} height={10} width={200}/>
                    </div>
                    <div>
                        <p className=" text-center mb-5"> We are thrilled to be having Kierra Eaglin, MBA-HRM and Madhav Jariwala join us. Look forward to seeing you all there.</p>
                    </div>
                    <div className=" flex justify-end">
                        <a href="https://docs.google.com/forms/d/e/1FAIpQLSdMfPSQOcIIjOTtTpgY4BLAIoMHw9-yD19wRknqS2ST1_anRw/viewform" target="_blank" className="h-[45px] w-[85px]  bg-[#E36230] rounded-md flex items-center justify-center ">Register</a>
                    </div>
                </div>
            </div>
        </div>
    )
}