import Image from "next/image";
import { FaFacebookSquare } from "react-icons/fa";
import { FaSquareGithub } from "react-icons/fa6";
import { FaLinkedin } from "react-icons/fa6";
import Link from "next/link";

function About(){
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
        <div className="flex justify-center items-center text-[22px] mt-10 space-x-4 text-slate-300">
                <Link href={"https://www.facebook.com/momalnaig26"}> <FaFacebookSquare className="w-[30px] h-[30px] m-2 bg-amber-400 hover:bg-slate-300 ease-in duration-100"/> </Link>   
                <Link href={"https://github.com/momal-26"}> <FaSquareGithub className="w-[30px] h-[30px] m-2 bg-amber-400 hover:bg-slate-300 ease-in duration-100"/> </Link>
                <Link href={"https://www.linkedin.com/in/momal-baig-321239177/" }> <FaLinkedin  className="w-[30px] h-[30px] m-2 bg-amber-400 hover:bg-slate-300 ease-in duration-100 "/> </Link>
            </div>

    </div>
        {/*left side*/}
       <div className="sm:w-[100%] md:w-[50%] sm:flex-col justify-start items-start " >
          <h2 className="font-bold text-slate-300 sm:text-[38px] md:text-[50px]"> Hello!<br/> I 'm Momal Baig...</h2>
            <p className="text-left sm:text-[23px] md:text-[27px] text-amber-100 font-normal mb-8" >Lorem Ipsum is simply dummy text of the printing and typesetting industry.
            Lorem Ipsum is simply dummy text of the printing and typesetting industry.when an unknown printer took a galley of type and scrambled it to make a type specimen book.It has survived not only five centuries,
            but also the leap into electronic typesetting </p>
             <div>
            <a href="#" className="py-5 px-9 bg-amber-700 text-white text-[23px] font-semibold rounded-full shadow-md hover:bg-slate-300 focus:outline-none focus:ring focus:ring-black focus:ring-opacity-50 " > Hire me  </a>
             </div>
         </div>
      </div>
</div>
)
}
export default  About;