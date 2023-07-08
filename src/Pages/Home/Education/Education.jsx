
const Education = () => {
    return (
        <div id="education"> 
            <h1 className=" text-4xl text-purple-700 text-center link my-2 mt-20">Education and Courses</h1>
            <div className="md:flex justify-around my-10 text-xl">
                <div  data-aos="zoom-out-up" className="  mb-10  p-4 text-base-content bg-slate-200 hover:bg-white hover:text-black rounded-lg shadow-xl  hover:translate-x-2.5 hover:translate-y-3 text-center" >
                    <h1 className="text-2xl text-purple-700 my-2">Currently Study
                    </h1>
                    <h1>  National University of Bangladesh</h1>
                    <h1> Bachelor of Arts Honours of history (second year)</h1>
                    <h1>Chuadanga Government College</h1>
                </div>
                <div  data-aos="zoom-out-up" className="  mb-10  p-4 text-base-content bg-slate-200 hover:bg-white hover:text-black rounded-lg shadow-xl  hover:translate-x-2.5 hover:translate-y-3 text-center">
                    <h1 className="text-2xl text-purple-700 my-2">Complete Course</h1>
                    <h1>programming-hero</h1>
                    <h1>Complete Web Development Course (batch-7)</h1>
                </div>
            </div>

        </div>
    );
};

export default Education;