import Link from "next/link";
import { FaFacebookSquare } from "react-icons/fa";
import { FaSquareGithub } from "react-icons/fa6";
import { FaLinkedin } from "react-icons/fa6";
function Headlines (){
    return(
        <main>
             <div className="w-full sm:h-full md:h-[450px] flex justify-start items-start mt-10">
                <div className="sm:w-full md:h-[80%] flex md:flex-row sm:flex-col justify-between items-center ">
                    <div className=" sm:w-full md:-mt-44  sm:mt-7 sm:flex-col md:flex row justify-between items-start ">
                    <h2 className=" text-amber-700 text-[23px] font-bold mt-2 ml-12">About</h2>
                    <h1 className=" text-slate-300 text-[50px] text-left font-medium ml-12">Some inspiring words<br/> about yourself...</h1>
                    <h2 className=" text-slate-300 text-[30px] ml-12 mt-5">follow me on:</h2>
                        <div className="flex items-center justify-evenly mt-4 ml-12 sm:gap-x-3 md:gap-x-6">
                        <Link href={"https://www.facebook.com/momalnaig26"}> <FaFacebookSquare className="text-[30px] bg-gray-200 hover:text-amber-100"/> </Link>   
                        <Link href={"https://github.com/momal-26"}> <FaSquareGithub className="text-[30px] bg-gray-200 hover:text-amber-100"/> </Link>
                        <Link href={"https://www.linkedin.com/in/momal-baig-321239177/"}> <FaLinkedin  className="text-[30px] bg-gray-200  hover:text-amber-100"/> </Link>
                        </div>
                         <p className="text-amber-100 md:w-[70%] sm:w-[100%] font-light md:ml-12 sm:ml-3 sm:text-[25px] md:text-[30px] sm:mt-10 md:mt-10">Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellendus iste ipsam quod repellat.
                         Hic tempora ullam aperiam ipsum optio magni vel inventore voluptatibus nisi maiores laboriosam fuga iure, velit eligendi ab vero minima. Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque
                         laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo.
                         </p>
                     </div>
                </div>
            </div>
        </main> 
    )
}
export default Headlines;