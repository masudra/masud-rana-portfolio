import { TypeAnimation } from 'react-type-animation';

const Banner = () => {

  return (
    <div className='flex  justify-between  px-10 py-2  '>
      <div className='text-purple-700 font-bold my-auto'>
        <h1 className='text-4xl text-purple-700'>Hello,<br/> I am  Masud Rana</h1>
        <TypeAnimation
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
          style={{ fontSize: '2em', display: 'inline-block' }}
          repeat={Infinity}
        /><br/>

        <button className='btn bg-purple-700 text-white hover:bg-white hover:text-purple-700 mt-10'>Download Resume</button>
      </div>
      <div className='ml-80'>
        <img className='w-[400px]' src="../../../../public/vs-designer-GIF-unscreen.gif" alt="" />
      </div>

    </div>


  );
};

export default Banner;