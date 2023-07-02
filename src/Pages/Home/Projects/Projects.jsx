import { Link } from 'react-router-dom';
import logo1 from '../../../../public/project1/photo1.jpg'
import './Project.css'


const Projects = () => {
    return (
        <div className="">
            <h1 className="text-4xl text-purple-700 text-center link mt-16 ">Projects</h1>
            <div className="grid md:grid-cols-3 ml-6 px-2 ">
                <div className=' md:w-[410px] w-[300px] p-4 text-base-content bg-slate-200 mt-6  hover:bg-slate-400 hover:text-black rounded-lg shadow-xl  hover:translate-x-2.5 hover:translate-y-3 text-center'>
                    <div className="image-wrap">
                        <img className='mb-2' src={logo1} />
                    </div>
                    <div className=' mt-4'>
                        <Link className='text-xl p-2 bg-purple-700 rounded-xl text-white hover:bg-white hover:text-purple-700 hover:font-bold' to="https://imaginative-conkies-076b74.netlify.app/" target='-blank'>Live Site</Link>
                        <Link className='text-xl p-2 ml-1 bg-purple-700 rounded-xl text-white hover:bg-white hover:text-purple-700 hover:font-bold' to="https://github.com/masudra/mr-academy-client-site" target='-blank'>Client Code</Link>
                        <Link className='text-xl p-2 ml-1 bg-purple-700 rounded-xl text-white hover:bg-white hover:text-purple-700 hover:font-bold ' to="https://github.com/masudra/mr-academy-server-site" target='-blank'>Server Code</Link>
                    </div>
                    <div className='mt-4'>
                        <div>
                            <h1 className=' text-xl text-purple-700 font-bold'>Features:</h1>
                            <p> Dashboard for Student, Admin and Instructor </p>
                            <h1>Instructor adds her class to her dashboard page.</h1>
                            <h1> Admin sees all user admin can make an admin or instructor. </h1>
                        </div>
                        <div>
                            <h1 className=' text-xl text-purple-700 font-bold'>Technologies:</h1>
                            <div className=' grid grid-cols-3'>
                                <span className='bg-stone-300 ml-2 p-1 w-[80px] mt-1 rounded'>React</span>
                                <span className='bg-stone-300 ml-2 p-1 w-[80px] mt-1 rounded'>Tailwind</span>
                                <span className='bg-stone-300 ml-2 p-1 w-[80px] mt-1 rounded'>daisyUi</span>
                                <span className='bg-stone-300 ml-2 p-1 w-[80px] mt-1 rounded'>Axios</span>
                                <span className='bg-stone-300 ml-2 p-1 w-[80px] mt-1 rounded'>MongoDb</span>
                                <span className='bg-stone-300 ml-2 p-1 w-[80px] mt-1 rounded'>express js</span>
                                <span className='bg-stone-300 ml-2 p-1 w-[80px] mt-1 rounded'>Node js</span>
                                <span className='bg-stone-300 ml-2 p-1 w-[80px] mt-1 rounded'>Firebase</span>

                            </div>
                        </div>


                    </div>
                </div>
                <div className=' md:w-[410px] w-[300px] p-4 text-base-content bg-slate-200 mt-6  hover:bg-slate-400 hover:text-black rounded-lg shadow-xl  hover:translate-x-2.5 hover:translate-y-3 text-center'>
                    <div className="image-wrap">
                        <img className='mb-2' src={logo1} />
                    </div>
                    <div className=' mt-4'>
                        <Link className='text-xl p-2 bg-purple-700 rounded-xl text-white hover:bg-white hover:text-purple-700 hover:font-bold' to="https://imaginative-conkies-076b74.netlify.app/" target='-blank'>Live Site</Link>
                        <Link className='text-xl p-2 ml-1 bg-purple-700 rounded-xl text-white hover:bg-white hover:text-purple-700 hover:font-bold' to="https://github.com/masudra/mr-academy-client-site" target='-blank'>Client Code</Link>
                        <Link className='text-xl p-2 ml-1 bg-purple-700 rounded-xl text-white hover:bg-white hover:text-purple-700 hover:font-bold ' to="https://github.com/masudra/mr-academy-server-site" target='-blank'>Server Code</Link>
                    </div>
                    <div className='mt-4'>
                        <div>
                            <h1 className=' text-xl text-purple-700 font-bold'>Features:</h1>
                            <p> Dashboard for Student, Admin and Instructor </p>
                            <h1>Instructor adds her class to her dashboard page.</h1>
                            <h1> Admin sees all user admin can make an admin or instructor. </h1>
                        </div>
                        <div>
                            <h1 className=' text-xl text-purple-700 font-bold'>Technologies:</h1>
                            <div className=' grid grid-cols-3'>
                                <span className='bg-stone-300 ml-2 p-1 w-[80px] mt-1 rounded'>React</span>
                                <span className='bg-stone-300 ml-2 p-1 w-[80px] mt-1 rounded'>Tailwind</span>
                                <span className='bg-stone-300 ml-2 p-1 w-[80px] mt-1 rounded'>daisyUi</span>
                                <span className='bg-stone-300 ml-2 p-1 w-[80px] mt-1 rounded'>Axios</span>
                                <span className='bg-stone-300 ml-2 p-1 w-[80px] mt-1 rounded'>MongoDb</span>
                                <span className='bg-stone-300 ml-2 p-1 w-[80px] mt-1 rounded'>express js</span>
                                <span className='bg-stone-300 ml-2 p-1 w-[80px] mt-1 rounded'>Node js</span>
                                <span className='bg-stone-300 ml-2 p-1 w-[80px] mt-1 rounded'>Firebase</span>

                            </div>
                        </div>


                    </div>
                </div>
                <div className=' md:w-[410px] w-[300px] p-4 text-base-content bg-slate-200 mt-6  hover:bg-slate-400 hover:text-black rounded-lg shadow-xl  hover:translate-x-2.5 hover:translate-y-3 text-center'>
                    <div className="image-wrap">
                        <img className='mb-2' src={logo1} />
                    </div>
                    <div className=' mt-4'>
                        <Link className='text-xl p-2 bg-purple-700 rounded-xl text-white hover:bg-white hover:text-purple-700 hover:font-bold' to="https://imaginative-conkies-076b74.netlify.app/" target='-blank'>Live Site</Link>
                        <Link className='text-xl p-2 ml-1 bg-purple-700 rounded-xl text-white hover:bg-white hover:text-purple-700 hover:font-bold' to="https://github.com/masudra/mr-academy-client-site" target='-blank'>Client Code</Link>
                        <Link className='text-xl p-2 ml-1 bg-purple-700 rounded-xl text-white hover:bg-white hover:text-purple-700 hover:font-bold ' to="https://github.com/masudra/mr-academy-server-site" target='-blank'>Server Code</Link>
                    </div>
                    <div className='mt-4'>
                        <div>
                            <h1 className=' text-xl text-purple-700 font-bold'>Features:</h1>
                            <p> Dashboard for Student, Admin and Instructor </p>
                            <h1>Instructor adds her class to her dashboard page.</h1>
                            <h1> Admin sees all user admin can make an admin or instructor. </h1>
                        </div>
                        <div>
                            <h1 className=' text-xl text-purple-700 font-bold'>Technologies:</h1>
                            <div className=' grid grid-cols-3'>
                                <span className='bg-stone-300 ml-2 p-1 w-[80px] mt-1 rounded'>React</span>
                                <span className='bg-stone-300 ml-2 p-1 w-[80px] mt-1 rounded'>Tailwind</span>
                                <span className='bg-stone-300 ml-2 p-1 w-[80px] mt-1 rounded'>daisyUi</span>
                                <span className='bg-stone-300 ml-2 p-1 w-[80px] mt-1 rounded'>Axios</span>
                                <span className='bg-stone-300 ml-2 p-1 w-[80px] mt-1 rounded'>MongoDb</span>
                                <span className='bg-stone-300 ml-2 p-1 w-[80px] mt-1 rounded'>express js</span>
                                <span className='bg-stone-300 ml-2 p-1 w-[80px] mt-1 rounded'>Node js</span>
                                <span className='bg-stone-300 ml-2 p-1 w-[80px] mt-1 rounded'>Firebase</span>

                            </div>
                        </div>


                    </div>
                </div>
            </div>


        </div>
    );
};

export default Projects;