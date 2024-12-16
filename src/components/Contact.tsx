
import { FaPhoneAlt } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import { FaRegAddressCard } from "react-icons/fa6";


function Contact(){

return(
<main className="sm:w-full sm:h-full flex justify-center sm:flex-col md:flex-row items-center sm:mt-4 md:mt-20 mb-20">
    <div className="mt-10 md:w-[50%] sm:w-[100%]  sm:align items-center">
      <h1 className="text-[40px] text-pretty leading-10 text-slate-300">Leave a Message</h1>
      <ul className="mt-10 mb-20 text-[25px] leading-10">
      <FaPhoneAlt className=" text-slate-200"/>
       <li className="mt-5 list-none text-amber-300">PHONE:0332-3831833 </li>
      <MdEmail  className=" text-slate-200"/> 
       <li className="mt-5 list-none text-amber-300">EMAIL:momalbaig177@gmail.com</li>
      <FaRegAddressCard className=" text-slate-200" />
       <li className="mt-5 list-none text-amber-300">ADDRESS:karachi,Pakistan</li>
      </ul>
      </div>
        <div className="md:w-[50%] sm:w-[70%] md:h-[500px] sm:h-100% p-5 border-r-2 bg-slate-200">
         <form action={""} className="flex flex-col rounded  md:ml-2 ">
          <h1 className="text-[30px] text-black m-2 text-left">Connect with me..</h1>
          <div className="sm:mr-12 w-[70%] h-[250px]">
            <input type="text" placeholder="Enter Your Name" className="bg-amber-100 m-2 px-4 py-3 rounded-lg"></input>
            <input type="text" placeholder="abc@gmail.com" className="bg-amber-100 m-2 px-4 py-3  rounded-lg"></input>
            <input type="text" placeholder="Enter Your Message" className="m-2 pb-20 px-4 py-3 bg-amber-100 rounded-lg"></input>
            </div>
         </form>
         <button className="mt-10 py-3 ml-4 px-11 bg-amber-700 text-white text-[23px] font-semibold rounded-md shadow-md hover:bg-slate-300 focus:outline-none focus:ring focus:ring-black focus:ring-opacity-50 ">SUBMIT</button>
         </div>
</main>
)
}
export default  Contact;
    

