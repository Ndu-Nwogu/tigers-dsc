export default function WhatWeDo(){
    return(
        <div>
        {/* larger devices */}
            <div className="lg:block md:block hidden mb-14">
                <h4 className="  text-[#E36230] text-4xl font-bold flex justify-center items-center mb-12">WHAT WE DO</h4>
                <div className="flex justify-center items-center">
                    <div className=" grid grid-cols-2 gap-20 p-8">
                        <div className=" bg-[#2A2A2A] w-[400px] h-[200px] rounded-xl p-5 items-center block justify-center">
                            <h4 className=" text-[#E36230] text-center text-2xl font-normal mb-3">Workshops</h4>
                            <p className=" text-base text-center">Learn valuable skills in data science and machine learning to start applying them to projects, interview prep, and professional experiences!</p>
                        </div>
                        <div className=" bg-[#2A2A2A] w-[400px] h-[200px] rounded-xl p-5 items-center block justify-center">
                            <h4 className=" text-[#E36230] text-center text-2xl font-normal mb-3">Projects</h4>
                            <p className=" text-base text-center">Collaborate with fellow students and mentors to tackle different kinds of projects to better your skills and knowledge</p>
                        </div>
                        <div className=" bg-[#2A2A2A] w-[400px] h-[200px] rounded-xl p-5 items-center block justify-center">
                            <h4 className=" text-[#E36230] text-center text-2xl font-normal mb-3">Socials</h4>
                            <p className=" text-base text-center">Get to know your fellow data enthusiasts in fun events hosted by us and make friends across many different majors at TSU!</p>
                        </div>
                        <div className=" bg-[#2A2A2A] w-[400px] h-[200px] rounded-xl p-5 items-center block justify-center">
                            <h4 className=" text-[#E36230] text-center text-2xl font-normal mb-3">Mentorships</h4>
                            <p className=" text-base text-center">Come hear from industry and academic professionals about how companies and researchers use data in their work!</p>
                        </div>
                    </div>
                </div>
            </div>

            {/* smaller devices */}
            <div className="lg:hidden md:hidden  mb-14">
                <h4 className="  text-[#E36230] text-xl font-semibold flex justify-center items-center mb-2">WHAT WE DO</h4>
                <div className=" grid justify-center items-center">
                    <div className=" grid grid-cols-1 gap-10 p-8">
                        <div className=" bg-[#2A2A2A] w-[75vw] h-[200px] rounded-xl p-5 items-center block justify-center">
                            <h4 className=" text-[#E36230] text-center text-2xl font-normal mb-3">Workshops</h4>
                            <p className=" text-base text-center">Learn valuable skills in data science and machine learning to start applying them to projects, interview prep, and professional experiences!</p>
                        </div>
                        <div className=" bg-[#2A2A2A] w-[75vw] h-[200px] rounded-xl p-5 items-center block justify-center">
                            <h4 className=" text-[#E36230] text-center text-2xl font-normal mb-3">Projects</h4>
                            <p className=" text-base text-center">Collaborate with fellow students and mentors to tackle different kinds of projects to better your skills and knowledge</p>
                        </div>
                        <div className=" bg-[#2A2A2A] w-[75vw] h-[200px] rounded-xl p-5 items-center block justify-center">
                            <h4 className=" text-[#E36230] text-center text-2xl font-normal mb-3">Socials</h4>
                            <p className=" text-base text-center">Get to know your fellow data enthusiasts in fun events hosted by us and make friends across many different majors at TSU!</p>
                        </div>
                        <div className=" bg-[#2A2A2A] w-[75vw] h-[200px] rounded-xl p-5 items-center block justify-center">
                            <h4 className=" text-[#E36230] text-center text-2xl font-normal mb-3">Mentorships</h4>
                            <p className=" text-base text-center">Come hear from industry and academic professionals about how companies and researchers use data in their work!</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}