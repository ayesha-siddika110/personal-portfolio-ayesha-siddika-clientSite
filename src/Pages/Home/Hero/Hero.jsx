
import profileimg from '../../../assets/ayesha.jpg'
// import profileimg from '../../../assets/my.jpg'
import { TypeAnimation } from 'react-type-animation';
import cvpdf from '../../../assets/CV_For_Front_End_Developer_Ayesha_Siddika (3).pdf'
import { FaGithub } from "react-icons/fa6";
import { FaLinkedinIn } from "react-icons/fa";
import { FaFacebookF } from "react-icons/fa";

const Hero = () => {
    return (
        <div id='hero' className='w-[90%] m-auto md:flex items-center justify-center md:py-32 pt-10'>
            <div className='md:w-[70%] w-[100%] space-y-2 ' data-aos="fade-right"  >
                <p className='text-indigo-400 text-xl font-semibold pt-2'>Hi ! I Am</p>
                <p className='text-6xl font-semibold pb-1'>Ayesha Siddika</p>
                <p className='md:text-3xl text-xl font-semibold text-gray-300 text-opacity-50 leading-[50px] md:leading-normal'>
                    <TypeAnimation
                        sequence={[

                            'Love to Coding',
                            1000,
                            'Database Management',
                            1000,
                            'User Friendly Application',
                            1000,
                            'Passionate Web Developer',
                            1000
                        ]}
                        wrapper="span"
                        speed={50}
                        style={{ fontSize: '2em', display: 'inline-block' }}
                        repeat={Infinity}
                    />

                </p>
                <p className='md:w-[80%] text-gray-300 text-justify'>&quot;I design and develop modern web solutions using the MERN stack. From interactive front-end interfaces with React to robust back-end services with Node.js, I deliver complete, end-to-end solutions that are user-friendly, fast, and efficient.&quot;</p>
                <div className='lg:flex md:flex  gap-10 pt-6'>
                    <a href={cvpdf} target='_blank'><div className="hover:bg-indigo-500 cursor-pointer border border-indigo-600 shadow-lg shadow-indigo-500/40 py-2 w-[140px] text-center rounded-lg px-4 hover:-translate-y-1">Download CV</div></a>

                    <div className='flex gap-7 text-white lg:mt-0 md:mt-0 mt-6'>
                        
                            <a href="https://www.facebook.com/ayesha.siddika.982225" className='w-10 cursor-pointer hover:-translate-y-1 h-10 text-center flex items-center justify-center rounded-full border text-2xl border-indigo-600 shadow-md shadow-indigo-700' target='_blank'><div className='cursor-pointer'><FaFacebookF /></div></a>
                      
                      
                            <a href="https://www.linkedin.com/in/ayesha-siddika110/" target='_blank' className='w-10 h-10 hover:-translate-y-1 cursor-pointer text-center flex items-center justify-center rounded-full border text-xl border-indigo-600 shadow-md shadow-indigo-700'><div className='cursor-pointer'><FaLinkedinIn /></div></a>
                    
                     
                            <a href="https://github.com/ayesha-siddika110" target='_blank' className='w-10 h-10 hover:-translate-y-1 cursor-pointer text-center flex items-center justify-center rounded-full border text-xl border-indigo-600 shadow-md shadow-indigo-700'><div className='cursor-pointer'><FaGithub /></div></a>
                  


                    </div>

                </div>

            </div>
            <div className='pt-10 md:pt-0' data-aos="fade-left"  >
                <img src={profileimg} className='md:w-[350px] md:h-[350px] h-[200px] w-[200px] object-cover rounded-full' alt="" />
            </div>

        </div>
    );
};

export default Hero;