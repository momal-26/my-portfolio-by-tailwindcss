import Image from "next/image";


function Hero(){
return( 
<div className="md:w-full md:h-[600px] flex justify-start items-start sm:m-20 md:m-2 ">
     <div className="md:h-full sm:w-[90%] md:w-full sm:flex-col md:flex-row flex justify-evenly items-center " >
       <div>
       {/*right side*/}
        <Image 
        src={"/images/profile.jpg"} 
        width={350} 
        height={350} 
        alt="me"
        className="bg-slate-200 p-3 rounded shadow-lg sm:w-[270px] h-[270px] md:w-[350px] md:h-[350px] mb-5 "
        />
    </div>
        {/*left side*/}
       <div className="sm:w-[100%] md:w-[50%] sm:flex-col justify-start items-start " >
          <h2 className="font-bold text-slate-300 sm:text-[38px] md:text-[50px]"> A Novice Learner  In Web Development</h2>
            <p className="text-left sm:text-[28px] md:text-[30px] text-amber-100 font-normal mb-8" >Lorem Ipsum is simply dummy text of the printing and typesetting industry.
                Lorem Ipsum has been the industry's standard dummy text ever since the 1500s. </p>
             <div>
            <a href="#" className="py-5 px-9 bg-amber-700 text-white text-[23px] font-semibold rounded-full shadow-md hover:bg-slate-300 focus:outline-none focus:ring focus:ring-black focus:ring-opacity-50 " > Hire me  </a>
             </div>
         </div>
      </div>
</div>
)
}
export default Hero;