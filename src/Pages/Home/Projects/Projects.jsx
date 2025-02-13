import  { useEffect, useState } from 'react';
import ProjectsCard from './ProjectsCard';
import axios from 'axios';


const Projects = () => {
    const [data,setData] = useState([])
    useEffect(()=>{
        axios.get(`https://portfolio-website-ayesha-siddika-server.vercel.app/projects`)
        .then(res=>{
            setData(res.data);
            
        })


    },[])
    
    return (
        <div id='projects'>
            <p className='text-center text-4xl text-indigo-300 mt-20 mb-8'>| Projects |</p>
            {/* <ProjectsCard image={}></ProjectsCard> */}
            <div className='grid md:grid-cols-2 grid-cols-1 gap-10 w-[90%] m-auto mt-10'>
                {
                    data?.map((item,index)=><ProjectsCard key={index} item={item}></ProjectsCard>)
                }
            </div>
            
        </div>
    );
};

export default Projects;