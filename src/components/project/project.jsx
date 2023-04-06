const Project = ({ project }) => {
    return (
        <div className='w-full bg-white rounded-lg flex flex-col shadow-md overflow-hidden'>
            <div className='grid place-items-center max-w-lg mx-auto'>
                <img src={project.image} alt={`${project.name}` + ' image'} />
            </div>
            <div className="flex flex-col gap-4 p-4">
                <h3 className='text-2xl font-bold capitalize'>{project.name}</h3>
                <p>{project.description}</p>
                <div className='flex gap-4 justify-center items-center'>
                    <a href={project.live} target='_' className='w-full'>
                        <button className='w-full p-1 border rounded-lg'>Live</button>
                    </a>
                    <a href={project.code} target='_' className='w-full'>
                        <button className='w-full p-1 border rounded-lg'>Code</button>
                    </a>
                </div>
            </div>
        </div>
    )
}

export default Project
