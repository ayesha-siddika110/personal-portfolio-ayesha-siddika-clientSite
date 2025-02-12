
import Navbar from '../Componants/Navbar/Navbar';
import { Outlet } from 'react-router-dom';
import AnimatedCursor from "react-animated-cursor"
import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from 'react';

const MainLayout = () => {
    useEffect(() => {
        AOS.init({
          duration: 1500, // Animation duration in milliseconds
          once: true, // Whether animation should happen only once
        });
      }, []);
    return (
        <div className='bg-[#09062e] text-white  m-auto'>

            <Navbar></Navbar>
            <Outlet></Outlet>
            <AnimatedCursor
                innerSize={8}
                outerSize={40}
                color="99, 102, 241" 
                outerAlpha={0.4}
                innerScale={1.2}
                outerScale={1}
                outerStyle={{
                    borderRadius: "50%",
                    border: "2px solid rgba(99, 102, 241, 0.4)",
                    backgroundColor: "rgba(9, 6, 46, 0.0078)",
                }}
                innerStyle={{
                    borderRadius: "50%",
                    backgroundColor: "rgba(99, 102, 241, 1)", 
                }}
                clickables={[
                    "a",
                    "input",
                    "textarea",
                    "button",
                    ".link"
                ]}
            />

        </div>
    );
};

export default MainLayout;