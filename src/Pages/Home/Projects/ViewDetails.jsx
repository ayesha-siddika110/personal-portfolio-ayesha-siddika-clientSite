import React from 'react';
import { FaArrowCircleRight } from 'react-icons/fa';
import { useLoaderData } from 'react-router-dom';

const ViewDetails = () => {
    const data = useLoaderData()
    console.log(data);
    const { Description, keyFeatures, clientLink, livesiteLink, pakagesUse, projectName, projectimage, serverLink } = data || {}

    return (
        <div className='bg-[#09062e] text-white min-h-screen mt-[70px]'>
            <div className=' w-[80%] m-auto py-16'>
                <div className='border border-indigo-500 p-8'>
                    <div>
                        <div className='lg:flex'>
                            <div className='space-y-6'>
                                <p className='text-3xl'>Project Name : <span className='text-indigo-300'>{projectName}</span></p>
                                <p className='text-lg'><span className='text-7xl'>D</span>escription : <span>{Description}</span></p>
                                <div>

                                <a href={livesiteLink} target='_black' className=''>
                                    <button className="hover:bg-indigo-500 border border-indigo-600 shadow-lg shadow-indigo-500/40 py-2 rounded-lg px-4 flex items-center gap-4">Live Preview<FaArrowCircleRight className='-rotate-45'></FaArrowCircleRight></button></a>
                                </div>
                                    
                            </div>
                            <div>
                                <img className='w-full lg:pt-0 pt-10' src={projectimage} alt="" />
                            </div>
                        </div>
                    </div>
                    <div className="divider divider-neutral"></div>

                    <div className=' lg:flex'>
                        {/* key features */}
                        <div>
                            <p className='text-xl font-semibold'>Key Features :</p>
                            <ul className='list-disc pl-8 text-gray-300'>
                                {
                                    keyFeatures?.map((item, index) => <li key={index}>{`${item}`}</li>)
                                }
                            </ul>
                            <p className='text-xl font-semibold'>Pakages Use :</p>
                            <ul className='list-disc pl-8 text-gray-300'>
                                {
                                    pakagesUse?.map((item, index) => <li key={index}>{`${item}`}</li>)
                                }
                            </ul>
                        </div>
                        <div className="divider lg:divider-horizontal divider-neutral md:flex hidden"></div>
                        <div className='font-semibold pt-8'>
                            <p>Github Server Site : <a href={serverLink} className='underline' target='_black'>Click Here</a></p>
                            <p>Github Client Site : <a href={clientLink} className='underline' target='_black'>Click Here</a></p>
                            
                        </div>
                    </div>

                </div>
            </div>

        </div>
    );
};

export default ViewDetails;