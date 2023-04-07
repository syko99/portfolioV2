import profileImg from '../../assets/profile_images/profile.jpg'
import githubSVG from '../../assets/profile_images/github.svg'
import mailSVG from '../../assets/profile_images/mail.svg'
import linkedinSVG from '../../assets/profile_images/linkedin.svg'

const About = () => {
    return (
        <div className='grid-in-about w-full bg-white rounded-lg relative shadow-md overflow-hidden dark:bg-zinc-800'>
            <div className='w-full h-24 overflow-hidden bg-landscape bg-center'></div>
            <div className='rounded-full w-24 h-24 absolute left-1/2 top-24 -translate-x-1/2 -translate-y-1/2 overflow-hidden'>
                <img src={profileImg} alt='profile image' className='absolute -bottom-0' />
            </div>
            <div className='mt-12 p-4 flex flex-col items-center dark:text-slate-300'>
                <h1 className='text-center font-bold text-xl'>Sykong Yang</h1>
                <h2 className='text-center text-sm text-black/75 mt-2 dark:text-slate-400'>
                    Full Stack Developer - B.S. Computer Science
                </h2>
                <p className='text-center mt-4 max-w-prose'>
                    Becoming a developer is result of my passion to build and design things. When
                    I'm not pressing keys, I'll probably be unplugged and surrounded by nature 🌳.
                </p>
            </div>
            <div className='flex justify-center items-center gap-4 p-4'>
                <a href='https://github.com/syko99' target='_'>
                    <div className='w-8 hover:opacity-80'>
                        <img src={githubSVG} alt='github' />
                    </div>
                </a>
                <a href='https://www.linkedin.com/in/sykong-yang-07a6141b6/' target='_'>
                    <div className='w-11 hover:opacity-80'>
                        <img src={linkedinSVG} alt='email' />
                    </div>
                </a>
                <a href='mailto:sykong.yang1@outlook.com'>
                    <div className='w-10 hover:opacity-80'>
                        <img src={mailSVG} alt='email' />
                    </div>
                </a>
            </div>
        </div>
    )
}

export default About
