

const CardSkill = ({image, heading, subheading}) => {
    return (
        <div className='border border-indigo-600 shadow-md shadow-indigo-600 bg-blue-950 text-center  flex flex-col justify-center items-center p-4 rounded-lg'>
            <img className="w-[80px] h-[80px] object-contain bg-white" src={image} alt="" />
            <p className="text-lg font-semibold pt-2">{heading}</p>
            <p className="text-sm pt-1">{subheading}</p>
            
        </div>
    );
};

export default CardSkill;