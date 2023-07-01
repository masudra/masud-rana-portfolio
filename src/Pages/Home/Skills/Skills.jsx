import logoSkills from '../../../../public/skills/skills.png'
// Front End
import logo from '../../../../public/skills/html.png'
import logo1 from '../../../../public/skills/CSS3.png'
import logo2 from '../../../../public/skills/javascript-.jpg'
import logo3 from '../../../../public/skills/Bootstrap-.png'
import logo4 from '../../../../public/skills/Tailwind.png'
import logo5 from '../../../../public/skills/React.png'
// back end
import logo6 from '../../../../public/skills/node.webp'
import logo7 from '../../../../public/skills/mongodb_thumbnail.webp'
import logo8 from '../../../../public/skills/expressjs_logo.png'
import logo9 from '../../../../public/skills/firebase.png'
// Tools
import logo10 from '../../../../public/skills/VsCode.png'
import logo11 from '../../../../public/skills/chrome-dev-.png'
import logo12 from '../../../../public/skills/Netlify.png'
import logo13 from '../../../../public/skills/vercel-icon-.png'
import logo14 from '../../../../public/skills/Git-Icon-Black.png'
import logo15 from '../../../../public/skills/Github.png'
import logo16 from '../../../../public/skills/command-line-icon-1.png'

const Skills = () => {
    return (
        <div className='mb-10'>
            <div className='flex  justify-center '>
                <h1 className=" link text-center text-4xl font-bold text-purple-700 my-10">Skills </h1>
                <img className='w-[100px] h-[100px]' src={logoSkills} alt="" />
            </div>
            <div className="divider"></div>
            {/* prant div */}
            <div className='md:grid grid-cols-3 gap-4 p-4'>

                {/* Front End  */}
                <div className='border shadow '>
                    <h1 className='text-4xl text-purple-700 text-center mt-2'>Front End </h1>
                    <div className='grid md:grid-cols-3 grid-cols-2  ml-6 my-6  '>
                        <img className='w-[100px] h-[100px] mb-10  p-2 text-base-content bg-slate-200 hover:bg-white hover:text-black rounded-lg shadow-xl  hover:translate-x-2.5 hover:translate-y-3 text-center' src={logo} alt="" />
                        <img className='w-[100px] h-[100px]  mb-10  p-2 text-base-content bg-slate-200 hover:bg-white hover:text-black rounded-lg shadow-xl  hover:translate-x-2.5 hover:translate-y-3 text-center' src={logo1} alt="" />
                        <img className='w-[100px] h-[100px]  mb-10  p-2 text-base-content bg-slate-200 hover:bg-white hover:text-black rounded-lg shadow-xl  hover:translate-x-2.5 hover:translate-y-3 text-center' src={logo2} alt="" />
                        <img className='w-[100px] h-[100px]  mb-10  p-2 text-base-content bg-slate-200 hover:bg-white hover:text-black rounded-lg shadow-xl  hover:translate-x-2.5 hover:translate-y-3 text-center' src={logo3} alt="" />
                        <img className='w-[100px] h-[100px]  mb-10  p-2 text-base-content bg-slate-200 hover:bg-white hover:text-black rounded-lg shadow-xl  hover:translate-x-2.5 hover:translate-y-3 text-center' src={logo4} alt="" />
                        <img className='w-[100px] h-[100px]  mb-10  p-2 text-base-content bg-slate-200 hover:bg-white hover:text-black rounded-lg shadow-xl  hover:translate-x-2.5 hover:translate-y-3 text-center' src={logo5} alt="" />
                       
                    </div>
                </div>

                {/* Backend */}
                <div className='border shadow '>
                    <h1 className='text-4xl text-purple-700 text-center mt-2'>Back End </h1>
                    <div className='grid md:grid-cols-3 grid-cols-2  ml-6 my-6 '>
                        <img className='w-[100px] h-[100px]  mb-10  p-2 text-base-content bg-slate-200 hover:bg-white hover:text-black rounded-lg shadow-xl  hover:translate-x-2.5 hover:translate-y-3 text-center' src={logo6} alt="" />
                        <img className='w-[100px] h-[100px]  mb-10  p-2 text-base-content bg-slate-200 hover:bg-white hover:text-black rounded-lg shadow-xl  hover:translate-x-2.5 hover:translate-y-3 text-center' src={logo7} alt="" />
                        <img className='w-[100px] h-[100px]  mb-10  p-2 text-base-content bg-slate-200 hover:bg-white hover:text-black rounded-lg shadow-xl  hover:translate-x-2.5 hover:translate-y-3 text-center' src={logo8} alt="" />
                        <img className='w-[100px] h-[100px]  mb-10  p-2 text-base-content bg-slate-200 hover:bg-white hover:text-black rounded-lg shadow-xl  hover:translate-x-2.5 hover:translate-y-3 text-center' src={logo9} alt="" />

                    </div>
                </div>
                {/* Tooles */}

                <div className='border shadow '>
                    <h1 className='text-4xl text-purple-700 text-center mt-2'> Tools </h1>
                    <div className='grid md:grid-cols-3 grid-cols-2  ml-6 my-6  '>
                        <img className='w-[100px] h-[100px]  mb-10  p-2 text-base-content bg-slate-200 hover:bg-white hover:text-black rounded-lg shadow-xl  hover:translate-x-2.5 hover:translate-y-3 text-center' src={logo10} alt="" />
                        <img className='w-[100px] h-[100px]  mb-10  p-2 text-base-content bg-slate-200 hover:bg-white hover:text-black rounded-lg shadow-xl  hover:translate-x-2.5 hover:translate-y-3 text-center' src={logo11} alt="" />
                        <img className='w-[100px] h-[100px]  mb-10  p-2 text-base-content bg-slate-200 hover:bg-white hover:text-black rounded-lg shadow-xl  hover:translate-x-2.5 hover:translate-y-3 text-center' src={logo12} alt="" />
                        <img className='w-[100px] h-[100px]  mb-10  p-2 text-base-content bg-slate-200 hover:bg-white hover:text-black rounded-lg shadow-xl  hover:translate-x-2.5 hover:translate-y-3 text-center' src={logo13} alt="" />
                        <img className='w-[100px] h-[100px]  mb-10  p-2 text-base-content bg-slate-200 hover:bg-white hover:text-black rounded-lg shadow-xl  hover:translate-x-2.5 hover:translate-y-3 text-center' src={logo14} alt="" />
                        <img className='w-[100px] h-[100px]  mb-10  p-2 text-base-content bg-slate-200 hover:bg-white hover:text-black rounded-lg shadow-xl  hover:translate-x-2.5 hover:translate-y-3 text-center' src={logo15} alt="" />
                        <img className='w-[100px] h-[100px]  mb-10  p-2 text-base-content bg-slate-200 hover:bg-white hover:text-black rounded-lg shadow-xl  hover:translate-x-2.5 hover:translate-y-3 text-center' src={logo16} alt="" />
                       
                    </div>
                </div>




            </div>
        </div>
    );
};

export default Skills;