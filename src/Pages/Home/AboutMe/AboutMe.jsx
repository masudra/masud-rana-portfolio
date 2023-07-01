
const AboutMe = () => {
    return (
       <div className="mb-10">
        <h1 className=" link my-10 text-center text-5xl text-purple-700">About Me</h1>
        
         <div className=" flex">
            <div className=" mx-20 ">
                <img className="w-[350px] ounded-lg shadow-xl  hover:translate-x-2.5 hover:translate-y-3 mt-10" src="../../../../public/my photo.jpg" alt="" />
            </div>

            <div className="w-[700px] mx-16">

                <div className="flex gap-20 justify-center text-white">
                    <div className=" w-[170px] mb-10  p-4 text-base-content bg-slate-200 hover:bg-white hover:text-black rounded-lg shadow-xl  hover:translate-x-2.5 hover:translate-y-3 text-center">
                        <img className="w-[40px] mx-auto " src="../../../../public/experience.png" alt="" />
                        <h1 className="text-2xl my-2">Experience</h1>
                        <h1 className="text-xl ">1 Month</h1>
                    </div>
                    <div className=" w-[170px] mb-10  p-4  text-base-content bg-slate-200 hover:bg-white hover:text-black rounded-lg shadow-xl  hover:translate-x-2.5 hover:translate-y-3 text-center">
                        <img className="w-[40px] mx-auto " src="../../../../public/project (1).png" alt="" />
                        <h1 className="text-2xl my-2">Projects</h1>
                        <h1 className="text-xl ">15+</h1>
                    </div>
                    <div className=" w-[170px] mb-10  p-4 text-base-content bg-slate-200 hover:bg-white hover:text-black rounded-lg shadow-xl  hover:translate-x-2.5 hover:translate-y-3 text-center">
                        <img className="w-[40px] mx-auto " src="../../../../public/customer-care-icon.png" alt="" />
                        <h1 className="text-xl my-2">Support</h1>
                        <h1 className="text-xl ">Online 24/7</h1>
                    </div>

                </div>
                <p className="text-xl">Welcome to my portfolio. I am Masud Rana. I am a junior Full Stack developer. recently I completed a web development course with programming hero. I am a hard worker person. every day I do 7 to 8 hours of practice and  2 hours of learning new items for the next level</p>
                <p className="text-xl">I am comfortable with HTML CSS javascript and react.js.already I  complete some projects using HTML, CSS, Tailwind, Bootstrap, JavaScript, and React.Js.I am very skilled and good at mobile responsive.</p>

            </div>


        </div>
       </div>
    );
};

export default AboutMe;