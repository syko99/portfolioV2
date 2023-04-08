import linkSvg from '../../assets/link.svg'
import bracketSvg from '../../assets/brackets.svg'

const Project = ({ project }) => {
    return (
        <div
            className={`w-full flex flex-col rounded-lg p-4 ${project.background} shadow-md ${project.textColor}`}>
            <div className='flex justify-between items-center'>
                <div>
                    <h3 className='text-2xl font-bold capitalize'>{project.name}</h3>
                    <p className='opacity-75'>{project.description}</p>
                </div>
                <div className={`flex gap-4 text-black`}>
                    <a href={project.live} target='_' className=''>
                        <button
                            className={`w-10 aspect-square p-1 rounded-full grid place-items-center bg-white`}>
                            <div className='w-6'>
                                <img src={linkSvg} alt='link to project page' />
                            </div>
                        </button>
                    </a>
                    <a href={project.code} target='_' className=''>
                        <button
                            className={`w-10 aspect-square p-1 rounded-full grid place-items-center bg-white`}>
                            <div className='w-6'>
                                <img src={bracketSvg} alt='link to code' />
                            </div>
                        </button>
                    </a>
                </div>
            </div>
            <div className='w-3/4 mx-auto mt-8'>
                <img src={project.image} alt='project image' />
            </div>
        </div>
    )
}

export default Project
