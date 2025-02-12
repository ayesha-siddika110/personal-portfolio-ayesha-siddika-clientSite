import CardSkill from "./CardSkill";
import firebaseimg from '../../../assets/firebase.png'
import JavaScriptimg from '../../../assets/javascript.png'
import reactimg from '../../../assets/react.png'
import tailwindimg from '../../../assets/tailwind.png'
import expressimg from '../../../assets/express.png'
import mongoimg from '../../../assets/mongo.png'
import JWTimg from '../../../assets/jwt-3.svg'
import githubimg from '../../../assets/github.svg'
import { useEffect } from "react";
import AOS from "aos";
import { FaDiagramNext } from "react-icons/fa6";
import { RiNextjsFill } from "react-icons/ri";



const Skills = () => {
 
    return (
        <div className="py-10" id="skills">
            <p className='text-center text-4xl text-indigo-300 mt-6' data-aos="fade-up" >| Skills |</p>
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 lg:w-[90%] w-[90%] m-auto gap-8 mt-10">

            <CardSkill data-aos="fade-left"  image={JavaScriptimg} heading={`JavaScript (ES6)`} subheading={'Modern Web Interactivityd'}></CardSkill>
            <CardSkill data-aos="fade-left" image={reactimg} heading={`React JS`} subheading={`Build Interactive User Interfaces`}></CardSkill>
            <CardSkill data-aos="fade-left" image={tailwindimg} heading={`Tailwind CSS`} subheading={`Utility-First CSS Framework`}></CardSkill>
            <CardSkill data-aos="fade-left" image={mongoimg} heading={` MongoDB`} subheading={`NoSQL Database Solution`}></CardSkill>
            <CardSkill data-aos="fade-left" image={expressimg} heading={`Express.js`} subheading={`Fast and Minimal Backend`}></CardSkill>
            <CardSkill data-aos="fade-left" image={JWTimg} heading={`JWT Auth`} subheading={`Secure User Authentication`}></CardSkill>
            <CardSkill data-aos="fade-right" image={firebaseimg} heading={`Firebase`} subheading={`authentication, database, and cloud functions`}></CardSkill>
            <CardSkill data-aos="fade-right"  image={githubimg} heading={`GitHub`} subheading={`Version Control and Collaboration`}></CardSkill>
      
            </div>

            {/* firebase,html,css,js(es6),react,Tailwind CSS,Express.js, Mongodb,JWT Authentication,GitHub */}
            
        </div>
    );
};

export default Skills;