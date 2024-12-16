
import React from "react";
import Link from "next/link";
import { FaFacebookSquare } from "react-icons/fa";
import { FaInstagramSquare } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa6";


function Footer(){
   return(
       <main>
         <div className="sm:w-full md:h-[600px] sm:h-full flex items-center justify-evenly  bg-slate-200 mt-28">
             <div className=" md:w-[90%] flex justify-center md:items-center sm:text-left"> 
               <div className="flex md:flex-row sm:flex-col">
                <div className="ml-18 mb-20 mt-10">
                    <h1 className="text-amber-300 text-[40px]">About Me</h1>
                    <ul className="text-[20px]">
                      <li className="text-black- text-[25px] font-normal">Lorem ipsum dolor sit amet consectetur adipisicing elit.</li> 
                      <li className="text-black text-[25px] font-normal"> Voluptas illum quasi facere libero,fugiat laboriosam possimus reprehenderit.</li>
                      <li className="text-black text-[25px] font-normal">fugit ad quis veritatis suscipit beatae incidunt perferendis tempore.</li>
                    </ul>
                   <div className=" flex items-start space-x-4 mt-4 text-lg">
                        <div  className="text-black text-[30px] bg-gray-200 hover:text-amber-100"><FaFacebookSquare/> </div>
                        <div  className="text-black text-[30px] bg-gray-200 hover:text-amber-100" ><FaInstagramSquare /> </div>
                        <div  className="text-black text-[30px] bg-gray-200 hover:text-amber-100"><FaLinkedin /> </div>
                    </div>   
                 </div>
                   <div>
                           <div>
                           <h3 className="text-amber-300 text-[40px] mb-4"> Links</h3>
                           <ul className=" text-[20px]">
                            <li >
                             <Link className="text-black" href={"/"}> Home</Link>  
                             </li>
                            <li>
                            <Link className="text-black"href={"/about"}> About</Link>
                            </li>
                            <li >
                            <Link className="text-black" href={"/contact"}> Contact</Link>
                            </li>
                           </ul> 
                        </div>
                        <div>
                           <h3  className="text-amber-300 text-[40px] mb-4">Newsletter</h3>
                             <div>
                              <input  type="text" placeholder="Your Email"  className="text-slate-300  w-80 p-3 text-[20px border border-solid " ></input>
                              <button className=" mt-4 py-3 px-6 bg-amber-700 sm:text-left text-white text-[20px] font-semibold full shadow-md hover:bg-slate-300 focus:outline-none focus:ring focus:ring-black focus:ring-opacity-50"> Subscribe </button> 
                              <p className=" mt-3 text-[20px] font-light">© Copyright Momal.B 2024 Design by Styleyourweb </p>
                             </div>
                        </div>
                     </div>
                </div>
            </div> 
        </div>
    </main>
 )  
}
export default Footer;
