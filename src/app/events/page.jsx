import react from "react"
import Calendar from "./Calendar"

export default function page(){
    return(
        <div className=" ">
            <div className=" bg-[#E36230] h-[12vh] flex items-center justify-center">
                <p className="lg:text-[40px] md:text-[40px] text-[30px] font-medium">Upcoming Events</p>
            </div>
            <div className="flex justify-center">
                <Calendar/>
            </div>
        </div>
    )
}