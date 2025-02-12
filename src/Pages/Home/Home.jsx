import { ToastContainer } from "react-toastify";
import About from "./About/About";
import Contact from "./Contact/Contact";
import Hero from "./Hero/Hero";
import Projects from "./Projects/Projects";
import Skills from "./Skills/Skills";
import { FaArrowUp} from "react-icons/fa6";


const Home = () => {
    return (
        <div className="bg-[#09062e] text-white min-h-screen mt-[70px] relative">
            <ToastContainer></ToastContainer>
            <Hero></Hero>
            <About></About>
            <Skills></Skills>
            <Projects></Projects>
            <Contact></Contact>

            <a href="#hero" className='w-10 cursor-pointer hover:-translate-y-1 h-10 text-center flex items-center justify-center rounded-full border text-2xl border-indigo-600 shadow-md shadow-indigo-700 sticky bottom-8 left-[95%]' target='_blank'><div className='cursor-pointer'><FaArrowUp /></div></a>
            
        </div>
    );
};

export default Home;