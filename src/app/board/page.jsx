import president from "./images/onye.jpeg"
import treasurer from "./images/xidan.jpeg"
import vice_president from "./images/abhinav.jpeg"
import manager from "./images/justin.jpeg"
import secretary from "./images/aina.jpeg"


import Image from "next/image"

export default function page(){
    return(
        <div>
        {/* larger devices */}
            <div className=" lg:block md:block hidden">
                <div className=" bg-[#E36230] lg:h-[15vh] md:h-[12vh] flex items-center justify-center">
                        <p className="lg:text-[50px] md:text-[40px] text-[30px] font-medium">Meet the Board</p>
                </div>
                <div className="grid items-center justify-center ">
                    <div className=" flex items-center justify-center gap-14 p-10">
                        <Image src={president} className=" h-[300px] w-[300px] rounded-full"/>
                        <div className=" grid gap-6 items-center justify-center">
                            <p className=" text-2xl font-semibold">Onyedikachukwu Ojukwu - President</p>
                            <p className=" text-left w-[500px]">"Hello! I'm Onyedikachukwu Ojukwu, a junior studying computer science
                                with a minor in mathematics at Texas Southern University. Originally from Imo state, Nigeria, I
                                discovered my passion for data science in February 2023. Noticing the absence of a data
                                science club on campus, I founded one to connect with fellow enthusiasts. Outside academics, I
                                love cooking and exploring different cuisines."
                            </p> 
                        </div>  
                    </div>
                    <div className=" flex items-center justify-center gap-14 p-10">
                        <Image src={vice_president} className=" h-[300px] w-[300px] rounded-full"/>
                        <div className=" grid gap-6 items-center justify-center">
                            <p className=" text-2xl font-semibold">Abhinav Singh - Vice President</p>
                            <p className=" text-left w-[500px]">"Hi , I am Abhinav Singh from Janakpur, Nepal double majoring in computer
                            Science and Finance. I serve as the vice-president of Data science club. I aspire to work in
                            fintech industry and data science plays a pivotal role in shaping that industry. I enjoy playing
                            cricket , derivatives trading, and listening to any ideas💡"
                            </p> 
                        </div>  
                    </div>  
                    <div className=" flex items-center justify-center gap-14 p-10">
                        <Image src={secretary} className=" h-[300px] w-[300px] rounded-full"/>
                        <div className=" grid gap-6 items-center justify-center">
                            <p className=" text-2xl font-semibold">Adedeji Aina - Secretary</p>
                            <p className=" text-left w-[500px]">"Hey! My name is Adedeji Aina and I am a senior computer science major. I am
                            from Lagos, a city in Nigeria. I had the opportunity of participating in a Data Science
                            research program which made me develop more interest in data science and this club has
                            given the chance to explore that interest. Outside of class, I enjoy playing video games,
                            reading books, listening to music and playing soccer."
                            </p> 
                        </div>  
                    </div>  
                    <div className=" flex items-center justify-center gap-14 p-10">
                        <Image src={treasurer} className=" h-[300px] w-[300px] rounded-full"/>
                        <div className=" grid gap-6 items-center justify-center">
                            <p className=" text-2xl font-semibold">Xidan You - Treasurer</p>
                            <p className=" text-left w-[500px]">"Hi! My name is Xidan You, a master student in computer science. I am from
                            Chengdu, China. So glad that I joined the TigerDSC, and entered the world of data science
                            and machine learning, where we uncover certainties in an uncertain world. Looking forward
                            to exploring the endless possibilities with TigersDSC!"
                            </p> 
                        </div>  
                    </div>    
                    <div className=" flex items-center justify-center gap-14 p-10">
                        <Image src={manager} className=" h-[300px] w-[300px] rounded-full"/>
                        <div className=" grid gap-6 items-center justify-center">
                            <p className=" text-2xl font-semibold">Justin Etu - Social Media Manager</p>
                            <p className=" text-left w-[500px]">"Hola! My name is Justin Etu and I am a Junior computer science
                            major from Arizona. I joined Tigers Data Science Club because I wanted to learn more about
                            machine learning and data science with a community of other like minded individuals.
                            Outside of this organization, I enjoy working out, learning mobile development, and learning
                            about Afrocentrism."
                            </p> 
                        </div>  
                    </div>  
                </div>
            </div>
            {/* smaller devices */}
            <div className=" lg:hidden md:hidden">
                <div className=" bg-[#E36230] h-[10vh] flex items-center justify-center">
                        <p className="lg:text-[40px] md:text-[40px] text-[30px] font-medium">Meet the Board</p>
                </div>
                <div className="items-center justify-center ">
                    <div className=" grid items-center justify-center gap-10 p-10">
                        <Image src={president} className=" h-[300px] w-[300px] rounded-full"/>
                        <p className=" text-lg font-semibold">Onyedikachukwu Ojukwu - President</p>
                        <p className=" text-left text-base w-[300px]">Hello! I'm Onyedikachukwu Ojukwu, a junior studying computer science
                            with a minor in mathematics at Texas Southern University. Originally from Imo state, Nigeria, I
                            discovered my passion for data science in February 2023. Noticing the absence of a data
                            science club on campus, I founded one to connect with fellow enthusiasts. Outside academics, I
                            love cooking and exploring different cuisines.
                        </p>
                    </div>
                    <div className=" grid items-center justify-center gap-10 p-10">
                        <Image src={vice_president} className=" h-[300px] w-[300px] rounded-full"/>
                        <p className=" text-lg font-semibold">Abhinav Singh - Vice President</p>
                        <p className=" text-left text-base w-[300px]">"Hi , I am Abhinav Singh from Janakpur, Nepal double majoring in computer
                            Science and Finance. I serve as the vice-president of Data science club. I aspire to work in
                            fintech industry and data science plays a pivotal role in shaping that industry. I enjoy playing
                            cricket , derivatives trading, and listening to any ideas💡"
                        </p>
                    </div>
                    <div className=" grid items-center justify-center gap-10 p-10">
                        <Image src={secretary} className=" h-[300px] w-[300px] rounded-full"/>
                        <p className=" text-lg font-semibold">Adedeji Aina - Secretary</p>
                        <p className=" text-left text-base w-[300px]">"Hey! My name is Adedeji Aina and I am a senior computer science major. I am
                            from Lagos, a city in Nigeria. I had the opportunity of participating in a Data Science
                            research program which made me develop more interest in data science and this club has
                            given the chance to explore that interest. Outside of class, I enjoy playing video games,
                            reading books, listening to music and playing soccer."
                        </p>
                    </div>
                    <div className=" grid items-center justify-center gap-10 p-10">
                        <Image src={treasurer} className=" h-[300px] w-[300px] rounded-full"/>
                        <p className=" text-lg font-semibold">Xidan You - Treasurer</p>
                        <p className=" text-left text-base w-[300px]">"Hi! My name is Xidan You, a master student in computer science. I am from
                            Chengdu, China. So glad that I joined the TigerDSC, and entered the world of data science
                            and machine learning, where we uncover certainties in an uncertain world. Looking forward
                            to exploring the endless possibilities with TigersDSC!"
                        </p>
                    </div>
                    <div className=" grid items-center justify-center gap-10 p-10">
                        <Image src={manager} className=" h-[300px] w-[300px] rounded-full"/>
                        <p className=" text-lg font-semibold">Justin Etu - Social media manager</p>
                        <p className=" text-left text-base w-[300px]">"Hola! My name is Justin Etu and I am a Junior computer science
                            major from Arizona. I joined Tigers Data Science Club because I wanted to learn more about
                            machine learning and data science with a community of other like minded individuals.
                            Outside of this organization, I enjoy working out, learning mobile development, and learning
                            about Afrocentrism."
                        </p>
                    </div>
                </div>
            </div>
        </div>
    )
}