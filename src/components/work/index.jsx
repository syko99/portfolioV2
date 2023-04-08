import softwareForGoodImg from '@public/assets/sfg.svg'

const Work = () => {
    return (
        <div className='grid-in-work w-full bg-white rounded-lg shadow-md p-4 flex flex-col gap-4 relative dark:bg-zinc-800 dark:text-slate-300'>
            <h2 className="text-xl border-b text-slate-800 dark:text-slate-300">Work</h2>
            <div className='text-center flex flex-col gap-4 items-center lg:text-start'>
                <div className='lg:self-start'>
                    <h3 className='text-lg font-bold'>Software Developer Intern</h3>
                    <p className='capitalize text-black/75 text-sm dark:text-slate-300/75'>
                        Software For Good - Summer 2022
                    </p>
                </div>
                <div className='w-full max-w-sm p-4 rounded-lg dark:bg-white'>
                    <img src={softwareForGoodImg} alt='software for good logo' />
                </div>
                <p className='max-w-prose'>
                    Experience working in scrum teams and individually as a full stack software
                    developer. Developed web applications using Ruby on rails, React,
                    JavaScript, PostgreSQL, HTML, and various CSS frameworks.
                </p>
            </div>
            <div id='work' className='absolute -top-1/2' aria-hidden='true'></div>
        </div>
    )
}

export default Work
