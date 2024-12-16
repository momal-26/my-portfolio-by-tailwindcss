import Link from "next/link";



function Header(){
    return(
        <main>
          <div className="w-full sm:h-full md:h-[80px] sm:border-none sm:flex-col flex justify-center items-center mt-10 ">
            <div className=" md:w-[80%] h-full flex sm:flex-col md:flex-row justify-between items-center">
                 <div>
                  <h1 className="font-bold text-amber-700 text-[60px]">MOMAL.B</h1>
                 </div>
                   <div className="flex items-center justify-center sm:gap-x-5 md:gap-x-7">
                         <Link className="text-[30px] text-amber-700 font-normal hover:underline hover:cursor-pointer hover:text-gray-300" href={"/"}>Home</Link>
                         <Link className="text-[30px] text-amber-700 font-normal hover:underline hover:cursor-pointer hover:text-gray-300" href={"/about"}>About</Link>
                         <Link className="text-[30px] text-amber-700 font-normal hover:underline hover:cursor-pointer hover:text-gray-300" href={"/contact"}>Contact </Link>
                    </div>
             </div>
          </div>
       </main>           
            
            )
    }  
    export default Header;