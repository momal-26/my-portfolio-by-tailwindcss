



function Education(){
    return(
        <div className="sm:w-[100%] md:h-[500px] flex justify-center items-center mt-3">
        <div className="md:w-[80%] sm:h-[100%] flex-col items-center justify-start mx-4 my-7 " >
          <div>
           <h2 className="text-slate-300 text-[50px] mt-2 text-center">More About ME..</h2>
            <div className="w-[100%] flex flex-wrap sm:flex-col md:flex-row items-center my-14">
                 <div className="items-center text-left my-8  bg-amber-800 box-border h-80 w-80 mr-3 border p-2 shadow-lg shadow-stone-700/50" >
                  <h2 className="text-slate-300 text-2xl uppercase mt-6 mx-3"> Education</h2>
                  <ul className="text-slate-300 text-[20px] mx-4 my-4">
                    <li>Student at GIAIC  AI Metaverse From 3rd feb till today</li>
                    <li> Bachelors from NED university from 2011-2014</li>
                    <li>Intermediate From Pre Engineering 2012</li>
                 
                </ul>
                 </div>
                <div className="items-center text-left my-8 bg-amber-800 box-border  h-80 w-80  mr-3 border p-2 shadow-lg shadow-stone-700/50">
                <h2 className="text-slate-300 text-2xl uppercase mt-6 mx-3">Services</h2>
                     <ul className="text-slate-300 text-[20px] mx-4 my-4">
                      <li>Digital Marketing</li>
                      <li>JavasScript</li>
                      <li>Web Development</li>
                      <li>Content Writing</li>
                      <li>Research</li>
                       </ul>
                 </div>
                <div className=" items-center text-left my-8 bg-amber-800 box-border h-80 w-80  p-2 border shadow-lg shadow-stone-700/50">
                  <h2 className="text-slate-300 text-2xl uppercase mt-6 mx-3" >Interests</h2>
                       <ul className="text-slate-300 text-[20px] mx-4 my-4">
                        <li>Reading Books</li>  
                        <li>Coding</li>
                        <li>Designing</li>
                  </ul> 
                </div>
          </div>
        </div>
      </div>
    </div>
        
    )
}
export default Education;