import softwareForGoodImg from '../../assets/sfg.svg'

const Work = () => {
    return (
        <div className='grid-in-work w-full bg-white rounded-lg shadow-md p-4 flex flex-col gap-4'>
            <h2 className="text-xl font-bold border-b">Work</h2>
            <div className='text-center flex flex-col gap-4 items-center'>
                <div>
                    <h3 className='font-medium'>Software Developer Intern</h3>
                    <p className='capitalize text-black/75 text-sm'>
                        Software For Good - Summer 2022
                    </p>
                </div>
                <div className='w-full max-w-sm'>
                    <img src={softwareForGoodImg} alt='software for good logo' />
                </div>
                <p className='max-w-prose'>
                    Experience working in scrum teams and individually as a full-stack software
                    developer. Development of web applications using Ruby on rails, React,
                    JavaScript, PostgreSQL, HTML, and various CSS frameworks.
                </p>
            </div>
        </div>
    )
}

export default Work
