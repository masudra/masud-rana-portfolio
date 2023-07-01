import logoSkills from '../../../../public/skills/skills.png'
import logo from '../../../../public/skills/html5.png'
import logo1 from '../../../../public/skills/CSS3.png'
import logo2 from '../../../../public/skills/javascript-.jpg'
import logo3 from '../../../../public/skills/Bootstrap.png'
import logo4 from '../../../../public/skills/Tailwind.png'
import logo5 from '../../../../public/skills/React.png'
import logo6 from '../../../../public/skills/nodejs.png'
import logo7 from '../../../../public/skills/firebase.png'

const Skills = () => {
    return (
        <div className='mb-10'>
           <div className='flex  justify-center'>
           <h1 className=" text-center text-4xl font-bold text-purple-700 my-10">Skills </h1>
            <img className='w-[100px] h-[100px]' src={logoSkills} alt="" />
           </div>
           <div className="divider"></div>

            <div className=' grid grid-cols-4 gap-5 ml-14 '>
                <img className='w-[120px] h-[120px] bg-white hover:bg-slate-400 p-2' src={logo} alt="" />
                <img className='w-[120px] h-[120px] bg-white hover:bg-slate-400 p-2' src={logo1} alt="" />
                <img className='w-[120px] h-[120px] bg-white hover:bg-slate-400 p-2' src={logo2} alt="" />
                <img className='w-[120px] h-[120px] bg-white hover:bg-slate-400 p-2' src={logo3} alt="" />
                <img className='w-[120px] h-[120px] bg-white hover:bg-slate-400 p-2' src={logo4} alt="" />
                <img className='w-[120px] h-[120px] bg-white hover:bg-slate-400 p-2' src={logo5} alt="" />
                <img className='w-[120px] h-[120px] bg-white hover:bg-slate-400 p-2' src={logo6} alt="" />
                <img className='w-[120px] h-[120px] bg-white hover:bg-slate-400 p-2' src={logo7} alt="" />
            </div>
        </div>
    );
};

export default Skills;