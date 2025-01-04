
import profileimg from '../../../assets/my.jpg'
import { TypeAnimation } from 'react-type-animation';
import cvpdf from '../../../assets/cv.pdf'
import { FaGithub } from "react-icons/fa6";
import { FaLinkedinIn } from "react-icons/fa";
import { FaFacebookF } from "react-icons/fa";

const Hero = () => {
    return (
        <div className='w-[80%] m-auto md:flex items-center justify-center py-44'>
            <div className='md:w-[70%] space-y-4'>
                <p className='text-indigo-400 text-xl font-semibold pt-2'>Hi ! I Am</p>
                <p className='text-6xl font-semibold pb-3'>Ayesha Siddika</p>
                <p className='text-3xl font-semibold text-gray-300 text-opacity-50'>
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
                <p className='w-[80%] text-gray-300'>&quot;I design and develop modern web solutions using the MERN stack. From interactive front-end interfaces with React to robust back-end services with Node.js, I deliver complete, end-to-end solutions that are user-friendly, fast, and efficient.&quot;</p>
                <div className='lg:flex md:flex  gap-10 pt-6'>
                    <a href={cvpdf} target='_black'><button className="hover:bg-indigo-500 border border-indigo-600 shadow-lg shadow-indigo-500/40 py-2 rounded-lg px-4 ">Download CV</button></a>

                    <div className='flex gap-7 text-white lg:mt-0 md:mt-0 mt-6'>
                        <p className='w-10 h-10 text-center flex items-center justify-center rounded-full border text-2xl border-indigo-600 shadow-md shadow-indigo-700'>
                            <a href="https://www.facebook.com/ayesha.siddika.982225" target='_blank'><FaFacebookF /></a>
                        </p>
                        <p className='w-10 h-10 text-center flex items-center justify-center rounded-full border text-xl border-indigo-600 shadow-md shadow-indigo-700'>
                            <a href="https://www.linkedin.com/in/ayesha-siddika110/" target='_blank'><FaLinkedinIn /></a>
                        </p>
                        <p className='w-10 h-10 text-center flex items-center justify-center rounded-full border text-xl border-indigo-600 shadow-md shadow-indigo-700'>
                            <a href="https://github.com/ayesha-siddika110" target='_blank'><FaGithub /></a>
                        </p>


                    </div>

                </div>

            </div>
            <div className='pt-10 md:pt-0'>
                <img src={profileimg} className='w-[350px] h-[350px] object-cover rounded-full' alt="" />
            </div>

        </div>
    );
};

export default Hero;