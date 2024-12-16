
import Image from "next/image"

function MyProjects()
{
    return(
        <div className=" my-6 flex justify-between items-center sm:w-[100%] md:h-[1500px]">
         <div className="my-3 md:mx-8 sm:mx-2 sm:h-full md:h-[90%]">
            <div>
                <h1 className="text-slate-300 text-[50px] mt-2 text-center">My Projects</h1>
                 <div className="text-slate-300 flex flex-wrap sm:flex-col  justify-between mt-6 md:w-[70%]">
                    <div className="text-slate-300 my-4 ">
                        <Image src={"/images/pro2.png"} alt="p1" width={100} height={100} className="items-center mx-4"/ >
                        <h2 className="text-slate-300 text-[40px] font-bold">E-commerce Webpage</h2>
                        <p className="text-amber-200 md:text-[25px] sm:text-[22px] ">An e-commerce website is a virtual store where customers can buy and sell products and services online. E-commerce websites allow businesses to process orders, 
                        manage shipping, and provide customer service.</p>
                        </div>
                        <div>
                        <Image src={"/images/pro4.png"} alt="p1" width={100} height={100} className="items-center mt-8 ml-3"/ >
                        <h2 className="text-slate-300 text-[40px] font-bold mt-2">ATM Machine</h2>
                        <p className="text-amber-200 md:text-[25px] sm:text-[22px]">An automated teller machine program (ATM ) is a program that allows users to simulate the functionality of an automated teller machine (ATM). ATMs are electronic banking devices that allow customers
                        to perform financial transactions without the need for a bank representatives.</p>
                        </div>

                    <div className="text-slate-300 md:ml-6 sm:mx-2" >
                    <Image src={"/images/pro3.png"} alt="p1" width={100} height={100} className="items-center mx-4"/ >
                        <h2 className="text-slate-300 text-[40px] font-bold">Currency Convertor</h2>
                        <p className="text-amber-200 md:text-[25px]  sm:text-[22px]">A currency converter is an online tool that allows users to convert one currency into another based on current exchange rates. It provides real-time calculations for various global currencies
                        making it easy to check the value of one currency in terms of another.</p>
                        </div>
                        <div>
                        <Image src={"/images/pro5.png"} alt="p1" width={100} height={100} className="items-center mt-8 ml-3"/ >
                        <h2 className="text-slate-300 text-[40px] font-bold">Dynamic Resume Builder</h2>
                        <p className="text-amber-200 md: text-[25px]  sm:text-[22px]"> Create a dyanamic resume using javascript which can be easily edit and saved by any user. it can be cistomized according to you relevant skills and jobs.
                       </p>
                    </div>
                </div>
            </div>
        </div>
     </div>
    )
}
export default MyProjects;