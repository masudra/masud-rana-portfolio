import Aos from "aos";
import { useEffect } from "react";
import bannerlogo1 from '../../../../public/Serveis/web_developer.gif'
import bannerlogo2 from '../../../../public/Serveis/mobail responsive.gif'
import bannerlogo3 from '../../../../public/Serveis/Data-Storage-Concept.gif'

Aos.init({
  duration: 1800,
});
const Services = () => {
    useEffect(() => {
        Aos.init();
        Aos.refresh();
    }, []);

  return (
    <div data-aos="zoom-out-up" id="services">
      <h1 className=" text-4xl text-purple-700 text-center link my-2 mt-20">Services</h1>
      <div className=" grid md:grid-cols-3 md:ml-10 px-8 gap-2">
        <div className=" md:w-[380px] w-[300px] p-4 text-base-content bg-slate-200 mt-6  hover:bg-white hover:text-black rounded-lg shadow-xl  hover:translate-x-2.5 hover:translate-y-3 text-center">
          <img className="w-[300px] mx-auto h-[190px]" src={bannerlogo1} alt="" />

          <h1 className="text-2xl my-2">Front End Development</h1>
          <p>I am a fairly skilled person in font and development. Front End Development I work with great interest and attention.I always prefer React for font end development</p>
        </div>
        <div className="md:w-[380px] w-[300px] p-4 text-base-content bg-slate-200 mt-6 hover:bg-white hover:text-black rounded-lg shadow-xl  hover:translate-x-2.5 hover:translate-y-3 text-center">
          <img className="w-[300px] mx-auto  h-[190px]" src={bannerlogo2} alt="" />

          <h1 className="text-2xl my-2">Mobile Responsive</h1>
          <p className="">I am very skilled in Mobile Responsive Design I love to make Mobile Responsive And mobile responsive is a very easy matter. Be it responsive for mobile be it tailwind be it bootstrap be it custom css I am not afraid of any of them all are easy for me.</p>
        </div>
        <div className="  md:w-[380px] w-[300px] p-4 text-base-content bg-slate-200 mt-6 hover:bg-white hover:text-black rounded-lg shadow-xl  hover:translate-x-2.5 hover:translate-y-3 text-center">
          <img className="w-[300px] mx-auto h-[190px]" src={bannerlogo3} alt="" />

          <h1 className="text-2xl my-2">Backend Development</h1>
          <p>For the backend site, I use Mongodb as a database and I am reasonably well-versed in Mongodb..I have created several projects using MongoDB as a database.</p>
        </div>


      </div>
    </div>
  );
};

export default Services;