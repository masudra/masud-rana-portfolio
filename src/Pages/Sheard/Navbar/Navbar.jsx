
const Navbar = () => {
    const navitem = <div className="text-purple-700 gap-4 md:flex md:mr-60  text-2xl ">
        <h1 className="font-bold  "><a href="#home">Home</a></h1>
        <h1 className="font-bold "><a href="#aboutme">About Me</a></h1>
        <h1 className="font-bold"><a href="#skills">Skills</a></h1>
        <h1 className="font-bold"><a href="#education">Education</a></h1>
        <h1 className="font-bold"> <a href="#projects">Projects</a></h1>
        <h1 className="font-bold"><a href="#services">Services</a></h1>
        <h1 className="font-bold"><a href="#contact">Contact Me</a></h1>
    </div>

    return (
        <div>
            <div className="navbar  bg-slate-200 z-40 md:fixed">
                <div className="navbar-start">
                    <div className="dropdown">
                        <label tabIndex={0} className="btn btn-ghost lg:hidden">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                        </label>
                        <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
                            {
                                navitem
                            }
                        </ul>
                    </div>
                    <a className="ml-10 font-bold normal-case text-3xl text-purple-700">Masud Rana</a>
                </div>
                <div className="navbar-center hidden lg:flex">
                    <ul className="menu menu-horizontal px-1">
                        {
                            navitem
                        }
                    </ul>
                </div>

            </div>

        </div>
    );
};

export default Navbar;



