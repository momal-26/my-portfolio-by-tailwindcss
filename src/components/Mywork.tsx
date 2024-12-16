import Image from "next/image";



function Work(){
    return(
        <main>
            <div className=" sm:w-full sm:h-full flex justify-start items-start mt-9" >
                <div className="md:h-[700px]">
                {/*left div*/}
                <div className="flex flex-col justify-between items-start mt-4">
                <h2 className="text-amber-700 text-[20px] font-bold mt-2 ml-14">Services</h2>
                <h1 className="text-slate-300 text-[55px] text-left font-medium ml-14"> My Area Of Expertise</h1>
                <p className= "text-amber-100 items-left md:w-[60%] sm:w-[100%] font-light text-[25px] ml-14">Lorem ipsum dolor sit amet consectetur adipisicing elit,Laborum suscipit debitis quam dignissimos veritatis.</p>
                </div>
                {/*right div*/}
                <div className=" flex flex-wrap  justify-center items-center mt-10">
                   <div className="bg-amber-100 flex flex-col justify-center items-center ml-4 mr-4 w-[300px] h-[200px] border-8 text-amber-100 mt-4">
                    <Image src={"/images/2620307.png"} alt="web" width={100} height={200}/>
                    <h3 className=" text-black">Web applications</h3>
                   </div>
                   <div className="bg-amber-100 flex flex-col justify-center items-center ml-4 mr-4 w-[300px] h-[200px] border-8 text-amber-100 mt-4">
                   <Image src={"/images/icon2.png"} alt="web" width={100} height={200}/>
                    <h3 className=" text-black">E-commerce websites</h3>
                   </div>
                   <div className="bg-amber-100 flex flex-col justify-center items-center ml-4 mr-4 w-[300px] h-[200px] border-8 text-amber-100 mt-4">
                   <Image src={"/images/icon3.png"} alt="icon" width={100} height={200}/>
                    <h3 className=" text-black">Digital Marketing</h3>
                   </div>
                   <div className="bg-amber-100  flex flex-col justify-center items-center ml-4 mr-4 w-[300px] h-[200px] border-8 text-amber-100 mt-6">
                   <Image src={"/images/icon4.png"} alt="web" width={100} height={200}/>
                    <h3 className=" text-black" >Research</h3>
                    </div>
                    <div className="bg-amber-100  flex flex-col justify-center items-center ml-4 mr-4 w-[300px] h-[200px] border-8 text-amber-100 mt-6">
                   <Image src={"/images/icon5.png"} alt="web" width={100} height={200}/>
                    <h3 className=" text-black" >SEO(search engine optimization)</h3>
                    </div>
                </div>
              </div>
            </div>
        </main>
    )
}
export default Work;