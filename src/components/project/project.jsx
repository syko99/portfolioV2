const Project = ({ project }) => {
    return (
        <div className='w-full flex flex-col gap-4 overflow-hidden dark:text-slate-300'>
            <div className='grid place-items-center max-w-lg mx-auto'>
                <img src={project.image} alt={`${project.name}` + ' image'} />
            </div>
            <div className="flex flex-col gap-4">
                <h3 className='text-3xl font-bold capitalize'>{project.name}</h3>
                <p>{project.description}</p>
                <div className='flex gap-4 justify-center items-center'>
                    <a href={project.live} target='_' className='w-full max-w-xs'>
                        <button className='w-full p-1 border-2 rounded-lg hover:border-slate-300 dark:border-zinc-600 dark:hover:border-zinc-500'>Live</button>
                    </a>
                    <a href={project.code} target='_' className='w-full max-w-xs'>
                        <button className='w-full p-1 border-2 rounded-lg hover:border-slate-300 dark:border-zinc-600 dark:hover:border-zinc-500'>Code</button>
                    </a>
                </div>
            </div>
        </div>
    )
}

export default Project
