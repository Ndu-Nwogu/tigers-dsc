import Calendar from "./Calendar"
import Image from "next/image"
import ge from "./googleevent.jpg"

export default function page(){
    return(
        <div className=" ">
            <div className=" bg-[#E36230] lg:h-[15vh] md:h-[12vh] h-[10vh] flex items-center justify-center">
                <p className="lg:text-[40px] md:text-[40px] text-[30px] font-medium">Upcoming Events</p>
            </div>
            <div className="flex justify-center">
                <Calendar/>
            </div>
            <div className=" lg:hidden md:hidden h-[70vh] p-5">
                <div className=" border rounded-xl border-[#5d5c5c] p-5 mt-5 mb-5">
                    <div className=" flex items-center p-5 justify-center">
                        <Image src={ge} height={10} width={200} className=" rounded"/>
                    </div>
                    <div>
                        <p className=" text-center mb-5"> We are thrilled to be having the Google team join us on outr next meeting. Look forward to seeing you all there.</p>
                    </div>
                    <div className=" flex justify-end">
                        <a href="https://docs.google.com/forms/d/118Qc1eJUVsMMlsHcOo6ujGLlwcosqtD4IdJ8Fh0WBrQ/edit" target="_blank" className="h-[45px] w-[85px]  bg-[#E36230] rounded-md flex items-center justify-center ">Register</a>
                    </div>
                </div>
                
            </div>
        </div>
    )
}