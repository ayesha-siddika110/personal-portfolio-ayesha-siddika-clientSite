
import { motion } from "framer-motion";
import workerimg from '../../../assets/working.png'
const About = () => {
    return (
        <div id="about">
            <p className='text-center text-4xl text-indigo-300 mt-6'>| About Me |</p>
            

            <div className='w-[80%] m-auto lg:flex md:flex py-10'>
                <div className='lg:w-[50%] md:w-[50%] w-[90%] flex justify-center items-center'>
                    <img src={workerimg}  alt="img" />

                </div>
                <div className='lg:w-[50%] md:w-[50%] w-[90%] space-y-3'>
                    <h1 className='text-4xl text-indigo-400 font-semibold mt-10'>My Programming Journey</h1>
                    <p className='text-gray-400 text-justify text-[16px] pt-6'>My path has been driven by hard work and determination. With every line of code, I continue to push my boundaries, learning new technologies and improving my craft. Starting from the basics of HTML and CSS, I’ve evolved into a proficient MERN Stack developer, constantly learning and refining my skills to deliver impactful web applications.</p>
                    <p>I believe every project is an opportunity to innovate. By staying curious and continuously brainstorming fresh ideas, I strive to create web applications that solve real-world problems.</p>


                </div>

            </div>

        </div>
    );
};

export default About;