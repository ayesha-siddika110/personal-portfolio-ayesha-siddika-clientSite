import CardSkill from "./CardSkill";
import firebaseimg from '../../../assets/firebase.png'
import JavaScriptimg from '../../../assets/javascript.png'
import reactimg from '../../../assets/react.png'
import tailwindimg from '../../../assets/tailwind.png'
import expressimg from '../../../assets/express.png'
import mongoimg from '../../../assets/mongo.png'
import JWTimg from '../../../assets/jwt-3.svg'
import githubimg from '../../../assets/github.svg'




const Skills = () => {
    return (
        <div id="skills">
            <p className='text-center text-4xl text-indigo-300 mt-6'>| Skills |</p>
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 lg:w-[80%] w-[80%] m-auto gap-8 mt-10">

            <CardSkill image={JavaScriptimg} heading={`JavaScript (ES6)`} subheading={'Modern Web Interactivityd'}></CardSkill>
            <CardSkill image={reactimg} heading={`React JS`} subheading={`Build Interactive User Interfaces`}></CardSkill>
            <CardSkill image={tailwindimg} heading={`Tailwind CSS`} subheading={`Utility-First CSS Framework`}></CardSkill>
            <CardSkill image={mongoimg} heading={` MongoDB`} subheading={`NoSQL Database Solution`}></CardSkill>
            <CardSkill image={expressimg} heading={`Express.js`} subheading={`Fast and Minimal Backend`}></CardSkill>
            <CardSkill image={JWTimg} heading={`JWT Auth`} subheading={`Secure User Authentication`}></CardSkill>
            <CardSkill image={firebaseimg} heading={`Firebase`} subheading={`authentication, database, and cloud functions`}></CardSkill>
            <CardSkill image={githubimg} heading={`GitHub`} subheading={`Version Control and Collaboration`}></CardSkill>
            </div>

            {/* firebase,html,css,js(es6),react,Tailwind CSS,Express.js, Mongodb,JWT Authentication,GitHub */}
            
        </div>
    );
};

export default Skills;