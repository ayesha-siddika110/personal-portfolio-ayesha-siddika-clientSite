
import { Link } from 'react-router-dom';


const ProjectsCard = ({ item }) => {
    const { projectimage, projectName, livesiteLink,_id } = item || {}
    

    return (
        <>
         <div data-aos="fade-up" className='p-6 border border-indigo-600  cursor-pointer hover:-translate-y-1'>
            <img className='lg:h-[300px] w-full object-contain' src={projectimage} alt="" />
            <p className='text-center pt-4 text-lg font-semibold'>{projectName}</p>
            <div className='flex justify-center items-center mt-4'>
                <Link to={`/viewDetails/${_id}`}>
                <div className="hover:bg-indigo-500 cursor-pointer border border-indigo-600 shadow-lg shadow-indigo-500/40 py-2 rounded-lg px-4">View Details</div>
                </Link>
            </div>

        </div>
        
        </>
       
    );
};

export default ProjectsCard;