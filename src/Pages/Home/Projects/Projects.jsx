import { Link } from 'react-router-dom';
import logo from '../../../../public/project3/Screenshot (408).jpg'
import logo1 from '../../../../public/project1/photo1.jpg'
import logo2 from '../../../../public/project2/img1.jpg'
import logo3 from '../../../../public/project3/img1 (1).jpg'
import './Project.css'
const Projects = () => {
   
    return (
        <div id='projects' className="">
            <h1 className="text-4xl text-purple-700 text-center link mt-16 ">Projects</h1>
            <div className="grid md:grid-cols-3 ml-6 px-2 ">
                <div data-aos="fade-up-right" className=' md:w-[410px] w-[300px] p-4 text-base-content bg-slate-200 mt-6  hover:bg-slate-400 hover:text-black rounded-lg shadow-xl  hover:translate-x-2.5 hover:translate-y-3 text-center'>
                    <div className="image-wrap">
                        <img className='mb-2' src={logo}/>
                    </div>
                    <div className='md:flex mt-4 grid gap-2'>
                        <Link className='md:text-xl p-2  ml-1 bg-purple-700 rounded-xl text-white hover:bg-white hover:text-purple-700 hover:font-bold' to="https://flex-flow.web.app/" target='-blank'>Live Site</Link>
                        <Link className='md:text-xl p-2  ml-1 bg-purple-700 rounded-xl text-white hover:bg-white hover:text-purple-700 hover:font-bold' to="https://github.com/flexflow0/flex-flow" target='-blank'>Client Code</Link>
                        <Link className='md:text-xl p-2  ml-1 bg-purple-700 rounded-xl text-white hover:bg-white hover:text-purple-700 hover:font-bold ' to="https://github.com/flexflow0/flex-flow-server" target='-blank'>Server Code</Link>
                    </div>
                    <div className='mt-4'>
                        <div className='text-left'>
                            <h1 className=' text-xl text-purple-700 font-bold'>Features:</h1>
                            <p><span className='font-bold'>1:</span>There are several types of filter options, like by region TV series.
</p>
                            <h1><span className='font-bold'>2:</span>After playing the TV series, it will show the remaining episodes below.</h1>
                            <h1><span className='font-bold'>3:</span>TV series section, TV series details, similar episodes, Register, Login, and Shorts.
</h1>
                            <h1><span className='font-bold'>3:</span>User management system dashboard for user and admin.
</h1>
                        </div>
                        <div>
                            <h1 className='text-left
                             text-xl text-purple-700 font-bold'>Technologies:</h1>
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
                <div data-aos="fade-up-right" className=' md:w-[410px] w-[300px] p-4 text-base-content bg-slate-200 mt-6  hover:bg-slate-400 hover:text-black rounded-lg shadow-xl  hover:translate-x-2.5 hover:translate-y-3 text-center'>
                    <div className="image-wrap">
                        <img className='mb-2' src={logo1} />
                    </div>
                    <div className='md:flex mt-4 grid gap-2'>
                        <Link className='md:text-xl p-2  ml-1 bg-purple-700 rounded-xl text-white hover:bg-white hover:text-purple-700 hover:font-bold' to="https://imaginative-conkies-076b74.netlify.app/" target='-blank'>Live Site</Link>
                        <Link className='md:text-xl p-2  ml-1 bg-purple-700 rounded-xl text-white hover:bg-white hover:text-purple-700 hover:font-bold' to="https://github.com/masudra/mr-academy-client-site" target='-blank'>Client Code</Link>
                        <Link className='md:text-xl p-2  ml-1 bg-purple-700 rounded-xl text-white hover:bg-white hover:text-purple-700 hover:font-bold ' to="https://github.com/masudra/mr-academy-server-site" target='-blank'>Server Code</Link>
                    </div>
                    <div className='mt-4'>
                        <div className='text-left'>
                            <h1 className=' text-xl text-purple-700 font-bold'>Features:</h1>
                            <p><span className='font-bold'>1:</span> Dashboard for Student, Admin and Instructor </p>
                            <h1><span className='font-bold'>2:</span>Instructor adds her class to her dashboard page.</h1>
                            <h1><span className='font-bold'>3:</span>Admin sees all user admin can make an admin or instructor. </h1>
                        </div>
                        <div>
                            <h1 className='text-left
                             text-xl text-purple-700 font-bold'>Technologies:</h1>
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








                <div data-aos="fade-up"  className=' md:w-[410px] w-[300px] p-4 text-base-content bg-slate-200 mt-6  hover:bg-slate-400 hover:text-black rounded-lg shadow-xl  hover:translate-x-2.5 hover:translate-y-3 text-center'>
                    <div className="image-wrap">
                        <img className='mb-2' src={logo2} />
                    </div>
                    <div className='md:flex mt-4 grid gap-2'>
                        <Link className='md:text-xl p-2  ml-1 bg-purple-700 rounded-xl text-white hover:bg-white hover:text-purple-700 hover:font-bold' to="https://verdant-bombolone-344ef4.netlify.app/" target='-blank'>Live Site</Link>
                        <Link className='md:text-xl p-2  ml-1 bg-purple-700 rounded-xl text-white hover:bg-white hover:text-purple-700 hover:font-bold' to="https://github.com/masudra/toy-bazar-clint-site" target='-blank'>Client Code</Link>
                        <Link className='md:text-xl p-2  ml-1 bg-purple-700 rounded-xl text-white hover:bg-white hover:text-purple-700 hover:font-bold ' to="https://github.com/masudra/toy-bazer-server-site" target='-blank'>Server Code</Link>
                    </div>
                    <div className='mt-4'>
                        <div className='text-left'>
                            <h1 className=' text-xl text-purple-700 font-bold'>Features:</h1>
                            <p ><span className='font-bold'>1:</span>The home page has a navbar, Gallery, Upcoming Toys, Our Top Seller, and a footer. </p>
                            <h1><span className='font-bold'>2:</span>All toys page has  all user toy list.</h1>
                            <h1><span className='font-bold'>3:</span>The view details  page is private  user login fast and then shows all data.</h1>
                        </div>
                        <div>
                            <h1 className=' text-left text-xl text-purple-700 font-bold'>Technologies:</h1>
                            <div className=' grid grid-cols-3'>
                                <span className='bg-stone-300 ml-2 p-1 w-[80px] mt-1 rounded'>React</span>
                                <span className='bg-stone-300 ml-2 p-1 w-[80px] mt-1 rounded'>Tailwind</span>
                                <span className='bg-stone-300 ml-2 p-1 w-[80px] mt-1 rounded'>daisyUi</span>

                                <span className='bg-stone-300 ml-2 p-1 w-[80px] mt-1 rounded'>MongoDb</span>
                                <span className='bg-stone-300 ml-2 p-1 w-[80px] mt-1 rounded'>express js</span>
                                <span className='bg-stone-300 ml-2 p-1 w-[80px] mt-1 rounded'>Node js</span>
                                <span className='bg-stone-300 ml-2 p-1 w-[80px] mt-1 rounded'>Firebase</span>

                            </div>
                        </div>


                    </div>
                </div>
                <div data-aos="fade-up-left" className=' md:w-[410px] w-[300px] p-4 text-base-content bg-slate-200 mt-6  hover:bg-slate-400 hover:text-black rounded-lg shadow-xl  hover:translate-x-2.5 hover:translate-y-3 text-center'>
                    <div className="image-wrap">
                        <img className='mb-2' src={logo3} />
                    </div>
                    <div className='md:flex mt-4 grid gap-2'>
                        <Link className='md:text-xl p-2  ml-1 bg-purple-700 rounded-xl text-white hover:bg-white hover:text-purple-700 hover:font-bold' to="https://incomparable-cactus-94e133.netlify.app/" target='-blank'>Live Site</Link>
                        <Link className='md:text-xl p-2  ml-1 bg-purple-700 rounded-xl text-white hover:bg-white hover:text-purple-700 hover:font-bold' to="https://github.com/masudra/best-chef-clint-site" target='-blank'>Client Code</Link>
                        <Link className='md:text-xl p-2  ml-1 bg-purple-700 rounded-xl text-white hover:bg-white hover:text-purple-700 hover:font-bold ' to="https://github.com/masudra/best-chef-server-site" target='-blank'>Server Code</Link>
                    </div>
                    <div className='mt-4'>
                        <div className='text-left'>
                            <h1 className=' text-xl text-purple-700 font-bold'>Features:</h1>
                            <p ><span className='font-bold'>1:</span>The home page has a navbar,chefs cards and a footer. </p>
                            <h1><span className='font-bold'>2:</span>The view Recipes page is private user login fast and then shows all data.</h1>
                            <h1><span className='font-bold'>3:</span>The view details page has chef all information</h1>
                        </div>
                        <div>
                            <h1 className='text-left text-xl text-purple-700 font-bold'>Technologies:</h1>
                            <div className=' grid grid-cols-3'>
                                <span className='bg-stone-300 ml-2 p-1 w-[80px] mt-1 rounded'>React</span>
                                <span className='bg-stone-300 ml-2 p-1 w-[80px] mt-1 rounded'>Tailwind</span>
                                <span className='bg-stone-300 ml-2 p-1 w-[80px] mt-1 rounded'>daisyUi</span>

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