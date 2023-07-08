import { FaFacebook, FaGithub, FaLinkedin, FaTwitter } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import { TypeAnimation } from 'react-type-animation';
import bannarlogo from '../../../../public/Serveis/vs-designer-GIF-unscreen.gif'

const Banner = () => {

  const handleDownload = () => {
    const link = document.createElement('a');
    const mr = link.href = 'Resume Of Masud Rana.pdf';
    link.download = mr;
    link.click();
  };

  return (
    <div id='home' className='md:flex  justify-between  px-10 py-2   '>
      <div className='text-purple-700 font-bold my-auto ml-10 md:mt-32'>
        <h1 className='md:text-[50px] text-3xl text-purple-700 '>Hello,<br /><br /> <span className='mt-100'>I am  Masud Rana</span></h1>
        <TypeAnimation className='md:text-[50px] text-3xl mt-8'
          sequence={[
            // Same substring at the start will only be typed out once, initially
            'I am a',
            1000, // wait 1s before replacing "Mice" with "Hamsters"
            'Mern Stack Developer',
            1000,
            'I am a Front End Developer',
            1000,
            'I am a Web Designer',
            1000
          ]}
          wrapper="span"
          speed={50}
          style={{ display: 'inline-block' }}
          repeat={Infinity}
        /><br />

        <div className='md:flex'>
          <button onClick={handleDownload} className='btn bg-purple-700 text-white hover:bg-white hover:text-purple-700  mt-10'>Download Resume</button>
          {/* <a href="Resume Of Masud Rana.pdf" download='Resume Of Masud Rana.pdf'>d now</a> */}
          <div className="flex justify-center ml-6  gap-5 text-4xl mt-10">
            <Link className="text-purple-700" to='https://www.linkedin.com/in/md-masud-rana-a45676282/'><FaLinkedin></FaLinkedin></Link>
            <Link className="text-purple-700" to='https://github.com/masudra'><FaGithub></FaGithub></Link>
            <Link className="text-purple-700" to='https://www.facebook.com/masudrana0707'><FaFacebook></FaFacebook></Link>
            <Link className="text-purple-700" to='https://twitter.com/MdMasud71285325'><FaTwitter></FaTwitter></Link>

          </div>
        </div>
      </div>
      <div className='md:mr-20 md:mt-20'>
        <img className='w-[400px] ' src={bannarlogo} alt="" />
      </div>

    </div>


  );
};

export default Banner;