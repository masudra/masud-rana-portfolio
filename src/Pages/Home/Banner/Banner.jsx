import { TypeAnimation } from 'react-type-animation';

const Banner = () => {

  const handleDownload = () => {
    const link = document.createElement('a');
   const mr= link.href = 'Resume Of Masud Rana.pdf';
    link.download = mr;
    link.click();
  };

  return (
    <div className='md:flex  justify-between  px-10 py-2  '>
      <div className='text-purple-700 font-bold my-auto ml-10'>
        <h1 className='md:text-[50px] text-3xl text-purple-700 '>Hello,<br /><br/> <span className='mt-100'>I am  Masud Rana</span></h1>
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
          style={{  display: 'inline-block' }}
          repeat={Infinity}
        /><br />

        <button onClick={handleDownload} className='btn bg-purple-700 text-white hover:bg-white hover:text-purple-700 mt-10'>Download Resume</button>
        {/* <a href="Resume Of Masud Rana.pdf" download='Resume Of Masud Rana.pdf'>d now</a> */}
      </div>
      <div className='md:mr-20'>
        <img className='w-[400px] ' src="../../../../public/vs-designer-GIF-unscreen.gif" alt="" />
      </div>

    </div>


  );
};

export default Banner;