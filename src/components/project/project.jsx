import linkSvg from '@public/assets/link.svg'
import bracketSvg from '@public/assets/brackets.svg'

const Project = ({ project }) => {
    return (
        <div
            className={`w-full flex flex-col rounded-lg p-4 ${project.background} shadow-md ${project.textColor}`}>
            <div className='flex flex-col'>
                <div className='flex justify-between items-center'>
                    <h3 className='text-2xl font-bold capitalize'>{project.name}</h3>
                    <div className={`flex gap-2 text-black`}>
                        <a href={project.live} target='_' className=''>
                            <button
                                className={`w-8 aspect-square p-1 rounded-full grid place-items-center bg-white sm:w-10 hover:opacity-75`}>
                                <div className='w-5 sm:w-6'>
                                    <img src={linkSvg} alt='link to project page' />
                                </div>
                            </button>
                        </a>
                        <a href={project.code} target='_' className=''>
                            <button
                                className={`w-8 aspect-square p-1 rounded-full grid place-items-center bg-white sm:w-10 hover:opacity-75`}>
                                <div className='w-5 sm:w-6'>
                                    <img src={bracketSvg} alt='link to code' />
                                </div>
                            </button>
                        </a>
                    </div>
                </div>
                <p className='opacity-75'>{project.description}</p>
            </div>
            <div className='w-3/4 mx-auto mt-8'>
                <img src={project.image} alt='project image' />
            </div>
        </div>
    )
}

export default Project
